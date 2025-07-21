import Transaction from "../models/transaction.model.js";
import mongoose from "mongoose";


export const getTransactions=async(req,res)=>{
    try{
        const transactions = await Transaction.find({});
        res.status(200).json({sucess:true, data:transactions}); 
    }catch(error){
        console.log("error in fetching transactions", error.message);
        res.status(500).json({success: false, message:"Server error"});
    }
};

export const createTransaction =async(req,res)=>{
    const transaction = req.body;
    if (!transaction.category||!transaction.value||!transaction.description||!transaction.date||!transaction.type){
        return res.status(400).json({sucess:false, message:"please provide all fields"});
    }
    const newTransaction = new Transaction (transaction)

    try {
        await newTransaction.save();
        res.status(201).json({sucess:true,data: newTransaction});
    }
    catch(error){
        console.error("Error in creating transaction", error.message);
        res.status(500).json({sucess:false,message:"Server:Error"});
    }
};

export const deleteTransaction = async(req,res)=>{
    const {id} = req.params;
    
    try{
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({sucess:true,message : "Transaction deleted"});
    }catch(error){
        console.log("error in deleting transactions", error.message);   
        res.status(500).json({success: false, message:"Server error"});
    }
};

export const updateTransaction= async (req,res)=>{
    const {id} = req.params;

    const transaction  = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false,message : "Invalid transaction id"})
    }
    try{
        const updatedTransaction=await Transaction.findByIdAndUpdate(id, transaction,{new:true});
        res.status(200).json({success:true,data:updatedTransaction})
    } catch(error){
        res.status(500).json({success:false, message:"Server error"})
    }
};