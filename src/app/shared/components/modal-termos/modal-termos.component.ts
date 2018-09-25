import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-termos',
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.scss'],
})
export class ModalTermosComponent {

  termosAceitosCheckBox = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalTermosComponent>,
  ) { }

  aceitouTermos() {
    this.dialogRef.close(true);
  }

  declinouTermos() {
    this.dialogRef.close(false);
  }

}
