import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";
import yaml from "js-yaml";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(handlebarsPlugin);

  eleventyConfig.addPassthroughCopy({ files: "/" });
  eleventyConfig.addPassthroughCopy({ images: "/images/" });

  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
}
