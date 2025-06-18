import { $ } from 'bun'
import { marked, Renderer } from 'marked'

const page = await $`cat ${process.argv[2]}`.text()

const renderer = new Renderer()

renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens)
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')

    return `
<h${depth}>
  <a name="${escapedText}" class="anchor" href="#${escapedText}">
    <span class="header-link"></span>
  </a>
  ${text}
</h${depth}>`
}

marked.use({ renderer })

marked.setOptions({
  renderer: renderer,
});
const mdContent = marked.parse(page)

console.log(mdContent)