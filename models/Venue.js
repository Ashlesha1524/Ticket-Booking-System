import mongoose from "mongoose";

const VenueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    totalRows: {
      type: Number,
      required: true,
    },

    seatsPerRow: {
      type: Number,
      required: true,
    },

    categories: [
      {
        name: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Venue ||
mongoose.model("Venue", VenueSchema);