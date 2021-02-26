const marked = require("marked")

export const toMarkdown = function(content) {
  return marked(content);
}
