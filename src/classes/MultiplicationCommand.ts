import { Command } from "./Command";

export class MultiplicationCommand extends Command {
  constructor(number: string = "") {
    super("x", number);
  }

  calculate(number: number): number {
    return Number(this.number) * number;
  }
}
