export interface Questionario {
  id?: string;
  nomeQuestionario: string;
  perguntas: Pergunta[];
  perguntasSelect: Pergunta[];
}

export interface Pergunta {
  titulo: string;
  tipo: string;
  opcoes: string[];
  resposta?: string;
  perguntas?: Pergunta[];
}
