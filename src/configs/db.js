const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Neelam0101:Neelam12345@cluster0.yca2t.mongodb.net/beardo"
  )
};//



