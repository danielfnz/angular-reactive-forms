import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questionario-nao-encontrado',
  templateUrl: './questionario-nao-encontrado.component.html',
  styleUrls: ['./questionario-nao-encontrado.component.scss'],
})
export class QuestionarioNaoEncontradoComponent implements OnInit {

  constructor(private _location: Location) {
  }

  ngOnInit() {
  }

  voltarPagina() {
    this._location.back();
  }

}
