import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { CoreRouting } from './core.routing';
import { QuestionariosService } from './questionarios/questionarios.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRouting,
  ],
  providers : [QuestionariosService],
  declarations: [CoreComponent],
})
export class CoreModule { }
