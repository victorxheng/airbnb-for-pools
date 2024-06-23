
import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
    user: mongoose.Types.ObjectId;
    date: Date;
    amount: number;
}

const transactionSchema = new Schema<ITransaction>(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        date: { type: Date, required: true },
        amount: { type: Number, required: true },
    },
    { 
        timestamps: true 
    }
);

const Transaction = mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', transactionSchema);

export default Transaction;