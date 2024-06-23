
import mongoose, { Document, Schema } from 'mongoose';

interface ITransaction extends Document {
    user: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
}

const transactionSchema = new Schema<ITransaction>(
    {
        user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
        date: { type: Date, required: true },
        amount: { type: Number, required: true },
    },
    { 
        timestamps: true 
    }
);

const Transaction = mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;