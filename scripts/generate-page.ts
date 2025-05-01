import { $ } from 'bun'
import { marked } from 'marked'

const page = await $`cat ${process.argv[2]}`.text()
const mdContent = marked(page)

console.log(mdContent)