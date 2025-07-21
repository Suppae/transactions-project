import mongoose from "mongoose";

const transactionSchema =new mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required: true,
    },
    value:{
        type:Number,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
    
},{
    timestamps: true //createdat, updatedat
});

const Transaction = mongoose.model('Transaction',transactionSchema);

export default Transaction;
