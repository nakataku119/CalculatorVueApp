import { Command } from "./Command";

export class MultiplicationCommand extends Command {
  constructor(number: string = "") {
    super("x", number);
  }

  calculate(answer: number): number {
    return answer * Number(this.number);
  }
}
