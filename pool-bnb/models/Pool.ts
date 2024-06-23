
import mongoose, { Document, Schema } from 'mongoose';

export interface IAvailability {
    startDate: Date;
    endDate: Date;
}

export interface IPool extends Document {
    owner: mongoose.Types.ObjectId;
    title: string;
    description: string;
    location: string;
    amenities: string[];
    price: number;
    images: string[];
    availability: IAvailability[];
}

const availabilitySchema = new Schema<IAvailability>(
    {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
    },
    { _id: false }
);

const poolSchema = new Schema<IPool>(
    {
        owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        amenities: { type: [String], required: true },
        price: { type: Number, required: true },
        images: { type: [String], required: true },
        availability: { type: [availabilitySchema], required: true },
    },
    { 
        timestamps: true 
    }
);

const Pool = mongoose.models.Pool || mongoose.model<IPool>('Pool', poolSchema);

export default Pool;