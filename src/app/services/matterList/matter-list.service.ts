import { Injectable } from '@angular/core';
import { MatterInfo } from '../../models/matterInfo';
import { Observable, of } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatterListService {
  private httpOptions: any = {
    // ヘッダ情報
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    // DELETE 実行時に `body` が必要になるケースがあるのでプロパティとして用意しておく
    // ( ここで用意しなくても追加できるけど... )
    body: null,
  };

  private host: string = 'http://localhost:8000';

  // laravelとのやりとり実装するまではデータで作っておく
  mattersInfo = [];
  detailInfo: MatterInfo;

  constructor() {
    this.clear();
    this.setAuthorization('my-auth-token');
  }

  getAll(): Observable<MatterInfo[]> {
    return of(this.mattersInfo);
  }

  search(): void {}

  add(): void {}

  clear(): void {
    this.mattersInfo = [
      new MatterInfo(1, 'どっこいビル建築工事', 100000000),
      new MatterInfo(2, 'ばっちこいビル改修工事', 300000000),
      new MatterInfo(3, 'あれあれハウス改修工事', 50000000),
      new MatterInfo(4, '田中邸改修工事', 250000000),
      new MatterInfo(5, 'やっさいモッサい工事', 40000000),
    ];
  }

  setDetailInfo(id: number): void {
    this.detailInfo = this.mattersInfo.find((matter) => matter.id === id);
  }

  getDetailInfo(): Observable<MatterInfo> {
    return of(this.detailInfo);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
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
}
