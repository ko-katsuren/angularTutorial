import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo';
import { Observable, of } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from 'url';
import { TranslationWidth } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  // laravelとのやりとり実装するまではデータで作っておく
  usersInfo = [];
  searchCondition = {
    id: '',
    name: '',
    belong: '',
  };
  addInfo: UserInfo;
  detailInfo: UserInfo;
  editInfo: UserInfo;

  private apiUrl = 'http://localhost:8000/api/userinfo';
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null,
  };

  constructor(private httpClient: HttpClient) {
    this.setAuthorization('my-auth-token');
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(this.apiUrl, this.httpOptions);
  }

  public getSearchResult(): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/params', {
      params: {
        id: this.searchCondition.id,
        name: this.searchCondition.name,
        belong: this.searchCondition.belong,
      },
    });
  }

  public setAuthorization(token: string = null): void {
    if (!token) {
      return;
    }
    const bearerToken: string = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      bearerToken
    );
  }

  add(): void {
    const body = {
      email: this.addInfo.email,
      password: this.addInfo.password,
      name: this.addInfo.name,
      belong: this.addInfo.belong,
      age: this.addInfo.age,
      address: this.addInfo.address,
    };

    this.httpClient
      .post(this.apiUrl, 'body=' + JSON.stringify(body), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
      .subscribe(
        (res) => {
          console.log('success: ' + JSON.stringify(res));
        },
        (error) => {
          console.log('error: ' + JSON.stringify(error));
        }
      );
  }

  update(): void {
    this.httpClient
      .put(this.apiUrl + '/params', {
        params: {
          id: this.editInfo.id,
          name: this.editInfo.name,
          belong: this.editInfo.belong,
          age: this.editInfo.age,
          address: this.editInfo.address,
        },
      })
      .subscribe(
        (res) => {
          console.log('success: ' + JSON.stringify(res));
        },
        (error) => {
          console.log('error: ' + JSON.stringify(error));
        }
      );
  }

  clear(): void {
    this.usersInfo = [];
  }

  setDetailInfo(info: UserInfo): void {
    this.detailInfo = info;
  }

  getDetailInfo(): Observable<UserInfo> {
    return of(this.detailInfo);
  }

  setSearchCondition(id, name, belong): void {
    this.searchCondition.id = id ?? '';
    this.searchCondition.name = name ?? '';
    this.searchCondition.belong = belong ?? '';
  }

  setEditUserInfo(userInfo: UserInfo): void {
    this.editInfo = userInfo;
  }

  getEditUserInfo(): UserInfo {
    return this.editInfo;
  }

  setAddUserInfo(info: UserInfo) {
    this.addInfo = info;
  }
}
