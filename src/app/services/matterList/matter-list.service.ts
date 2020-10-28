import { Injectable } from '@angular/core';
import { MatterInfo } from '../../models/matterInfo';
import { Observable, of } from 'rxjs/index';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatterListService {
  mattersInfo = [];
  searchCondition = {
    id: '',
    name: '',
    price: null,
  };
  addInfo: MatterInfo;

  private apiUrl = 'http://localhost:8000/api/matterinfo';
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
        price: this.searchCondition.price,
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

  search(): void {}

  add(): void {
    const body = {
      name: this.addInfo.name,
      price: this.addInfo.price,
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

  setSearchCondition(id, name, price): void {
    this.searchCondition.id = id ?? '';
    this.searchCondition.name = name ?? '';
    this.searchCondition.price = price ?? '';
  }

  setAddMatterInfo(info: MatterInfo): void {
    this.addInfo = info;
  }
}
