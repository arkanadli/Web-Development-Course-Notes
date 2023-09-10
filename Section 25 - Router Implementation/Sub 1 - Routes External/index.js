const express = require('express');
const port = 3000;
const app = express();
const dogsRoutes = require('./routes/dogs')
const sheltersRoutes = require('./routes/shelters')
const adminRoutes = require('./routes/admin')

// we can include router from external file.
app.use('/dogs', dogsRoutes);
app.use('/shelters', sheltersRoutes);
// we can apply middle ware to auth or etc in router external file too!
app.use('/admin', adminRoutes);


app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})