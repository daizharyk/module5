const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://didar:didar@cluster0.niptg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDb connected");
};
