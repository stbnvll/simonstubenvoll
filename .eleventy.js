const pluginNavigation = require("@11ty/eleventy-navigation");
const globs = { jobs: "jobs/**/*.md", portfolio: "portfolio/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addCollection("jobs", function (collection) {
    return collection
      .getFilteredByGlob(globs.jobs)
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("portfolio", function (collection) {
    return collection
      .getFilteredByGlob(globs.portfolio)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("first", function (array) {
    return array.slice(0, 1);
  });
};
