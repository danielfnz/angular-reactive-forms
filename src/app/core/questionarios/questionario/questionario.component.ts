import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { QuestionariosService } from '../questionarios.service';
import { Questionarios } from '../questionarios.interface';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit, OnDestroy {

  questionarioId: number;
  questionario: Questionarios;

  isAlive = true;
  carregando = true;
  questionarioRespondido = false;

  form: FormGroup;
  erro: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private questionarioServico: QuestionariosService,
    private formBuilder: FormBuilder,
    private router: Router,
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
      perguntasSelect: this.formBuilder.array([]),
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  carregarDados(): any {
    this.carregando = true;
    this.erro = false;

    this.questionarioServico.getQuestionarioById(this.questionarioId).subscribe((response: Questionarios) => {
      this.questionario = response;

      if (response) {
        Object.keys(this.form.value).map((campo) => {
          if (campo === 'perguntas') {
            for (const iterator of response[campo]) {
              this.addPergunta();
            }
          }

          if (campo === 'perguntasSelect') {
            // tslint:disable-next-line:no-increment-decrement
            for (let index = 0; index < response[campo].length; index++) {
              const element = response[campo][index];
              this.addPerguntaSelect();
              for (const iterator2 of element.perguntas) {
                this.addPerguntaSelectFilha(this.getControls(this.form.controls['perguntasSelect'], `${index}`).perguntas);
              }
            }
          }

          this.form.patchValue({
            [campo]: response[campo],
          });

        });
      }
      this.carregando = false;
      this.erro = false;
    // tslint:disable-next-line:align
    }, (_error) => {
      this.router.navigate(['404']);
      this.erro = true;
    });
  }

  // Cria um formulario de perguntas, dentro do FormArray(perguntas)
  addPergunta(): void {
    const perguntas = this.form.get('perguntas') as FormArray;
    perguntas.push(this.criarPergunta());
  }

  criarPergunta(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      resposta: [null, Validators.required],
    });
  }

  // Cria um formulario de perguntas, dentro do FormArray(perguntasSelect)
  addPerguntaSelect(): void {
    const perguntasSelect = this.form.get('perguntasSelect') as FormArray;
    perguntasSelect.push(this.criarPerguntaSelect());
  }

  criarPerguntaSelect(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      perguntas: this.formBuilder.array([]),
    });
  }

  // Cria um formulario de perguntas, dentro do FormArray filho(perguntas) de (perguntasSelect)
  addPerguntaSelectFilha(control): void {
    const perguntasSelect = control as FormArray;
    perguntasSelect.push(this.criarPerguntaSubSelect());
  }

  criarPerguntaSubSelect(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      resposta: [null, Validators.required],
    });
  }

  botaoSalvar() {
    this.questionarioServico.updateQuestionario(this.questionarioId, this.form.value).then((sucesso) => {
      this.questionarioRespondido = true;
    }).catch((erro) => {
      console.error(erro);
      this.questionarioRespondido = false;
    });
  }

  botaoVoltar() {
    this._location.back();
  }

  getControls(form, key) {
    return form.get(key).controls;
  }
}
