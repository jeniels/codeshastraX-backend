const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name:{
        type: String
    },
    tagline:{
        type: String
    },
    email:{
        type: String
    },
    number:{
        type: String
    },
    website:{
        type: String
    },
    description:{
        type: String
    },
    location:{
        type: String
    },
    image:{
        type: String
    },
    benefits:{
        type: String
    },
    size:{
        type: String
    },
    type:{
        type: String
    },
    ceo_name:{
        type: String
    },
    ceo_description:{
        type: String
    },
    culture_title:{
        type: String
    },
    culture_description:{
        type: String
    },
},{timestamps:true})

module.exports = mongoose.model('Company', companySchema)