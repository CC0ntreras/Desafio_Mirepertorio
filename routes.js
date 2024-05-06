const express = require('express');
const router = express.Router();
const pool = require('./config');

//RUTA
router.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/index.html');
    
  });

//POST
router.post('/cancion', async (req, res) => {
    const { titulo, artista, tono, id} = req.body;
    try {
        const respuesta = await pool.query('INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)', [titulo, artista, tono]);
        console.log(`Canción ${titulo} agregada con éxito`);
        res.status(201).send(`Canción ${titulo} agregada con éxito`);
    } catch (err) {
        console.error('Error desconocido:', err);
        res.status(500).send('Error desconocido del servidor.');
    }
});

//GET
router.get('/canciones', async (req, res) => {
    try {
        const respuesta = await pool.query('SELECT * FROM canciones');
        res.send(respuesta.rows)
        } catch (err) {
    console.log(err)
    }finally {
        // await pool.end();
        
    }
});

//PUT
router.put('/cancion/:id', async (req, res) => {
    const id = req.params.id;
    const { titulo, artista, tono} = req.body;
    console.log(req.body);
    try {
        const respuesta = await pool.query('UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4', [titulo, artista, tono, id]);
        if (respuesta.rowCount === 0) {
            res.status(404).send(`No se encontró una canción con el ID ${id} para actualizar.`);
        } else {
            res.send(`Canción con ID ${id} actualizada con éxito.`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error interno del servidor.');
    } finally {
        // await pool.end();
    }
});

//DELETE
router.delete('/cancion', async (req, res) => {
    const id = req.query.id;
    console.log(id);
    try {
        const respuesta = await pool.query(`DELETE FROM canciones WHERE id = $1`, [Number(id)]);
         res.status(200).send();
    } catch (err) {
        console.error(err);
    }finally {
        // await pool.end();
    }
});

module.exports = router;

