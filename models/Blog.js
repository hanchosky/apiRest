const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    title: {
        type: String, // Título del blog
        required: true
    },
    description: {
        type: String,       // Descripción del blog
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Blog', BlogSchema); // Exportar el modelo Blog para que pueda ser utilizado en otros archivos
