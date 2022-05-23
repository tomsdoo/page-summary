import { InterpreterBase, InterpreterOptions } from "./base";

export class LineBlog extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/lineblog\.me\/[\w-]+\/archives\/.+/;
  }
  protected generateData(){
    const times = LineBlog.Util.getTimes(this.$);
    return {
      times,
      date: new Date(times[0]),
      title: this.$("head meta[property='og:title']").attr("content").split(" : ")[0]
    };
  }
}
