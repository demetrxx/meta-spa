export interface Ticket {
  id: number;
  questions: { id: number }[];
  year: number;
  type: 'MAIN' | 'ADDITIONAL' | 'TEST';
}
