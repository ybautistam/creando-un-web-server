const express = require('express')
const path = require('path')

const startServer = (options) => {
    const{port,public_path = 'public'} = options
    //console.log(port)
    //console.log(public_path)

    const app = express()

    //funciones intermedias 
    // para poder usar middlewares se usa la palabra use(express)

    app.use(express.static(public_path)) // contenido estatico que ponemos disponible(index.html,css y javascript) 

    // req peticion res respuesta del servidor 
    app.get('*',(req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)

    })

    app.listen(port,() =>{
        console.log(`escuchado el puesto ${port}`)
    })

    


}

module.exports = {
    startServer
}