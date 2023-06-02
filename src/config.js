const { config } = require('dotenv');
config();

module.exports = {
    db: {
        user: "postgres",
        password: "Finlandia",
        host: "localhost",
        port: 5432,
        database: "tododb"
    }
}