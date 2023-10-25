export interface Question {
  id: number;
  name: string;
  desc?: string;
  type: 'SINGLE' | 'ORDER' | 'MATCH' | 'SELECT';
  img?: string;
  options: Array<any>;
  correct: Array<string> | string;
  topicId: number;
  keyWords?: Array<{ id: number; value: string }>;
  solution?: string;
  whereToLearn?: Array<string>;
  advice?: string;
}
