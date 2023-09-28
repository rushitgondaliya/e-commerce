const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_name: {
      type: String,
      trim: true,
    },
    members: {
      type: Number,
      default: 2,
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "player",
    },
    sport_type: {
      type: mongoose.Types.ObjectId,
      ref: "sport",
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

const Team = mongoose.model("team", teamSchema);

module.exports = Team;
