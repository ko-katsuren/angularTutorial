import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatterInfo } from '../models/matterInfo';
import { MatterAddModalComponent } from '../modals/matter-add-modal/matter-add-modal.component';
import { MatterSearchModalComponent } from '../modals/matter-search-modal/matter-search-modal.component';
import { MatterListService } from '../services/matterList/matter-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matterlist',
  templateUrl: './matterlist.component.html',
  styleUrls: ['./matterlist.component.css'],
})
export class MatterlistComponent implements OnInit {
  alertDialogResult = '';
  matterList: MatterInfo[];

  constructor(
    public _matdialog: MatDialog,
    private matterListService: MatterListService
  ) {}

  ngOnInit(): void {
    this.matterListService
      .getAll()
      .subscribe((mattersInfo: Observable<any>) => {
        this.matterList = this.makeMatterInfoList(mattersInfo);
      });
  }

  private makeMatterInfoList(array: Observable<any>): MatterInfo[] {
    const result = [];
    array['matterData'].forEach((data) => {
      result.push(new MatterInfo(data.id, data.name, data.price));
    });

    return result;
  }

  openSearchModal() {
    const modalDialog = this.openModal(MatterSearchModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // 結果をセット
      this.alertDialogResult = result;

      this.matterListService
        .getSearchResult()
        .subscribe((mattersInfo: Observable<any>) => {
          this.matterList = this.makeMatterInfoList(mattersInfo);
        });
    });
  }

  openAddModal() {
    const modalDialog = this.openModal(MatterAddModalComponent);

    modalDialog.afterClosed().subscribe((result: any) => {
      // 結果をセット
      this.alertDialogResult = result;
      this.matterListService
        .getAll()
        .subscribe((mattersInfo: Observable<any>) => {
          this.matterList = this.makeMatterInfoList(mattersInfo);
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
