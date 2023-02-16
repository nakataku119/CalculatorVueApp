import { Command } from "./Command";

export class DivisionCommand extends Command {
  constructor(number: string = "") {
    super("÷", number);
  }

  calculate(answer: number): number {
    return answer / Number(this.number);
  }
}
