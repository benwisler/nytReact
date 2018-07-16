var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    url: {
        type: String,
         required: true,
    },
    saved: {
        type: Boolean,
        default: false
    }
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;