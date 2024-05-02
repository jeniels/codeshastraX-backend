const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    email:{
        type: String
    },
    number:{
        type: String
    },
    portfolio:{
        type: String
    },  
    github:{
        type: String
    },
    linkedin:{
        type: String
    },
    twitter:{
        type: String
    },
    college_name:{
        type: String
    },
    clg_start_year:{
        type: Number
    },
    clg_end_year:{
        type: Number
    },
    degree:{
        type: String
    },
    schoole_name:{
        type: String
    },
    school_start_year:{
        type: Number
    },
    school_end_year:{
        type: Number
    },
    school_board:{
        type: String
    },
    skills:[
        {
            type: String
        }
    ],
    projects:[
        {
            project_name:{
                type: String
            },
            project_description:{
                type: String
            },
            project_link:{
                type: String
            }
        }
    ],
    interests: [
        {
            type: String
        }
    ],
    experiences:[
        {
            company_name:{
                type: String
            },
            position:{
                type: String
            },
            duration:{
                type: String
            },
            description:{
                type: String
            }
        }
    ],
},{timestamps: true});

module.exports = mongoose.model('User',userSchema)