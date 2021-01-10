const pluginNavigation = require("@11ty/eleventy-navigation");
const globs = { jobs: "jobs/**/*.md", posts: "posts/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("js");

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

  eleventyConfig.addFilter("first", function (array) {
    return array.slice(0, 1);
  });
};
