import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.scss'],
})
export class App404Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  voltarPagina() {
    this.router.navigate(['/']);
  }
}
