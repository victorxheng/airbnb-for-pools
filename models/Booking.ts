
import mongoose, { Document, Schema } from 'mongoose';

interface IBooking extends Document {
    pool: mongoose.Types.ObjectId;
    guest: mongoose.Types.ObjectId;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
    status: 'Pending' | 'Confirmed' | 'Cancelled';
}

const bookingSchema = new Schema<IBooking>(
    {
        pool: { type: mongoose.Types.ObjectId, ref: 'Pool', required: true },
        guest: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        totalPrice: { type: Number, required: true },
        status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
    },
    { 
        timestamps: true 
    }
);

const Booking = mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;