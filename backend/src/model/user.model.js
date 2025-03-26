import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    // Email del usuario (Identificador único)
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true, 
      lowercase: true, 
    },
    // Nombre usuario aplicación
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    settings: {
      theme: { type: String, default: "light" },
      language: { type: String, default: "es" },
    },
    tests: [
      {
        type: Schema.Types.ObjectId,
        ref: "Test",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
