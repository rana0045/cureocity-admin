const { default: mongoose } = require("mongoose");



const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
});

const SubscriptionSchema = new mongoose.Schema({
  holistic: {
    // Properties for holistic subscription
  },
  multiSelect: {
    package1: PackageSchema,
    package2: PackageSchema,
    package3: PackageSchema,
    package4: PackageSchema,
    // Add more packages as needed
  },
});

const UserSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: [true, " firsr name is required"]
  },
  lastname: {
    type: String,
    required: [true, " last name is required"]
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email is already exist"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"]
  },
  Mobile: {
    required: [true, "mobile num is required"],
    type: String,
    sparse: true,
    unique: true


  },
  date_of_birth: {
    type: Date,
    required: [true, "date_of_birth num is required"],
  },
  gender: {
    type: String,
    required: [true, "gender num is required"],
  },
  address: {
    type: String,
    required: [true, "address num is required"],
  },

  AddiotionalFile: {
    type: String,
    required: [true, "AddiotionalFile num is required"],
  },
  imageUrl: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "User"
  },
  isAdmin:
  {
    type: Boolean,
    default: false
  },
  subscriptions: [SubscriptionSchema],



})

const User = mongoose.models.user || mongoose.model("user", UserSchema)
export default User