export interface ModifiableQuestionInfo {
  difficult?: number;
  score?: number;
  type?: string;
  answer?: string;

  hints?: { time: number, value: string }[];
  flows?: string[][];
}
