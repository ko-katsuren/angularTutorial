import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserListService } from '../../services/userList/user-list.service';

@Component({
  selector: 'app-user-search-modal',
  templateUrl: './user-search-modal.component.html',
  styleUrls: ['./user-search-modal.component.css'],
})
export class UserSearchModalComponent implements OnInit {
  form = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    belong: new FormControl(),
  });

  constructor(
    public _dialogRef: MatDialogRef<UserSearchModalComponent>,
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {}

  search() {
    this.userListService.setSearchCondition(
      this.form.value.id,
      this.form.value.name,
      this.form.value.belong
    );

    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
