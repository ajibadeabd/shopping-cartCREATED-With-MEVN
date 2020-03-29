var express = require('express');
var router = express.Router();
const User = require('../../models/users');
const Product = require('../../models/Product');
const Details = require('../../models/Details');
const cors =require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const passport = require("passport")
const mongoose = require('mongoose');

process.env.SECRET_KEY='secure'
router.use(cors())


// @route

router.post('/register', function(req, res, next) {
 let {
    userName,
     name,
     email,
     password,
     conpassword
 }=req.body
 if(req.body.password!==req.body.conpassword){
  res.status(400).json({
      msg:"password in correct" 
  });return 
 }
 //check for a unique user
 User.findOne({
     name:name
 }).then((user)=>{
    if(user){
        res.status(400).json({
            msg:"username already taken" 
        })
      
 User.findOne({
    email:email
}).then((email)=>{
   if(email){
       res.status(400).json({
           msg:"email  already been registerd. did you forget your password" 
       })
      };return 
})  }
else{

    let newUser= new User({
        userName,
        name,
        email,
        password,
        address:'',
        number:"",
        country:"",
        postal_code:"",
    
    })
    // hash password
    bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(newUser.password,salt,(err,hash)=>{
        if(err) throw err
        newUser.password=hash;
        
        newUser.save()
        .then((user)=>{
            
          
            res.status(200).json({
                success:true,
                msg:`i am please to inform you that ${req.body.name} is registed`
            })
           
          
    
        }
        )
        // .catch(err=>{
        //     return err
        // })
    })
    })
}
})

});
router.post('/login', function(req, res, next) {
    User.findOne({
      name:req.body.name
    })
    .then((user)=>{
               if(!user){
                 return  res.status(404).json({
                      msg:'user  not found',
                      success:false
                  }) 
               }
        bcrypt.compare(req.body.password,user.password)
        .then(ismatch=>{
            if(ismatch){ 
                const payload={
                  _id:user._id,
                 name:user.name,
                 userName:user.userName,
                  pasword:user.password,
                  email:user.email,
        
                }
                jwt.sign(payload,process.env.SECRET_KEY, {
                    expiresIn:604800
        
                  },(err,token)=>{
                      res.status(200).json({
                            success:true,
                         token:`Bearer ${token}`   , 
                         user:user,
                          msg:"you are now logged in"
                      });
                    })
            }else{
               return res.status(400).json({
                    success:false,
                      
                     msg:"incorrect password"
                })
            }
        })
      
})

  });


  router.get('/profile', passport.authenticate('jwt',{
  session:false
  }),function(req, res, next) {
    
  return res.json({
      user:req.user})
  });
  router.get('/det', passport.authenticate('jwt',{
    session:false
    }),function(req, res, next) {
     Details.findOne()
    });
    

  router.post('/postItems', passport.authenticate('jwt',{
    session:false
    }),function(req, res, next) {
      
let  {        name,
        description,
        category,
        price}=req.body
        let newItems= new Product({
            name,
            description,
            category,
          price
        })
       newItems.save()
res.status(200).json({
    success:true,
    msg:` ${req.body.name} has been addeed`
})
      

    });


    router.put('/addDetail/:id', function(req, res, next) {
console.log(req.params.id)
        User.findOneAndUpdate(
            {_id:req.params.id} 
            ,req.body,

            {new:true},
            (err,id)=>{
                    if(err) res.send(err);
                    res.json(
                    id
                     ) 
            });
        //  findOneAndUpdate
      
          });
          
    //         Details.findOne({_id:req.params.id})
    //         .then((user)=>{
    //             if(!user){
    //                 res.json(err)
    //             }else{
    //                 user.address=req.body.address
    //                 console.log(user.address)
    //                                    Details.save()
    //                                    .then((Detail)=>{
    //                                     //    console.log(Detail.address)
                   
    //                                        res.status(200).json({
    //                                            success:true,
    //                                            Detail,
                                       
    //                                            msg:`your  ${req.body} has been sucessfully updated on your profile`
    //                                        })
    //                                    }) 
    //             }
    //             // user.postal_code=req.body.postal_code,
                
    //         })
    //         .catch((err)=>{
    //             res.json(err)
    //         })
            
    // // 
    // // let task =req.body
    // //  let updateTask={}
    // //  if(task.address){
    // //      updateTask.address=task.address
    // //  }
    // //  if(!updateTask){
    // //      res.status(200).json({
    // //          error:'b ad Data'
    // //      })
    // //  }else{

    // //  }
  

//     router.post('/addDetail/:id',function(req, res, next) {

//         User.findOne({_id:req.params.id})
//         .then((user)=>{
//             // user.postal_code=req.body.postal_code,
//             user.address=req.body.address
// console.log(user.address)
//                 Details.save().then((Detail)=>{
//                     console.log(Detail.address)

//                     res.status(200).json({
//                         success:true,
//                         Detail,
                
//                         msg:`your  ${req.body} has been sucessfully updated on your profile`
//                     })
//                 })
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
        
// // 
      

//     });


       
module.exports = router;
