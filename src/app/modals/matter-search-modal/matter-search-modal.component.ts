import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatterListService } from '../../services/matterList/matter-list.service';

@Component({
  selector: 'app-matter-search-modal',
  templateUrl: './matter-search-modal.component.html',
  styleUrls: ['./matter-search-modal.component.css'],
})
export class MatterSearchModalComponent implements OnInit {
  form = this.fb.group({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
  });

  constructor(
    public _dialogRef: MatDialogRef<MatterSearchModalComponent>,
    private fb: FormBuilder,
    private matterListService: MatterListService
  ) {}

  ngOnInit(): void {}

  search() {
    this.matterListService.setSearchCondition(
      this.form.value.id,
      this.form.value.name,
      this.form.value.price
    );

    this.closeModal();
  }

  // ダイアログを閉じる
  closeModal() {
    this._dialogRef.close();
  }
}
