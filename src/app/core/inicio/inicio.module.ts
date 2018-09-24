import { SharedModule } from './../../shared/shared.module';
import { InicioRouting } from './inicio.routing';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    InicioRouting,
    SharedModule,
  ],
  declarations: [InicioComponent],
})
export class InicioModule { }
