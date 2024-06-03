const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
}, {versionKey: false});

module.exports = mongoose.model('Annotations', AnnotationDataSchema);