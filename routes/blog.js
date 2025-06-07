const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog'); // Importar el modelo Blog de la base de datos

router.get('/', async (req, res) => { // Ruta para obtener todos los blogs
    try {
        const blogs = await Blog.find(); // Obtener todos los blogs de la base de datos
        res.json(blogs); // Enviar los blogs como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Manejo de errores
    }
});

router.get('/:peliculasid', async (req, res) => { // Ruta para obtener un blog específico por ID
    try {
        const blog = await Blog.findById(req.params.peliculasid); // Obtener un blog específico por ID
        if (!blog) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.json(blog);
    } catch (error) {
        res.json({ message: error.message }); // Manejo de errores
    }
});

router.post('/', async (req, res) => { // Ruta para crear un nuevo blog
    const blog = new Blog({ // Crear una nueva instancia del modelo Blog
        title: req.body.title, // Asignar el título del blog desde el cuerpo de la solicitud
        description: req.body.description, // Asignar la descripción del blog desde el cuerpo de la solicitud
    });
    try {
        const savedBlog = await blog.save(); // Guardar el nuevo blog en la base de datos
        res.json(savedBlog); // Enviar el blog guardado como respuesta en formato JSON
    } catch (error) {
        res.json({ message: error.message }); // Manejo de errores
    }
});

router.patch('/:peliculasid', async (req, res) => { // Ruta para actualizar un blog específico por ID
    try {   
        const updatedBlog = await Blog.updateOne( // Actualizar el blog específico por ID
            { _id: req.params.peliculasid },    // Buscar el blog por ID
            { $set: { title: req.body.title, description: req.body.description }}); // Actualizar el título y la descripción
        res.json(updatedBlog);                  // Enviar el blog actualizado como respuesta en formato JSON
    }catch(error) {
        res.json({ message: error.message }); // Manejo de errores
    }
});

router.delete('/:peliculasid', async (req, res) => { // Ruta para eliminar un blog específico por ID
    try {
        const removedBlog = await Blog.findByIdAndDelete(req.params.peliculasid); // Eliminar el blog específico por ID
        if(!removedBlog) {
            return res.status(404).json({ message: 'Blog no encontrado' }); // Manejo de error si el blog no existe
        }
        res.json(removedBlog);
    } catch (error) {
        res.status(500).json({ message: "Error de conexión" }); // Manejo de errores
    }
});

module.exports = router;
