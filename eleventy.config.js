import markdownIt from "markdown-it";
import markdownItWikilinksPlugin from "markdown-it-wikilinks";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import postcss from "postcss";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";

// markdown-it plugin converts [[Wiki Links]] to <a href="/wiki/wiki-links/">Wiki Links</a>
const markdownItWikilinks = markdownItWikilinksPlugin({
  baseURL: "/wiki/",
  makeAllLinksAbsolute: true,
  uriSuffix: "/",
  postProcessPageName: (pageName) => {
    return pageName.trim().toLowerCase().replace(/\s+/g, "-");
  },
});

export default function (eleventyConfig) {
  eleventyConfig.addBundle("css");
  // syntax plugin for code block styling (```<language> in markdown)
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
    dynamicPartials: false,
    strictFilters: false,
  });

  // markdown-it options for parsing markdown files in the wiki directory
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  let md = markdownIt(mdOptions).use(markdownItWikilinks);
  eleventyConfig.setLibrary("md", md);

  // postcss setup
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      const result = await postcss([postcssNested, autoprefixer]).process(
        inputContent,
        { from: inputPath },
      );
      return async () => result.css;
    },
  });

  eleventyConfig.addFilter("filterByTag", function (collection, tag) {
    if (!collection) return [];

    return collection.filter((item) => {
      const tags = item.data.tags || [];
      return tags.includes(tag);
    });
  });

  eleventyConfig.addCollection("wikiTags", function (wikiCollection) {
    const tagSet = new Set();

    wikiCollection.getFilteredByTag("wiki").forEach((item) => {
      const tags = item.data.tags || [];

      tags.forEach((tag) => {
        if (tag !== "wiki") {
          tagSet.add(tag);
        }
      });
    });

    return [...tagSet];
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
