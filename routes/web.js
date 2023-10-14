// const express = require('express')
// const FrontControlller = require('../controllers/FrontController')
// const router = express.Router()




// router.get("/",FrontControlller.home)
// router.get("/about",FrontControlller.about)
// router.get("/contact",FrontControlller.contact)
// router.get("/display",FrontControlller.display)
// router.get("/tran",FrontControlller.tran)
// router.post('/Course_insert',FrontControlller.Course_insert)
// router.get('/transactions', async (req, res) => {
//   const transactions = await Transaction.find({}).sort({ date: -1 })
//   res.send(transactions)
// })



//   module.exports=router
const express = require('express')
const {
  home,
  about,
  contact,
  display,
  trans,
  courseInsert,
  transaction
  
} = require('../controllers/FrontController')

const router = express.Router()

router.get("/", home)
router.get("/about", about)
router.get("/contact", contact)
router.get("/display", display)
router.post("/transaction", transaction)
// router.get("/pay", trans) disabling this route cause we have a model route already
router.post('/course_insert', courseInsert);




module.exports = router