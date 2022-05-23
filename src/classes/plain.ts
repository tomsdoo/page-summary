import { InterpreterBase, InterpreterOptions } from "./base";

export class PlainSite extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /^http/;
  }
}
