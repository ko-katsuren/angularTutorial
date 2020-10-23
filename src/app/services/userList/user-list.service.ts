import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo';
import { Observable, of } from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  // laravelとのやりとり実装するまではデータで作っておく
  usersInfo = [];
  detailInfo: UserInfo;

  constructor() {
    this.clear();
  }

  getAll(): Observable<UserInfo[]> {
    return of(this.usersInfo);
  }

  search(): void {}

  add(): void {}

  clear(): void {
    this.usersInfo = [
      new UserInfo(
        'katsuren1@gmail.com',
        1,
        '勝連1',
        '営業1',
        28,
        'コロラド州トラント'
      ),
      new UserInfo(
        'katsuren2@gmail.com',
        2,
        '勝連2',
        '営業2',
        33,
        '東京都世田谷区'
      ),
      new UserInfo(
        'katsuren3@gmail.com',
        3,
        '勝連3',
        '営業3',
        22,
        '大阪府泉佐野市'
      ),
      new UserInfo(
        'katsuren4@gmail.com',
        4,
        '勝連4',
        '営業4',
        55,
        '沖縄市上地'
      ),
    ];
  }

  setDetailInfo(id: number): void {
    this.detailInfo = this.usersInfo.find((user) => user.id === id);
  }

  getDetailInfo(): Observable<UserInfo> {
    return of(this.detailInfo);
  }
}
