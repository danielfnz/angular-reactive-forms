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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { App404Component } from '../erros/404/404.component';
import { QuestionarioRespondidoComponent } from './components/questionario-respondido/questionario-respondido.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    App404Component,
    QuestionarioRespondidoComponent,
    LoadingComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        autoFocus : false,
        maxWidth : '600px',
        disableClose : true,
        hasBackdrop: true,
      },
    },
  ],
  declarations: [ModalTermosComponent, App404Component, QuestionarioRespondidoComponent, LoadingComponent],
  entryComponents: [ModalTermosComponent],
})
export class SharedModule { }
