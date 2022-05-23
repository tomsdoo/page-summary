import { InterpreterBase, InterpreterOptions } from "./base";

export class Ameblo extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/ameblo\.jp\/[\w-]+\/.+/;
  }
  protected generateData(){
    const times = Ameblo.Util.getTimes(this.$);
    return {
      times,
      date: new Date(times[0]),
      title: this.data.title.split(" | ")[0]
    };
  }
}
