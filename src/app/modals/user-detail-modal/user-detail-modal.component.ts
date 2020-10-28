import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserInfo } from '../../models/userInfo';
import { UserListService } from '../../services/userList/user-list.service';

@Component({
  selector: 'app-user-detail-modal',
  templateUrl: './user-detail-modal.component.html',
  styleUrls: ['./user-detail-modal.component.css'],
})
export class UserDetailModalComponent implements OnInit {
  detailInfo: UserInfo;

  constructor(
    public _dialogRef: MatDialogRef<UserDetailModalComponent>,
    private fb: FormBuilder,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.userListService.getDetailInfo().subscribe((userInfo: UserInfo) => {
      this.detailInfo = userInfo;
    });
  }

  edit() {
    this.userListService.setEditUserInfo(this.detailInfo);
    this.closeModal(true);
  }

  close() {
    this.closeModal(false);
  }

  // ダイアログを閉じる
  closeModal(clickedEdit: boolean) {
    this._dialogRef.close(clickedEdit);
  }
}
