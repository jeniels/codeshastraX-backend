const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applyJobSchema = new Schema({
    job_id:{
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        default: 'In-Progress'
    }
},{timestamps:true})

module.exports = mongoose.model('ApplyJob',applyJobSchema)