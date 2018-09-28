import { Questionario } from './../../../shared/models/questionario.interface';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
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
  @Input() questionarioId: string;
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

    if (this.questionarioId) {
      this.carregarDados();

    } else {
      this.activatedRoute.params
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((values) => {
        this.questionarioId = values.id;

        if (this.questionarioId) {
          this.carregarDados();
        }
      });
    }

    this.form = this.formBuilder.group({
      nomeQuestionario: [null, Validators.required],
      perguntas: this.formBuilder.array([]),
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
      this.form.patchValue({
        [campo]: questionario[campo],
      });
    });
  }

  popularPergunta(campo) {
    const perguntas = this.form.get('perguntas') as FormArray;
  // tslint:disable-next-line:no-increment-decrement
    for (let index = 0; index < this.questionario[campo].length; index++) {
      const element = this.questionario[campo][index];

      if (element.tipo === 'radio') {
        perguntas.push(this.criaPergunta(Validators.required));

      } else if (element.tipo === 'select') {
        perguntas.push(this.criaPergunta(null));

        for (const iterator2 of element.perguntas) {
          this.addPerguntaSelect(
            this.getControls(
              this.form.controls['perguntas'], `${index}`).perguntas,
          );
        }
      }

    }
  }

  criaPergunta(respostaRequired): FormGroup {
    return this.formBuilder.group({
      titulo: [null, Validators.required],
      tipo: [null, Validators.required],
      opcoes: [null, Validators.required],
      resposta: [null, respostaRequired],
      perguntas: this.formBuilder.array([]),
    });
  }

  addPerguntaSelect(control): void {
    const perguntasSelect = control as FormArray;
    perguntasSelect.push(this.criarPerguntaSelect());
  }

  criarPerguntaSelect(): FormGroup {
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
