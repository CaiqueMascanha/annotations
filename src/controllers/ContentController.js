const Annotations = require('../models/AnnotationData');

module.exports = {

    async update(req, res) {
        const { id } = req.params;
        const { notes } = req.body;

        const annotations = await Annotations.findOne({ _id: id });

        if (notes) {
            annotations.notes = notes;

            await annotations.save();
        }

        return res.json(annotations);

    }

};