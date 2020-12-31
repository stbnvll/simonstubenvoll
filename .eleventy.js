const pluginNavigation = require("@11ty/eleventy-navigation");
const globs = { cv: "cv/**/*.md", portfolio: "portfolio/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addCollection("cv", function (collection) {
    return collection
      .getFilteredByGlob(globs.cv)
      .sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("portfolio", function (collection) {
    return collection
      .getFilteredByGlob(globs.portfolio)
      .sort((a, b) => b.date - a.date);
  });

  // Get the first 'n' elements of a collection.
  eleventyConfig.addFilter("head", function (array, n) {
    if (n < 0) return array.slice(n);
    return array.slice(0, n);
  });
};
