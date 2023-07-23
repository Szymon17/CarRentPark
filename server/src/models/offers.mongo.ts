import mongoose from "mongoose";

const Cars = new mongoose.Schema(
  {
    year: { type: Number, require: true },
    number_of_seats: { type: Number, require: true },
    drive_type: { type: String, require: true },
    fuel_type: { type: String, require: true },
    daily_price: { type: Number, require: true },
    power: { type: Number, require: true },
    brand: { type: String, require: true },
    engine_capacity: { type: String, require: true },
    color: { type: String, require: true },
    transmission: { type: String, require: true },
    fuel_usage_city: { type: String, require: true },
    fuel_usage_outcity: { type: String, require: true },
  },
  { collection: "Cars" }
);

export default mongoose.model("Cars", Cars);
