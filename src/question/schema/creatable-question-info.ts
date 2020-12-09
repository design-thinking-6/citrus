export interface CreatableQuestionInfo {
  id: string;
  difficult: number;
  score: number;
  type: string;
  answer: string;

  hints: { time: number, value: string }[];
  flows: string[][];
}
