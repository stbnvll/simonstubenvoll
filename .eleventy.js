const pluginNavigation = require("@11ty/eleventy-navigation");
const globs = { jobs: "jobs/**/*.md", works: "works/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addCollection("jobs", function (collection) {
    return collection.getFilteredByGlob(globs.jobs);
  });
  eleventyConfig.addCollection("works", function (collection) {
    return collection.getFilteredByGlob(globs.works);
  });

  // Get the first 'n' elements of a collection.
  eleventyConfig.addFilter("head", function (array, n) {
    if (n < 0) return array.slice(n);
    return array.slice(0, n);
  })
};
