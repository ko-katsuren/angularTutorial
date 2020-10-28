import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfo } from 'src/app/models/userInfo';
import { UserListService } from '../../services/userList/user-list.service';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.css'],
})
export class UserEditModalComponent implements OnInit {
  form = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    belong: new FormControl(),
    age: new FormControl(),
    address: new FormControl(),
  });

  constructor(
    public _dialogRef: MatDialogRef<UserEditModalComponent>,
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    const editInfo = this.userListService.getEditUserInfo();
    this.form.setValue({
      id: editInfo.id,
      name: editInfo.name,
      belong: editInfo.belong,
      age: editInfo.age,
      address: editInfo.address,
    });
  }

  edit() {
    this.userListService.setEditUserInfo(
      new UserInfo(
        '',
        '',
        this.form.value.id,
        this.form.value.name,
        this.form.value.belong,
        this.form.value.age,
        this.form.value.address
      )
    );

    this.userListService.update();
    this.closeModal();
  }

  close() {
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
