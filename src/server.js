

const express = require('express')
const server = express()

const {
        pageLanding,
        pageStudy,
        pageGiveClasses,
        saveClasses
}
 = require('./page')
const nunjucks = require('nunjucks')


// configurar nunjucks
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})

server
// arquivos estaticos
.use(express.static("public"))

.use(express.urlencoded({extended: true}))
// rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses )
.post("/save-classes", saveClasses)
.listen(5000)


