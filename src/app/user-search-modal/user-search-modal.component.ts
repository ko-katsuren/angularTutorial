import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  // 追加
import { UsersearchService } from '../usersearch.service';

@Component({
  selector: 'app-user-search-modal',
  templateUrl: './user-search-modal.component.html',
  styleUrls: ['./user-search-modal.component.css']
})

export class UserSearchModalComponent implements OnInit {

  form = this.fb.group({
    id: [''],
    name: [''],
    belong: [''],
  });

  constructor(public _dialogRef: MatDialogRef<UserSearchModalComponent>,
     private fb:FormBuilder) {
    }

  ngOnInit(): void {
    this.form = this.fb.group({

    })
  }

  search(){

    this.closeModal();
  }

  actionFunction() {
    alert("You have logged out.");
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
