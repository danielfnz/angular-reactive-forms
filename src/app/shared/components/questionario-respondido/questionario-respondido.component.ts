import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questionario-respondido',
  templateUrl: './questionario-respondido.component.html',
  styleUrls: ['./questionario-respondido.component.scss'],
})
export class QuestionarioRespondidoComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit() {
  }

  voltarPagina() {
    this._location.back();
  }
}
