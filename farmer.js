// //importing all the necessary modules 
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const mongoose = require('./connection');

// const app = express();

// console.log("iam from the farmer file")

// // app.set('view engine', 'ejs')
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/farmer', express.static(path.join(__dirname,'farmer')));

// let publicPath = path.join(__dirname , 'farmer');
// console.log(publicPath);

// app.use(express.static(publicPath));

// app.get("/farmer/main.html", function(req, res){
//     res.sendFile(__dirname + '/farmer/main.html');
// });


// app.get('/', (req, res) => {
//     res.sendFile(`${publicPath}/main.html`);
// });
// app.get('/farmer/veg', (req, res)=>{
//     res.send(`${publicPath}/veg.html`)
// });
// app.get('/farmer/fruit', (req, res)=>{
//     res.send(`${publicPath}/fruit.html`)
// });

// const productSchema = new mongoose.Schema ({
//     name : String,
//     quantity : Number,
//     price: String,
//     description: String
// });
 
// const Products = mongoose.model("veg", productSchema); //for products

// app.post('/submit', async function(req, res) {
//     let newVeg = new Products({
//         name: req.body.name,
//         quantity:req.body.quantity,
//         price:req.body.price,
//         description:req.body.description
//     })
//     newVeg.save();
//     console.log(newVeg);
//     return res.redirect("/main.html")
//  });
// //exporting the files
// module.exports = app; 