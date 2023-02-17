import { Command } from "./Command";
import { DivisionCommand } from "./DivisionCommand";
import { MinusCommand } from "./MinusCommand";
import { MultiplicationCommand } from "./MultiplicationCommand";
import { PlusCommand } from "./PlusCommand";

export class CommandManager {
  commandsHistory: Command[];
  commandClasses = new Map<string, any>([
    ["+", PlusCommand],
    ["-", MinusCommand],
    ["x", MultiplicationCommand],
    ["÷", DivisionCommand],
    ["=", PlusCommand],
  ]);
  currentCommandCursor: number = 0;

  constructor(commandsHistory: Command[] = [new PlusCommand()]) {
    this.commandsHistory = commandsHistory;
  }
  /**
   * 入力された数字の合計を計算して返す
   *
   *
   *
   * @returns 計算結果
   *
   */
  calculateAnswer() {
    let answer: number = 0;
    this.commandsHistory.forEach((command, index) => {
      if (index) {
      }
      answer = command.calculate(answer);
    });
    return answer;
  }
  /**
   * 表示する数字を取得
   *
   *
   *
   * @returns 表示する数字の文字列
   *
   */
  getNumberString() {
    if (this.currentCommand.number === "") {
      return String(this.calculateAnswer());
    } else {
      return this.currentCommand.number;
    }
  }
  /**
   * 押されたキーボードを追加
   *
   *
   *
   * @param key - 押されたキー
   *
   */
  addKey(key: string) {
    this.commandsHistory.splice(this.currentCommandCursor + 1);
    if (key === "CA") {
      // 入力中のコマンドと履歴を全てリセット
      this.commandsHistory = [new PlusCommand()];
      this.currentCommandCursor = 0;
    } else if (this.commandClasses.get(key)) {
      // 入力中のコマンドのシンボルを変更
      if (this.currentCommand.number === "") {
        this.currentCommand.symbol = key;
        return;
      }
      // 新しいコマンドの作成
      const commandClass = this.commandClasses.get(key);
      this.commandsHistory.push(new commandClass());
      this.currentCommandCursor++;
    } else {
      this.currentCommand.addNumber(key);
    }
    console.log(this.commandsHistory);
  }

  undo() {
    if (this.currentCommandCursor > 0) {
      this.currentCommandCursor--;
    }
  }

  public redo() {
    if (this.currentCommandCursor < this.commandsHistory.length - 1) {
      this.currentCommandCursor++;
    }
  }

  private get currentCommand(): Command {
    return this.commandsHistory[this.currentCommandCursor];
  }
}
