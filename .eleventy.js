const pluginNavigation = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");

const globs = { jobs: "jobs/**/*.md", posts: "posts/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addWatchTarget("./_tmp/style.css");

  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  // Collections
  eleventyConfig.addCollection("jobs", function (collection) {
    return collection
      .getFilteredByGlob(globs.jobs)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("posts", function (collection) {
    return collection
      .getFilteredByGlob(globs.posts)
      .sort((a, b) => b.date - a.date);
  });

  // Filters
  eleventyConfig.addFilter("date", function (iso) {
    const date = new Date(iso);
    const YYYY = date.getFullYear();
    const MM = (date.getMonth() + 1).toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

    return `${MM}/${YYYY}`;
  });

  // Shortcodes
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // Transforms
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
