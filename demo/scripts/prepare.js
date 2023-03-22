const Path = require('path')
const Symlink = require('symlink-dir')

const client = Path.resolve(process.cwd(), '..', 'client')
const REACT_EMAIL_ROOT = Path.resolve(process.cwd(), '.react-email')

async function link() {
 await Symlink(client, REACT_EMAIL_ROOT, {overwrite: true})

 console.log(`Symlink created from ${client} to ${REACT_EMAIL_ROOT}`)

 process.exit(0)
}

link()
