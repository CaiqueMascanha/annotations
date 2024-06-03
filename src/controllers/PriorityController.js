const Annotations = require('../models/AnnotationData');

module.exports = {
    async read(req, res) {
        const priority = req.query;
        
        const priorityNotes = await Annotations.find(priority);

        return res.json(priorityNotes);
    },

    async update(req, res) {
        
    }
};