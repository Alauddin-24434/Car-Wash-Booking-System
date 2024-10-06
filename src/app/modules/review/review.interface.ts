import { Schema } from "mongoose";

export interface IReview {
    userId: Schema.Types.ObjectId; // User ID
    serviceId: Schema.Types.ObjectId; // Service ID
    rating: number; // Rating given by the user
    feedback: string; // Review comment
    isDeleted:boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
  