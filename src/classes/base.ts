import * as cheerio from "cheerio";
import { Util } from "@/classes/util";

export type InterpreterOptions = {
  url: string;
  data: any;
  $: Function;
};

export class InterpreterBase {
  public static Util = Util;
  protected url: string;
  protected data: any;
  protected $: Function;
  protected urlRegExp: RegExp;
  protected util: typeof Util;
  constructor(options: InterpreterOptions){
    this.url = options.url;
    this.data = options.data;
    this.$ = options.$;
    this.urlRegExp = /^notfound$/;
    this.util = Util;
  }
  protected match(){
    return this.url.match(this.urlRegExp);
  }
  protected generateData(){
    return { ...this.data };
  }
  public getPageObject(){
    return this.match()
      ? { ...this.generateData(), type: this.constructor.name }
      : {};
  }
  public static async fetch(url: string){
    const html = await fetch(url).then(res => res.text());
    const $ = cheerio.load(html);
    const title = $("head title").text();
    const metaDescription = ($("head meta[name='description']").attr("content") || "")
      .replace(/\n/g, " ").replace(/\s+/g, " ").replace(/^\s+/, "");
    const ogDescription = ($("head meta[property='og:description']").attr("content") || "")
      .replace(/\n/g, " ").replace(/\s+/g, " ").replace(/^\s+/, "");
    const ogImage = $("head meta[property='og:image']").attr("content");
    return {
      $,
      data: {
        image: ogImage,
        title,
        description: metaDescription || ogDescription,
        url
      }
    };
  }
}
