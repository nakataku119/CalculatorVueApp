import { Command } from "./Command";
import { DivisionCommand } from "./DivisionCommand";
import { MinusCommand } from "./MinusCommand";
import { MultiplicationCommand } from "./MultiplicationCommand";
import { PlusCommand } from "./PlusCommand";

export class CommandManager {
  commandsHistory: Command[];
  currentCommand: Command;
  commandClasses = new Map<string, any>([
    ["+", PlusCommand],
    ["-", MinusCommand],
    ["x", MultiplicationCommand],
    ["÷", DivisionCommand],
    ["=", PlusCommand],
  ]);

  constructor(
    commandsHistory: Command[] = [new PlusCommand()],
    currentCommand: Command = commandsHistory[commandsHistory.length - 1]
  ) {
    this.commandsHistory = commandsHistory;
    this.currentCommand = currentCommand;
  }

  calculateAnswer() {
    let answer: number = 0;
    this.commandsHistory.forEach((command, index) => {
      if (index) {
      }
      answer = command.calculate(answer);
    });
    return answer;
  }

  getNumber() {
    if (this.currentCommand.number === "") {
      return String(this.calculateAnswer());
    } else {
      return this.currentCommand.number;
    }
  }

  addKey(key: string) {
    this.commandsHistory.splice(
      this.commandsHistory.indexOf(this.currentCommand) + 1
    );
    if (key === "CA") {
      // 入力中のコマンドと履歴を全てリセット
      this.commandsHistory = [new PlusCommand()];
      this.currentCommand =
        this.commandsHistory[this.commandsHistory.length - 1];
    } else if (this.commandClasses.get(key)) {
      // 入力中のコマンドのシンボルを変更
      if (this.currentCommand.number === "") {
        this.currentCommand.symbol = key;
        return;
      }
      // 新しいコマンドの作成
      const commandClass = this.commandClasses.get(key);
      this.commandsHistory.push(new commandClass());
      this.currentCommand =
        this.commandsHistory[this.commandsHistory.length - 1];
    } else {
      this.currentCommand.addNumber(key);
    }
    console.log(this.commandsHistory);
  }

  undo() {
    if (this.commandsHistory.indexOf(this.currentCommand) > 0) {
      const currentCommandCursor = this.commandsHistory.indexOf(
        this.currentCommand
      );
      this.currentCommand = this.commandsHistory[currentCommandCursor - 1];
    }
  }

  redo() {
    if (
      this.commandsHistory.indexOf(this.currentCommand) <
      this.commandsHistory.length - 1
    ) {
      const currentCommandCursor = this.commandsHistory.indexOf(
        this.currentCommand
      );
      this.currentCommand = this.commandsHistory[currentCommandCursor + 1];
    }
  }
}
