const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const projSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    bPoints: [
        {
            type: String,
            required: true,
        }
    ],
    tools: [
        {
            type: String,
            required: true,
        }
    ]
});

const Project = model('Project', projSchema);

module.exports = projSchema;