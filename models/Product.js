const { Schema } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, require: true},
    description: String,
    price: {type: Number, required: true},
})

export const Product = model('Product', ProductSchema);