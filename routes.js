const express=require('express')
const routes=express.Router()
const {getdata,postdata,getsingledata,putdata,deletedata}=require('./controller.js')
const {login,register}=require('./authcontroller.js')

routes.get('/getdata',getdata)
routes.post('/postdata',postdata)
routes.get('/getsingledata/:id',getsingledata)
routes.put('/putdata/:id',putdata)
routes.delete('/deletedata/:id',deletedata)


//for auth 
routes.post('/login',login)
routes.post('/register',register)


module.exports=routes