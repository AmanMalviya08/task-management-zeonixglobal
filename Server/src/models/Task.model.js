const mongoose = require('mongoose')

const taskDataSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:false,
        default: '',
        trim: true
    },
    completed:{
        type:Boolean,
        default: false
    },
},
    {
        timestamps: true,
        toJSON: {
            transform(doc, ret){
                ret.id = ret._id
                delete ret._id
                delete ret.__v
            }
        }
    }

)

module.exports = mongoose.model('Task', taskDataSchema)