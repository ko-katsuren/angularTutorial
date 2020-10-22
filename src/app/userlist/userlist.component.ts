import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserSearchModalComponent } from '../user-search-modal/user-search-modal.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

alertDialogResult = '';

  constructor(public _matdialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();


    // 表示するdialogの設定
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "400px";

    const modalDialog = this._matdialog.open(UserSearchModalComponent, dialogConfig);

   modalDialog.afterClosed().subscribe( (result:any) => {
      // 結果をセット
      this.alertDialogResult = result;
});
  }
}
