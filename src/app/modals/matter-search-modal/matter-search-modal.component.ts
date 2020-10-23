import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatterListService } from '../../services/matterList/matter-list.service';

@Component({
  selector: 'app-matter-search-modal',
  templateUrl: './matter-search-modal.component.html',
  styleUrls: ['./matter-search-modal.component.css'],
})
export class MatterSearchModalComponent implements OnInit {
  form = this.fb.group({
    id: [''],
    name: [''],
    price: [''],
  });

  constructor(
    public _dialogRef: MatDialogRef<MatterSearchModalComponent>,
    private fb: FormBuilder,
    matterListService: MatterListService
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
