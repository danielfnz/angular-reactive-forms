import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pergunta-select',
  templateUrl: './pergunta-select.component.html',
  styleUrls: ['./pergunta-select.component.scss'],
})
export class PerguntaSelectComponent {
  @Input() form: FormGroup;
  @Input() opcoes = [];
  @Input() titulo;

  constructor() { }

}
