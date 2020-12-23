const pluginNavigation = require("@11ty/eleventy-navigation");
const globs = { jobs: "jobs/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addCollection("jobs", function (collection) {
    return collection.getFilteredByGlob(globs.jobs);
  });
};
