export interface IConceptoDiario {
  conceptId: number;
  description: string;
  credit: boolean;
  transactionDate: Date;
  ammount: number;
  tags: string[];
}

