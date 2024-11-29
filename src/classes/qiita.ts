import { InterpreterBase, InterpreterOptions } from "@/classes/base";

export class Qiita extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/qiita\.com\/[\w-]+\/items\/.+/;
  }
  protected generateData(){
    const times = Qiita.Util.getTimes(this.$);
    return {
      times,
      date: new Date(times[0]),
      title: this.data.title.replace(/ - Qiita$/, ""),
      author: this.url.split(/\//)[3]
    };
  }
}
