import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {typ: String, reguired: true},
    allProperties: [{type: mongoose.Schema.Types.ObjectId, red: 'Property'}],
});

const user.Model = mongoose.nodel('User', UserSchema);

export default userModel;