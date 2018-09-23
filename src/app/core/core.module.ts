import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { CoreRouting } from './core.routing';

@NgModule({
  imports: [
    CommonModule,
    CoreRouting,
  ],
  declarations: [CoreComponent],
})
export class CoreModule { }
