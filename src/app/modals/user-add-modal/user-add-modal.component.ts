import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfo } from 'src/app/models/userInfo';
import { UserListService } from '../../services/userList/user-list.service';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.css'],
})
export class UserAddModalComponent implements OnInit {
  form = this.fb.group({
    email: new FormControl(),
    password: new FormControl(),
    name: new FormControl(),
    belong: new FormControl(),
    age: new FormControl(),
    address: new FormControl(),
  });

  constructor(
    public _dialogRef: MatDialogRef<UserAddModalComponent>,
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {}

  add() {
    this.userListService.setAddUserInfo(
      new UserInfo(
        this.form.value.email,
        this.form.value.password,
        null,
        this.form.value.name,
        this.form.value.belong,
        this.form.value.age,
        this.form.value.address
      )
    );
    this.userListService.add();
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
