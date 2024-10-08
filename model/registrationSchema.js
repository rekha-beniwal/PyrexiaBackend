const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  teamLeaderName: { type: String, required: true },
  teamLeaderMobileNo: { type: String, required: true },
  teamLeaderEmail: { type: String, required: true },
  teamLeaderCollege: { type: String, required: true },
  teamSize: { type: Number, required: true }, // Changed from teamLeaderSize to teamSize
  teamLeaderGender: { type: String  },
  fees: { type: String ,required: true},
  Paid: { type: Boolean, required:true ,default:false }, 
  order_Id: { type: String },
  payment_Id: {
      type: String,
   
  },
  signature: {
      type: String,
    
  },
});

const EventRegistration = mongoose.model('EventRegistration', registrationSchema);
module.exports = EventRegistration;

