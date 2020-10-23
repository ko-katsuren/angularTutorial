import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserInfo } from '../models/userInfo';
import { UserListService } from '../services/userList/user-list.service';
import { UserAddModalComponent } from '../modals/user-add-modal/user-add-modal.component';
import { UserSearchModalComponent } from '../modals/user-search-modal/user-search-modal.component';
import { UserDetailModalComponent } from '../modals/user-detail-modal/user-detail-modal.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  alertDialogResult = '';
  userList: UserInfo[];

  constructor(
    public _matdialog: MatDialog,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.userListService.getAll().subscribe((usersInfo: UserInfo[]) => {
      this.userList = usersInfo;
    });
  }

  openSearchModal() {
    const modalDialog = this.openModal(UserSearchModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // 結果をセット
      this.alertDialogResult = result;
    });
  }

  openDetailModal(id: number) {
    // Serviceにidを渡して、モーダルに表示するデータを設定する
    this.userListService.setDetailInfo(id);

    const modalDialog = this.openModal(UserDetailModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // 結果をセット
      this.alertDialogResult = result;
    });
  }

  openAddModal() {
    const modalDialog = this.openModal(UserAddModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // 結果をセット
      this.alertDialogResult = result;
    });
  }

  openModal(modalComponent: any): MatDialogRef<UserDetailModalComponent, any> {
    const dialogConfig = new MatDialogConfig();

    // 表示するdialogの設定
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';

    return this._matdialog.open(modalComponent, dialogConfig);
  }
}
