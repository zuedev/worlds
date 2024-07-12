module.exports = function (eleventyConfig) {
  // reduce README.md files to index.html
  eleventyConfig.addCollection("readme", (collection) => {
    return collection.getAllSorted().map((item) => {
      if (item.fileSlug === "README") {
        // Set the output path to the parent directory
        item.outputPath = item.outputPath.replace("/README", "");
      }
    });
  });

  eleventyConfig.addPassthroughCopy("_assets");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    layout: "default.html",
  };
};
