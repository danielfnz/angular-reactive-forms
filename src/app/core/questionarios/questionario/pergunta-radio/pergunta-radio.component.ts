import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pergunta-radio',
  templateUrl: './pergunta-radio.component.html',
  styleUrls: ['./pergunta-radio.component.scss'],
})
export class PerguntaRadioComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() opcoes = [];
  @Input() titulo;
  @Input() ordem;

  constructor() { }

  ngOnInit() {
  }

}
