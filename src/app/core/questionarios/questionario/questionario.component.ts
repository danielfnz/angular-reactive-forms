import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { QuestionariosService } from '../questionarios.service';
import { Questionarios } from '../questionarios.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit, OnDestroy {

  perguntasSelect: FormArray;
  perguntas: FormArray;
  questionarioId: any;
  questionario: Questionarios;

  isAlive = true;
  carregando = true;
  questionarioRespondido = false;

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private questionarioServico: QuestionariosService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(
        takeWhile(() => this.isAlive),
      ).subscribe((values) => {
        this.questionarioId = values.id;

        if (this.questionarioId) {
          this.carregarDados();
        }
      });

    this.form = this.formBuilder.group({
      nomeQuestionario: [null, Validators.required],
      perguntas: this.formBuilder.array([]),
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  carregarDados(): any {
    this.questionarioServico.getQuestionarioById(this.questionarioId).subscribe((response: Questionarios) => {
      this.questionario = response;

      Object.keys(this.form.value).map((campo) => {
        if (campo in response) {
          if (campo === 'perguntas') {
            for (const iterator of response[campo]) {
              this.addPergunta();
              if (iterator.perguntas) {
                for (const iterator2 of iterator.perguntas) {
                  const indexSelect = response[campo].indexOf(iterator);
                  this.addPerguntaSelect(indexSelect);
                }
              }
            }
          }
          this.form.patchValue({
            [campo]: response[campo],
          });
        }
      });

      console.log(this.form);
      this.carregando = false;
    });
  }

  addPergunta(): void {
    this.perguntas = this.form.get('perguntas') as FormArray;
    this.perguntas.push(this.criarPergunta());
  }

  criarPergunta(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      resposta: [null, Validators.required],
      perguntas: this.formBuilder.array([]),
    });
  }

  addPerguntaSelect(index): void {
    this.perguntasSelect = this.form.get('perguntas').controls[index].controls['perguntas'] as FormArray;
    this.perguntasSelect.push(this.criarPerguntaSelect());
  }

  criarPerguntaSelect(): FormGroup {
    return this.formBuilder.group({
      resposta: [null, Validators.required],
    });
  }

  decisaoSalvar() {
    this.questionarioRespondido = true;
  }

  decisaoVoltar() {
    this._location.back();
  }
}
