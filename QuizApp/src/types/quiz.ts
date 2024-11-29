export interface Quiz {
  question: string;
  answers: Array<string>
  points: number;
}

export interface QuizObject {
  name: Array<Quiz>;
}