import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalTermosComponent } from '../../shared/components/modal-termos/modal-termos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  idQuestionario: any = '5bad65fa33000077000eb5ba';
  questionarioRespondido = false;
  loading = true;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    // APENAS PARA SIMULAR O CARREGAMENTO
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    },         2000);
  }

  decisaoNegar() {
    const dialogRef = this.dialog.open(ModalTermosComponent, {
      data : {
        titulo : 'Termos',
        // tslint:disable-next-line:max-line-length
        termos : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum sem ut arcu iaculis interdum. Integer et tempus diam. Aliquam vitae bibendum orci. Praesent sodales purus eget justo malesuada suscipit. Aenean ultricies fermentum quam, vitae sodales libero fermentum ut. Phasellus quis maximus nisl. Cras enim ante, consectetur vel sagittis nec, blandit non felis. Praesent eget cursus massa. Etiam a porta ante, in tincidunt neque. Nam consectetur dolor quis nibh mollis, mollis pellentesque est facilisis. Praesent luctus sagittis luctus. Etiam pretium, eros vel gravida consectetur, mauris diam tempor orci, eget sagittis tellus neque a turpis. Donec pretium consequat nibh, eu viverra mauris ultrices et.',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.router.navigate(['/inicio/questionariorespondido']);
      }
    });
  }

  decisaoAceitar() {
    this.router.navigate([`/questionarios/${this.idQuestionario}`]);
  }

}
