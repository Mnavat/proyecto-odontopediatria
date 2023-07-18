const Cita = require("../models/Cita");


exports.crearCita = async (req,res) =>{
    try {
        let cita;
        //Creamos nuestra cita
        cita = new Cita(req.body);

        await cita.save();
        res.send(cita);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerCita1 = async (req,res) =>{
    try {

        const citas = await Cita.find();
        res.json(citas)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarCita = async (req,res) =>{
    try {
        const {paciente, edad, nombretutor, telefono, visita, fecha, hora} = req.body;
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe ninguna cita'})
        }
        cita.paciente=paciente;
        cita.edad=edad;
        cita.nombretutor=nombretutor;
        cita.telefono=telefono;
        cita.visita=visita;
        cita.fecha=fecha;
        cita.hora=hora;

        cita= await Cita.findOneAndUpdate({ _id: req.params.id }, cita, { new:true})
        res.json(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerCita2 = async (req,res) =>{
    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe ninguna cita'})
        }
        res.json(cita);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarCita = async (req,res) =>{
    try {
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No existe ninguna cita'})
        }
        await Cita.findOneAndRemove({ _id: req.params.id })
        res.json({msg: 'Cita eliminada con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}