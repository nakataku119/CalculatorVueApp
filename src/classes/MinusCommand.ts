import { Command } from "./Command";

export class MinusCommand extends Command {
  constructor(number: string = "") {
    super("-", number);
  }

  calculate(answer: number): number {
    return answer - Number(this.number);
  }
}
