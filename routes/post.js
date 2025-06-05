const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Importar el modelo Post de la base de datos

router.get('/', async (req, res) => { // Ruta para obtener todos los posts
    try {
        const posts = await Post.find(); // Obtener todos los posts de la base de datos
        res.json(posts); // Enviar los posts como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
});
router.get('/:peliculasid', async (req, res) => { // Ruta para obtener un post específico por ID
    try {
        const post = await Post.findById(req.params.peliculasid); // Obtener un post específico por ID
             res.json(post); // Manejo de error si el post no existe
    
    } catch (error) {
        res.json({ message: error.message }); // Manejo de errores
    }
});
router.post('/', async (req, res) => { // Ruta para crear un nuevo post
    const post = new Post({ // Crear una nueva instancia del modelo Post
        title: req.body.title, // Asignar el título del post desde el cuerpo de la solicitud
        description: req.body.description, // Asignar la descripción del post desde el cuerpo de la solicitud
    });
    try {
        const savedPost = await post.save(); // Guardar el nuevo post en la base de datos
        res.json(savedPost); // Enviar el post guardado como respuesta en formato JSON
    } catch (error) {
        res.json({ message: error.message }); // Manejo de errores
    }

});
router.patch('/:peliculasid', async (req, res) => { // Ruta para actualizar un post específico por ID
    try {   
        const updatedPost = await Post.updateOne( // Actualizar el post específico por ID
            { _id: req.params.peliculasid },    // Buscar el post por ID
            { $set: { title: req.body.title, description: req.body.description }}); // Actualizar el título y la descripción
        res.json(updatedPost);                  // Enviar el post actualizado como respuesta en formato JSON
    }catch(error) {
        res.json({ message: error.message }); // Manejo de errores
    }
});
router.delete('/:peliculasid', async (req, res) => { // Ruta para eliminar un post específico por ID
    try {
        const removedPost = await Post.findByIdAndDelete(req.params.postId); // Eliminar el post específico por ID
        if(!removedPost) {
            return res.status(404).json({ message: 'Post no encontrado' }); // Manejo de error si el post no existe
        }
    } catch (error) {
        res.status(500).json({ message: "Error de conexión" }); // Manejo de errores
    }
});

module.exports = router; // Exportar el router para que pueda ser utilizado en otros archivos
// Este archivo define las rutas para manejar las operaciones relacionadas con los posts en la base de datos.
// Incluye rutas para obtener todos los posts y obtener un post específico por ID.
