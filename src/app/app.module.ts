import { App404Component } from './erros/404/404.component';
import { SharedModule } from './shared/shared.module';
import { AppRouting } from './app.routing';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { QuestionarioComponent } from './core/questionario/questionario.component';
import { QuestionarioRespondidoComponent } from './core/questionario/questionario-respondido/questionario-respondido.component';
import { InicioComponent } from './core/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    App404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRouting,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
