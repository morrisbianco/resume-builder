const { Schema, model } = require('mongoose');

const projSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    points:
    {
        type: String,
    },
    tools:
    {
        type: String,
    }
});

const Project = model('Project', projSchema);

module.exports = projSchema;