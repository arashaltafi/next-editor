// for publish in cpanel server

const http = require('http')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const port = parseInt(process.env.PORT || '3000')
    http.createServer((req, res) => {
        handle(req, res)
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})