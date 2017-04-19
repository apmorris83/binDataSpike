const mongoose = require('mongoose');
const BinDoc = require('./models/bins');
const binData = require('./data/bins.js');

mongoose.connect('mongodb://localhost/bin_api', function (error) {
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