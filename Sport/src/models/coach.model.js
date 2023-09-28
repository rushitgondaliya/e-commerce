const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema(
  {
    coach_name: {
      type: String,
      trim: true,
    },
    speciality: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Coach = mongoose.model("coach", coachSchema);

module.exports = Coach;
