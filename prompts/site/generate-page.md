## Objective

You take a Markdown file and generate the HTML from it then output that HTML
into the appropriate template by replacing the `{content}` template variable
with the markdown content.

## Instructions

- The Markdown file is named {markdown_file}.
- Parse the Markdown file using `bun scripts/generate-page.ts {markdown_file}`.
- The template file is named {template_file} (default: `prompts/site/page.html`).
- Replace the `{content}` variable in the template file with the parsed Markdown.
- Output the result to {output_file}.
- Exit!