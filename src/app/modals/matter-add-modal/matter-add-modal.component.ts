import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatterListService } from '../../services/matterList/matter-list.service';

@Component({
  selector: 'app-matter-add-modal',
  templateUrl: './matter-add-modal.component.html',
  styleUrls: ['./matter-add-modal.component.css'],
})
export class MatterAddModalComponent implements OnInit {
  form = this.fb.group({
    email: [''],
    id: [''],
    name: [''],
    price: [''],
  });

  constructor(
    public _dialogRef: MatDialogRef<MatterAddModalComponent>,
    private fb: FormBuilder,
    userListService: MatterListService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
  }

  search() {
    this.closeModal();
  }

  actionFunction() {
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
