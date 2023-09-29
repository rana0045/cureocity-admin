const { Mongoose, default: mongoose, models } = require("mongoose");



const DocterSchema = new mongoose.Schema({

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
   professionDetails: {
      type: String,
      required: [true, "professionDetails num is required"],
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
      default: "Doctoer"
   },
   isAdmin:
   {
      type: Boolean,
      default: false
   },
   timeslot: [
      {
         time: { type: String },
         day: { type: String },

      }

   ]
})

const Doctor = mongoose.models.professionals || mongoose.model("professionals", DocterSchema)


export default Doctor