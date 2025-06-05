const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,       
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Post', PostSchema); // Exportar el modelo Post para que pueda ser utilizado en otros archivos
