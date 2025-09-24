import mongoose from 'mongoose';

const __MODEL__Schema = new mongoose.Schema({
  //email: { type: String, required: true, unique: true },
  //password: { type: String, required: true },
});

export default mongoose.model('__MODEL__', __MODEL__Schema); // Capitalize the returned model object with a first letter