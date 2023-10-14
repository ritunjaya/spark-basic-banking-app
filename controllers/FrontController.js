// const UserModel= require('../models/User')

// class FrontControlller{
  
  
//     static home=(req,res)=>{
//     res.render("home")
//   }
//   static about=(req,res)=>{
//     res.render("about")
//   }
//   static contact=(req,res)=>{
//     res.render("contract")
//   }
//   static display=(req,res)=>{
//     res.render("display")
//   }
//   static tran=(req,res)=>{
//     res.render("tran")
//   }
//   static Course_insert =async(req,res)=>
//   {
//       try{
         
//           //console.log(req.body)
//           const result = new UserModel({
//               name:req.body.name,
//               email:req.body.email,
//               number:req.body.number,
//               accountno:req.body.accountno,
//               ifscno:req.body.ifscno,
//               accountbalance:req.body.accountbalance
             
  
          
//       })
//       await result.save()
     
      
//    } catch(err){
//           console.log(err)
//       }
//   }

  
// }

// module.exports = FrontControlller
const UserModel = require('../models/User');

// Function to handle the home route
const home = (req, res) => {
  res.render("home");
}

// Function to handle the about route
const about = (req, res) => {
  res.render("about");
}

// Function to handle the contact route
const contact = (req, res) => {
  res.render("contract");
}

// Function to handle the display route


// Function to handle the tran route
const trans = (req, res) => {
  res.render("trans/trans");
}

// Function to handle the Course_insert route
const courseInsert = async (req, res) => {
  try {
      console.log(req.body);
      const { name, email, number, accountno, ifscno, accountbalance } = req.body;
      const result = new UserModel({
      name: name,
      email: email,
      number: number,
      accountno: accountno,
      ifscno: ifscno,
      accountbalance: accountbalance
    });

    await result.save().then(()=>{console.log("Data Saved!!")});
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
}
const display = async(req,res)=>{
 
  try{
    const data = await UserModel.find()
    res.render('trans/disp',{d:data})

  } catch (error) {

    console.log(error)
  }
}

const transaction = async(req,res)=>{
  try{
    const {sender,reciever,amount} = req.body;

    console.log(req.body);
    const senderCustomer = await UserModel.findOne({accountno:sender});
    const recieverCustomer = await UserModel.findOne({accountno:reciever});
    const senderbalance = Number(senderCustomer.accountbalance) - Number(amount);
    await UserModel.updateOne({accountno:sender},{accountbalance:senderbalance},{new:true});
    
    const recieverbalance = Number(recieverCustomer.accountbalance) + Number(amount);
    await UserModel.updateOne({accountno:reciever},{accountbalance:recieverbalance},{new:true});
    res.redirect("/display");
    
  }catch(err){
    res.status(500).json({message:"ERROR!!",error:err.message})
  }
  
}


// Export the functions
module.exports = {
  home,
  about,
  contact,
  display,
  trans,
  courseInsert,
  transaction
 
};