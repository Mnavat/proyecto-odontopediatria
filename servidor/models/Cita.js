const mongoose = require('mongoose');

const CitaSchema = mongoose.Schema({
    paciente: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    nombretutor: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    visita: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    //Agregado
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
});
module.exports = mongoose.model('Cita', CitaSchema);
