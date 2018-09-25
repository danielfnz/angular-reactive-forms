import { ModalTermosComponent } from './components/modal-termos/modal-termos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatGridListModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        autoFocus : false,
        maxWidth : '500px',
        disableClose : true,
        hasBackdrop: true,
      },
    },
  ],
  declarations: [ModalTermosComponent],
  entryComponents: [ModalTermosComponent],
})
export class SharedModule { }
