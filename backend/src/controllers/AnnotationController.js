const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(req, res) {
        const annotationsList = await Annotations.find();

        return res.json(annotationsList)
    },

    async create(req, res) {
        const { title, notes, priority } = req.body;

        if(!notes || !title) {
            return res.status(400).json({ error: 'Necessário um título/anotação!' })
        };

        const annotationsCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return res.status(200).json(annotationsCreated);
    },

    async delete(req, res) {
        
        const { id } = req.params;

        const annotationsDelete = await Annotations.findOneAndDelete({_id: id });

        if (annotationsDelete) {
            return res.status(200).json(annotationsDelete);
        }

        return res.status(401).json({ error: 'Não foi encontrado o registro para deletar!' })
        
    }

};