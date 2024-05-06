const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // usuario de postgres
    host: 'localhost',
    database: 'repertorio', //nombre sugerido de la base de datos creada en tu pc
    password: '', // pass de postgres
    port: 5432,
});

module.exports = pool;
