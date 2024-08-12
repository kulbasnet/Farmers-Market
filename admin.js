const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', express.static(path.join(__dirname, 'admin')));

let publicPath = path.join(__dirname ,  'admin');
console.log(publicPath);

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/admin.html`);
}); 

app.get('/approvals.e ', (req, res) => {
    res.sendFile(`${publicPath}/catagories.html`);
});
app.get('/about ', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

module.exports = app; 


// app.get('/approval', function(req, res) {
//     // Render the approval.ejs file
//     res.render('approval');
// });
