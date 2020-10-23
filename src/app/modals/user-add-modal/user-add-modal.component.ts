import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserListService } from '../../services/userList/user-list.service';

@Component({
  selector: 'app-user-add-modal',
  templateUrl: './user-add-modal.component.html',
  styleUrls: ['./user-add-modal.component.css'],
})
export class UserAddModalComponent implements OnInit {
  form = this.fb.group({
    email: [''],
    id: [''],
    name: [''],
    belong: [''],
    age: [''],
    address: [''],
  });

  constructor(
    public _dialogRef: MatDialogRef<UserAddModalComponent>,
    private fb: FormBuilder,
    userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  search() {
    this.closeModal();
  }

  actionFunction() {
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
