"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
// models/Slot.ts
const mongoose_1 = require("mongoose");
const slotSchema = new mongoose_1.Schema({
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: String,
        enum: ["available", "booked", "canceled", "processing"],
        default: "available",
    },
}, { timestamps: true });
exports.Slot = (0, mongoose_1.model)("Slot", slotSchema);
