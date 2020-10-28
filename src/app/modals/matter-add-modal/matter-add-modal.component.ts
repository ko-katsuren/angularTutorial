import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatterInfo } from 'src/app/models/matterInfo';
import { MatterListService } from '../../services/matterList/matter-list.service';

@Component({
  selector: 'app-matter-add-modal',
  templateUrl: './matter-add-modal.component.html',
  styleUrls: ['./matter-add-modal.component.css'],
})
export class MatterAddModalComponent implements OnInit {
  form = this.fb.group({
    email: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
  });

  constructor(
    public _dialogRef: MatDialogRef<MatterAddModalComponent>,
    private fb: FormBuilder,
    private matterListService: MatterListService
  ) {}

  ngOnInit(): void {}

  add() {
    this.matterListService.setAddMatterInfo(
      new MatterInfo(null, this.form.value.name, this.form.value.price)
    );
    this.matterListService.add();
    this.closeModal();
  }

  search() {
    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
