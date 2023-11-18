import Sequelize from 'sequelize';

const password = process.env.PASSWORS

//export const sequelize = new Sequelize('clinica', 'postgres', '1234', {
export const sequelize = new Sequelize('clinicadb', 'fl0user', password, {
    host: 'ep-square-butterfly-96990976.ap-southeast-1.aws.neon.fl0.io',
    //host: '127.0.0.1',
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
