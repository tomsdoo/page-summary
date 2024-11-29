import {
  Ameblo,
  Hatena,
  Note,
  PlainSite,
  Qiita,
  Zenn
} from "./classes/";

type PageSummaryData = {
  url: string;
  title: string;
  description: string;
  image: string;
  [key: string]: any;
};

export class PageSummary {
  public static async fetchOptions(url: string){
    const { data, $ } = await PlainSite.fetch(url);
    return {
      url,
      data,
      $
    };
  }
  public static async fetch(url: string): Promise<PageSummaryData> {
    const options = await this.fetchOptions(url);
    return {
      ...options.data,
      ...new Ameblo(options).getPageObject(),
      ...new Hatena(options).getPageObject(),
      ...new Note(options).getPageObject(),
      ...new Qiita(options).getPageObject(),
      ...new Zenn(options).getPageObject()
    };
  }
}
