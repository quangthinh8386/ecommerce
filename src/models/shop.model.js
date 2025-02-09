'use strict'

//!dmbg
const {model, Schema, Types} = require('mongoose'); // Erase if already required
const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'shops';

// Declare the Schema of the Mongo model
var shopSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxLength:255,
    },
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'active',
    },
    verify: {
        type: Schema.Types.Boolean,
        default: false,
    },
    roles: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});


//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, shopSchema);