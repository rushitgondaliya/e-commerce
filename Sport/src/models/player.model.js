const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema(
  {
    sport_name: {
      type: String,
      trim: true,
    },
    sport_category: {
      type: String,
      trim: true,
    },
    player_img: {
      type :String ,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: {
      transform: function (doc, data) {
        if (data?.player_img) {
          data.player_img = `${config.base_url}player_img/${data.player_img}`;
        }
      },
    },
  }
);

const Sport = mongoose.model("sport", sportSchema);

module.exports = Sport;
