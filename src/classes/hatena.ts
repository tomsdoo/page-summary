import { InterpreterBase, InterpreterOptions } from "./base";

export class Hatena extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/[\w-]+\.(hatenablog\.com|hatenadiary\.com|hateblo\.jp|hatenablog\.jp|hatenadiary\.jp)\/entry\/[0-9]{1,4}\/[0-9]{1,2}\/[0-9]{1,2}\/.+/;
  }
  protected generateData(){
    const times = Hatena.Util.getTimes(this.$);
    return {
      times,
      date: new Date(times[0]),
      title: this.data.title.split(" - ")[0]
    };
  }
}
