import { Questionario } from './questionario.interface';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { QuestionariosService } from '../questionarios.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit, OnDestroy {
  questionarioId: any;
  questionario: Questionario;

  isAlive = true;
  loading = true;
  erro: boolean;
  questionarioRespondido = false;

  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private questionarioService: QuestionariosService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((values) => {
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
    this.loading = true;
    this.erro = false;

    this.questionarioService.getQuestionarioById(this.questionarioId).subscribe(
      (questionario: Questionario) => {
        this.questionario = questionario;

        if (this.questionario != null) {
          this.popularFormulario(this.questionario);
        }

        this.loading = false;
        this.erro = false;
        // tslint:disable-next-line:align
      },
      (_error) => {
        this.router.navigate(['404']);
        this.erro = true;
      },
    );
  }

  popularFormulario(questionario) {
    Object.keys(this.form.value).map((campo) => {
      if (campo === 'perguntas') {
        this.popularPergunta(campo);
      }

      if (campo === 'perguntasSelect') {
        this.popularPerguntaSelect(campo);
      }

      this.form.patchValue({
        [campo]: questionario[campo],
      });
    });
  }

  popularPergunta(campo) {
    for (const iterator of this.questionario[campo]) {
      const perguntas = this.form.get('perguntas') as FormArray;
      perguntas.push(this.criarPergunta());
    }
  }

  criarPergunta(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      resposta: [null, Validators.required],
    });
  }

  popularPerguntaSelect(campo) {
    // tslint:disable-next-line:no-increment-decrement
    for (let index = 0; index < this.questionario[campo].length; index++) {
      const element = this.questionario[campo][index];

      const perguntasSelect = this.form.get('perguntasSelect') as FormArray;
      perguntasSelect.push(this.criarPerguntaSelect());

      for (const iterator2 of element.perguntas) {
        this.addPerguntaSelectFilha(
          this.getControls(
            this.form.controls['perguntasSelect'], `${index}`).perguntas,
        );
      }
    }
  }

  criarPerguntaSelect(): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      perguntas: this.formBuilder.array([]),
    });
  }

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
    this.questionarioService
      .updateQuestionario(this.questionarioId, this.form.value)
      .then((sucesso) => {
        this.questionarioRespondido = true;
      })
      .catch((erro) => {
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
