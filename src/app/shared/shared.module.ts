import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSelectModule, MatCheckboxModule, MatGridListModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
  ],
  declarations: [],
})
export class SharedModule { }
