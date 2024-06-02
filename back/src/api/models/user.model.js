const mongoose = require("mongoose");
/* const bcrypt = require("bcrypt");
const salt = 10; // este dato sirve para decir cuanta complejidad tenemos que dar a esa encriptacion de bcrypt. 10 es el numero de niveles de complejidad. */

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "user", "moderator"]
  }
});

/* userSchema.pre("save", (next) => {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
}); */

const User = mongoose.model("user", userSchema);
module.exports = User;
