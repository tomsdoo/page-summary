import { PageSummary } from "../src/";
// @ts-ignore
import assert from "assert";
import { describe } from "mocha";

describe("PlainSite", () => {
  it("fetch plain", async () => {
    const url = "https://www.google.com/";
    const data = await PageSummary.fetch(url);
    assert(data.url === url);
  });
});

describe("Ameblo", () => {
  it("fetch Ameblo", async () => {
    const { $ } = await PageSummary.fetchOptions("https://ameblo.jp/");
    const selector = "body a[href^='https://ameblo.jp/'][href*='/entry-'][href*='.html']";
    const url = $(selector).attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/ | /));
  });
});

describe("Hatena", () => {
  const origin = "https://hatenablog.com";
  const state: { $: any } = {
    $: undefined
  };

  before(async () => {
    const { $ } = await PageSummary.fetchOptions(`${origin}/`);
    state.$ = $;
  });

  it("fetch hatenablog.com", async () => {
    const { $ } = state;
    assert(typeof $ !== "undefined");
    const url = $("body a[href*='hatenablog.com/entry/']").attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/\s-\s/));
  });

  it("fetch hatenadiary.com", async () => {
    const { $ } = state;
    assert(typeof $ !== "undefined");
    const url = $("body a[href*='hatenadiary.com/entry/']").attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/\s-\s/));
  });
});

describe("LineBlog", () => {
  const origin = "https://lineblog.me";
  it("fetch Note", async () => {
    const { $ } = await PageSummary.fetchOptions(origin);
    const selector = "body a[href^='https://lineblog.me/'][href*='/archives/']";
    const url = $(selector).attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/\s:\s/));
  });
});

describe("Note", () => {
  it("fetch Note", async () => {
    const url = "https://note.com/info/n/nea1b96233fbf";
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/｜/));
  });
});

describe("Qiita", () => {
  it("fetch Qiita", async () => {
    const origin = "https://qiita.com";
    const { $ } = await PageSummary.fetchOptions(origin);
    const selector = "body a[href^='https://qiita.com/'][href*='/items/']";
    const url = $(selector).attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(url);
    assert(!data.title.match(/ - Qiita$/));
  });
});

describe("Zenn", () => {
  it("fetch Zenn", async () => {
    const origin = "https://zenn.dev";
    const { $ } = await PageSummary.fetchOptions(origin);
    const selector = "body a[href^='/'][href*='/articles/']:not([href$='/articles/explore'])";
    const url = $(selector).attr("href");
    assert(typeof url === "string");
    const data = await PageSummary.fetch(`${origin}${url}`);
    assert(typeof data.description === "string");
  });
});
