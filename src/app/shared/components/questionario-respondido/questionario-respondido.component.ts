import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionario-respondido',
  templateUrl: './questionario-respondido.component.html',
  styleUrls: ['./questionario-respondido.component.scss'],
})
export class QuestionarioRespondidoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  voltarPagina() {
    this.router.navigate(['/']);
  }
}
