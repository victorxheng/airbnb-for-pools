
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    role: 'Owner' | 'Guest';
    name?: string;
    transactions?: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ['Owner', 'Guest'] },
        name: { type: String },
        transactions: [{ type: mongoose.Types.ObjectId, ref: 'Transaction' }],
    },
    { 
        timestamps: true 
    }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;