// peguei o fremwork express
const express = require('express')
const uiid = require('uuid')
const cors = require('cors')

const app = express()
app.use(cors())
// meusite.com/users?name=danilo&age=26
// porta
//configurando a minha leitura json
app.use(express.json())

const port = 5000


const users = []


const ChekUserId = (req, res , next) =>{

    const { id } = req.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return res.status(404).json({ menssagem: "não encontrei o usuario" })
    }


    req.usserIndex = index
    req.UserId = id

    next()
}


// rota do tipo get mostrar todos o meus usuarios
app.get('/users', (req, res) => {

    return res.json(users)

})

// atualizar meu usuario podemos atualizar pelo id, e modificando nome, idade etc.. todas caracteriticas do meu objeto
app.put('/users/:id', ChekUserId , (req, res) => {

   const index = req.usserIndex
   const id = req.UserId
    const { name, age, } = req.body

    const update = { id, name, age, }

    
   

    users[index] = update

    return res.json(update)

})




// rota do tipo post- cria um novo usuario
app.post('/users', (req, res) => {

    const { name, age, } = req.body

    const use = { id: uiid.v4(), name, age,  }



    users.push(use)

    return res.status(201).json(use)

})

// rota de deletar usuario
app.delete('/users/:id', ChekUserId , (req, res) => {

    const index = req.usserIndex

    users.splice(index, 1)

    return res.status(204).json()

})

app.listen(port, () => {
    console.log(`meu servidor está rodando na porta ${port} 😎`)

})




/*

// peguei o fremwork express
const express = require('express') 

const app = express()
// meusite.com/users?name=danilo&age=26
// porta
const port = 5000

// rota do tipo get
app.get('/users', (req , res) =>{

    const name = req.query.name
    const age = req.query.age
   return res.json({name:name , age:age})

})



app.listen(port, ()=>{
    console.log(  `meu servidor está rodando na porta ${port} 😎`)
})





*/


/*
// peguei o fremwork express
const express = require('express') 

const app = express()
// meusite.com/users?name=danilo&age=26
// porta
const port = 5000

// rota do tipo get
app.get('/users/:id', (req , res) =>{

const {id} = req.params

console.log(id)

   return res.json({id})

})



app.listen(port, ()=>{
    console.log(  `meu servidor está rodando na porta ${port} 😎`)
})

*/



/* // peguei o fremwork express
const express = require('express') 

const app = express()
// meusite.com/users?name=danilo&age=26
// porta
//configurando a minha leitura json
app.use(express.json())

const port = 5000


const users = []
// rota do tipo get
app.get('/users', (req , res) =>{

const {name, idade , sexo} = req.body



   return res.json({name, idade , sexo})

})



app.listen(port, ()=>{
    console.log(  `meu servidor está rodando na porta ${port} 😎`)
})


*/