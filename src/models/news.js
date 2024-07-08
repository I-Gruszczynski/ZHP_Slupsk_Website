const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    context: {
      type: String,
      require: true,
    },
    image: {
      type: Object,
      require: false,
    },
    author: {
      type: String,
      require: false,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
module.exports = News;
