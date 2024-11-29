import { beforeEach, describe, it, expect } from "vitest";
import { PageSummary } from "@/index";

describe("PlainSite", () => {
  it("fetch plain", async () => {
    const url = "https://www.google.com/";
    await expect(PageSummary.fetch(url)).resolves.toHaveProperty("url", url);
  });
});

describe("Ameblo", () => {
  it("fetch Ameblo", async () => {
    const { $ } = await PageSummary.fetchOptions("https://ameblo.jp/");
    const selector = "body a[href^='https://ameblo.jp/'][href*='/entry-'][href*='.html']";
    const url = $(selector).attr("href");
    expect(typeof url === "string").toBe(true);
    const data = await PageSummary.fetch(url!);
    expect(data.title.match(/ | /)).toBeNull();
  });
});

describe("Hatena", () => {
  const origin = "https://hatenablog.com";
  const state: { $: any } = {
    $: undefined
  };

  beforeEach(async () => {
    const { $ } = await PageSummary.fetchOptions(`${origin}/`);
    state.$ = $;
  });

  it("fetch hatenablog.com", async () => {
    const { $ } = state;
    expect(typeof $ !== "undefined").toBe(true);
    const url = $("body a[href*='hatenablog.com/entry/']").attr("href");
    expect(typeof url === "string").toBe(true);
    const data = await PageSummary.fetch(url);
    expect(data.title.match(/\s-\s/)).toBeNull();
  });

  it("fetch hatenadiary.com", async () => {
    const { $ } = state;
    expect(typeof $ !== "undefined").toBe(true);
    const url = $("body a[href*='hatenadiary.com/entry/']").attr("href");
    expect(typeof url === "string").toBe(true);
    const data = await PageSummary.fetch(url);
    expect(data.title.match(/.+/)).not.toBeNull();
  });
});

describe("Note", () => {
  it("fetch Note", async () => {
    const url = "https://note.com/info/n/nea1b96233fbf";
    const data = await PageSummary.fetch(url);
    expect(data.title.match(/｜/)).toBeNull();
  });
});

describe("Qiita", () => {
  it("fetch Qiita", async () => {
    const origin = "https://qiita.com";
    const { $ } = await PageSummary.fetchOptions(origin);
    const selector = "body a[href^='https://qiita.com/'][href*='/items/']";
    const url = $(selector).attr("href");
    expect(typeof url === "string").toBe(true);
    const data = await PageSummary.fetch(url!);
    expect(data.title.match(/ - Qiita$/)).toBeNull();
  });
});

describe("Zenn", () => {
  it("fetch Zenn", async () => {
    const origin = "https://zenn.dev";
    const { $ } = await PageSummary.fetchOptions(origin);
    const selector = "body a[href^='/'][href*='/articles/']:not([href$='/articles/explore'])";
    const url = $(selector).attr("href");
    expect(typeof url === "string").toBe(true);
    const data = await PageSummary.fetch(`${origin}${url}`);
    expect(typeof data.description === "string").toBe(true);
  });
});
