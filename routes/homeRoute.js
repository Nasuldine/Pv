const express = require('express');
const router = express.Router();

// accessing the home page
router.get('/',(req, res)=>{
// we are rendering the home pug file
    res.render('home')
});
// router.get('/', async (req, res) =>{
//     try {
//       const data = await VehicleEntry.find({}).sort({ $natural: -1 });
//       res.render('home',{vehicleentries : data})
//     }
//     catch (error) {
//         return res.status(400).send(
//           {
//             status: 400,
//             message: 'Oops failed to fetch all registrations',
//             error
//           })
//  } }
//         else{
//          res.redirect('/home')
//        }
//  );

router.post('/',(req,res)=>{
    res.render('home')
});
//we exposing our route to any file that will require it.
module.exports = router


// router.get('/', async (req, res) => {
//     try {
//       const data = await Registration.find({}).sort({ $natural: -1 });
//       res.render('',{vehicleentries : data})
//     }
//     catch (error) {
//         return res.status(400).send(
//           {
//             status: 400,
//             message: 'Oops failed to fetch all registrations',
//             error
//           });
//        }
//  });
    