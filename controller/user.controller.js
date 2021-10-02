const User = require("../models/user.model");




const register = async (req,res)=>{
  try{
      const userData = new User(req.body)
      await userData.save()
    
      res.status(200).send({
          apiStatus:true,
          data:userData,
          message:"data added successfuly"
      })
  }
  catch(e){
      res.status(500).send({
          apiStatus: false,
          data: e.message,
          message: "error in register"
      })
  }
}
const addAddr =  async(req,res)=>{
  try{
      const user = await User.findById(req.params.id)
      const addr = req.body
      user.addresses.push(addr)
      await user.save()
      res.status(200).send({
          apiStatus:true,
          data:user,
          message:"data added successfuly"
      })
  }
  catch(e){
      res.status(500).send({
          apiStatus: false,
          data: e.message,
          message: "error in register"
      })
  }
}
const login = async(req,res)=>{
  try{
      let user = await User.loginUser(req.body.email, req.body.password)
      const token = await user.generateToken()
      res.status(200).send({ apiStatus:true, data:{user, token}, message:"logged in" })
  }
  catch(e){
      res.status(500).send({ apiStatus:false, data:e.message, message:"cannot login" })
  }
}
const logOut = async(req,res)=>{
  try{  
      req.user.tokens = req.user.tokens.filter(singleToken=>{
          return singleToken.token != req.token
      })
      req.user.save()
      res.send({apiStatus:true, data:"", message:"logged out from this device"})
  }
  catch(e){
      res.status(500).send({ apiStatus:false, data:e.message, message: 'error'})
  }
}
const logOutAll = async(req,res)=>{
  try{
      req.user.tokens=[]
      await req.user.save()
      res.send({apiStatus:true, data:"", message:"logged out from all devices"})
  }
  catch(e){
      res.status(500).send({ apiStatus:false, data:e.message, message: 'error'})
  }
}



module.exports = { register, addAddr, login, logOut, logOutAll}