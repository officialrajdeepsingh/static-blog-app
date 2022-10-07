// contentlayer.config.js
import { defineDocumentType, makeSource, defineNestedType } from "contentlayer/source-files";
var Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: { type: "string" }
  }
}));
var Categories = defineNestedType(() => ({
  name: "Categories",
  fields: {
    title: { type: "string" }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    author: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    slug: {
      type: "string"
    },
    id: {
      type: "number",
      required: false
    },
    image: {
      type: "string"
    },
    draft: {
      type: "boolean",
      required: true
    },
    tags: {
      type: "list",
      of: Tag
    },
    categories: {
      type: "list",
      of: Categories
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/posts",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BY4CWUU4.mjs.map
