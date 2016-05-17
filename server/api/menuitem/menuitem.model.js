'use strict';

import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');

var MenuitemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  active: Boolean,
  kitchen: Boolean,
  category: String,
  description: String,
  menuitemUrl: String
});


export default mongoose.model('Menuitem', MenuitemSchema);
