const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    event_name: {
      type: String,
      trim: true,
    },
    event_des: {
      type: String,
      trim: true,
    },
    event_data: {
      type: Date,
      require: true,
    },
    location: {
      type: String,
      trim: true,
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: "team",
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "player",
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

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
