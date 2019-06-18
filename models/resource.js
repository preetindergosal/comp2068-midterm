// We will need our mongoose library
const mongoose = require(`mongoose`);

// Your schema
const metahuman = new mongoose.Schema({
    alias:{
        type: String,
        required:false
    },
    full_name:{
        type: String,
        required:true
    },
    affiliation:{
        type: String,
        required:true    
    },
    category:{
        type: String,
        required: true,
        enum: ['Hulk','Ironman','Dr. Spider'],
        default: 'Hulk'
    }
});

// Exporting our resource model
module.exports = mongoose.model('Metahuman',metahuman);