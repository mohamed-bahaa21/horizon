const Horizon = require('../models/Horizon.model');


exports.GET_HORIZON_SECTION_CONTENT = (req, res, sectionID) => {
    Horizon.findOne({ _id: sectionID })
        .then(section => {
            res.json(section);
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}

exports.POST_HORIZON_SECTION_CONTENT = (req, res, sectionID, data) => {
    Horizon.findById(sectionID)
        .then((horizon) => {
            // console.log(req.body);
            horizon.section_content = data;

            horizon
                .save()
                .then(() => res.json('horizon updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}