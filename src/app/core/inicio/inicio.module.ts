import { InicioRouting } from './inicio.routing';
import { InicioComponent } from './inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    InicioRouting,
  ],
  declarations: [InicioComponent],
})
export class InicioModule { }
