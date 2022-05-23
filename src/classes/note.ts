import { InterpreterBase, InterpreterOptions } from "./base";

export class Note extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/note\.com\/[\w-]+\/n\/.+/;
  }
  protected generateData(){
    const times = Note.Util.getTimes(this.$);
    return {
      times,
      date: new Date(times[0]),
      title: ((arr) => arr.slice(0, arr.length - 2).join("｜"))(this.data.title.split("｜")),
      author: this.url.split(/\//)[3]
    };
  }
}
