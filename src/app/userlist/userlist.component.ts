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
import { UserEditModalComponent } from '../modals/user-edit-modal/user-edit-modal.component';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  userList: UserInfo[];

  constructor(
    public _matdialog: MatDialog,
    private userListService: UserListService
  ) {}

  ngOnInit(): void {
    this.userListService.getAll().subscribe((usersInfo: Observable<any>) => {
      this.userList = this.makeUserInfoList(usersInfo);
    });
  }

  private makeUserInfoList(array: Observable<any>): UserInfo[] {
    const result = [];
    array['userData'].forEach((data) => {
      const profile = array['profileData'].find(
        (profile) => profile[0].user_id === data.id
      );

      result.push(
        new UserInfo(
          data.email,
          '',
          data.id,
          data.name,
          profile[0].belong,
          profile[0].age,
          profile[0].address
        )
      );
    });

    return result;
  }

  openSearchModal() {
    const modalDialog = this.openModal(UserSearchModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      this.userListService
        .getSearchResult()
        .subscribe((usersInfo: Observable<any>) => {
          this.userList = this.makeUserInfoList(usersInfo);
        });
    });
  }

  openDetailModal(id: number) {
    // Serviceにidを渡して、モーダルに表示するデータを設定する
    this.userListService.setDetailInfo(
      this.userList.find((data) => data.id === id)
    );

    const modalDialog = this.openModal(UserDetailModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // result=true:編集ボタン押下、result=false:閉じるボタン押下
      if (result) {
        // 編集ボタン押下の場合は、editmodalを表示
        this.openEditModal();
      }
    });
  }

  openEditModal() {
    const modalDialog = this.openModal(UserEditModalComponent);

    // modal閉じられた後に全データ取得し表示する。
    modalDialog.afterClosed().subscribe((result: any) => {
      this.userListService.getAll().subscribe((usersInfo: Observable<any>) => {
        this.userList = this.makeUserInfoList(usersInfo);
      });
    });
  }

  openAddModal() {
    const modalDialog = this.openModal(UserAddModalComponent);

    // modal閉じられた後に全データ取得し表示する。
    modalDialog.afterClosed().subscribe((result: any) => {
      this.userListService.getAll().subscribe((usersInfo: Observable<any>) => {
        this.userList = this.makeUserInfoList(usersInfo);
      });
    });
  }

  openModal(modalComponent: any): MatDialogRef<any, any> {
    const dialogConfig = new MatDialogConfig();

    // 表示するdialogの設定
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';

    return this._matdialog.open(modalComponent, dialogConfig);
  }
}
