const mongoose = require("mongoose");

const leaguesSchema = new mongoose.Schema(
  {
    leagues_name: {
      type: String,
      trim: true,
    },
    leagues_time: {
      type: Date,
    },
    team: {
      type: mongoose.Types.ObjectId,
      ref: "team",
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

const Leagues = mongoose.model("leagues", leaguesSchema);

module.exports = Leagues;
