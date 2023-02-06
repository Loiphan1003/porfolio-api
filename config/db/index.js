const mongoose = require("mongoose");

async function connect() {
  try {

    const uri = "mongodb+srv://pvloi1003:Loi12345@cluster0.2sh3axx.mongodb.net/sample?retryWrites=true&w=majority";

    await mongoose.connect(uri);
    console.log("Connect DB successful");
  } catch (error) {
    console.log("Conect DB false");
    console.log(error);
  }
}

module.exports = { connect };
