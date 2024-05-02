const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    employment_type:{
        type: String
    },
    location:{
        type: String
    },
    min_salary:{
        type: Number
    },
    max_salary:{
        type: Number
    },
    salary_type:{
        type: String
    },
    posting_date:{
        type: Date,
        default:new Date()
    },
    experience_level:{
        type: String
    },
    required_skills:[
        {
            type: String
        }
    ],
    postedBy:{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
},{timestamps:true})

module.exports = mongoose.model('Job',jobSchema)