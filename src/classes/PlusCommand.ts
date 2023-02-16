import { Command } from "./Command";

export class PlusCommand extends Command {
  constructor(number: string = "") {
    super("+", number);
  }

  calculate(answer: number): number {
    return answer + Number(this.number);
  }
}
