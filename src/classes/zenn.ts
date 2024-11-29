import { InterpreterBase, InterpreterOptions } from "@/classes/base";

export class Zenn extends InterpreterBase {
  constructor(options: InterpreterOptions){
    super(options);
    this.urlRegExp = /https?:\/\/zenn\.dev\/[\w-]+\/articles\/.+/;
  }
  protected generateData(){
    const times = Zenn.Util.getTimes(this.$);
    const tempDescription = this.$("body #toc-target-content").text().replace(/\n/g, " ").replace(/\s+/g, " ").replace(/^\s+/, "");
    return {
      times,
      date: new Date(times[0]),
      description: this.data.description || tempDescription,
      author: this.url.split(/\//)[3]
    };
  }
}
