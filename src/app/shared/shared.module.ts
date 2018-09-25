import { ModalTermosComponent } from './components/modal-termos/modal-termos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatSelectModule,
  MatCheckboxModule,
  MatGridListModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatRadioModule,
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
