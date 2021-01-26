const pluginNavigation = require("@11ty/eleventy-navigation");
const cleanCss = require("clean-css");
const terser = require("terser");

const globs = { jobs: "jobs/**/*.md", posts: "posts/**/*.md" };

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy("img");

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
  eleventyConfig.addFilter("cssmin", function (code) {
    return new cleanCss({}).minify(code).styles;
  });

  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await terser.minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        callback(null, code);
      }
    }
  );

  eleventyConfig.addFilter("first", function (array) {
    return array.slice(0, 1);
  });

  eleventyConfig.addFilter("date", function (iso) {
    const date = new Date(iso);
    const YYYY = date.getFullYear();
    const MM = (date.getMonth() + 1).toLocaleString(undefined, {
      minimumIntegerDigits: 2,
    });

    return `${MM}/${YYYY}`;
  });
};
