export class Command {
  symbol: string;
  number: string;

  constructor(symbol: string, number: string) {
    this.symbol = symbol;
    this.number = number;
  }

  addNumber(number: string) {
    this.number += number;
  }

  calculate(answer: number): number {
    return answer + Number(this.number);
  }

  isPrioritySymbol(): boolean {
    return ["x", "÷"].includes(this.symbol);
  }
}
