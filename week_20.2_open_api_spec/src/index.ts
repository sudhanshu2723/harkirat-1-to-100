import express from 'express'
import swaggerUi from 'swagger-ui-express'
import {openapiSpec} from './openapispec'

const app=express();

const PORT=3000;

app.use(express.json());

let users=[
    {id:1,name:'sudhnahsu'},
    {id:2,name:'akhil'}
]

app.get('/users',(req:any,res:any)=>{
    const {name}=req.query;
    if(name){
        const filteredUsers=users.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()))
        return res.json(filteredUsers)
    }else{
        return res.json(users)
    }
})


app.post('/users',(req:any,res:any)=>{
    const {name}=req.query;
    if(name){
        const filteredUsers=users.filter(user=>user.name.toLowerCase().includes(name.toLowerCase()))
        return res.json(filteredUsers)
    }else{
        return res.json(users)
    }
})

app.use('/documentation',swaggerUi.serve,swaggerUi.setup(openapiSpec))

app.listen(PORT,()=>{
    console.log("running on PORT 3000")
});