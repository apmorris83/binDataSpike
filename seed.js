const mongoose = require('mongoose');
const BinDoc = require('./models/bins');
const binData = require('./data/bins.js');

mongoose.connect('mongodb://user:password@ds163940.mlab.com:63940/bins', function (error) {
    if (error) {
        console.log(error);
        return process.exit();
    }
    binData.forEach(function (bin, i) {
        let binDoc = new BinDoc(bin);
        binDoc.save(function (error, doc) {
            if (error) {
                return console.log(error);
            }
            console.log(`Bin ${i} ${bin.name} saved to db!`);
        });
    });
});