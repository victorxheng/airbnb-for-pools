
import mongoose, { Document, Schema } from 'mongoose';

export interface IAdmin extends Document {
    email: string;
    password: string;
}

const adminSchema = new Schema<IAdmin>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { 
        timestamps: true
    }
);

const Admin = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', adminSchema);

export default Admin;