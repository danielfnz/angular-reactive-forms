export interface Questionarios {
  id?: string;
  nomeQuestionario: string;
  perguntas: Pergunta[];
}

export interface Pergunta {
  titulo: string;
  tipo: string;
  opcoes: string[];
  resposta?: string;
  perguntas?: Pergunta[];
}
