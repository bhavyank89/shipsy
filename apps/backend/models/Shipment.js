import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
    title: String,
    status: { type: String, enum: ["NEW", "IN_TRANSIT", "DELIVERED", "CANCELLED"] },
    fragile: Boolean,
    weightKg: Number,
    distanceKm: Number,
    baseRate: Number,
    cost: Number
}, { timestamps: true });

shipmentSchema.pre("save", function (next) {
    this.cost = this.weightKg * this.baseRate + this.distanceKm * 0.5;
    next();
});

export default mongoose.model("Shipment", shipmentSchema);
