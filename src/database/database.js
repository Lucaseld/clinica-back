import Sequelize from 'sequelize';

const password = process.env.PGPASSWORD;
const databaseName = process.env.PGDATABASE;
const databaseHost = process.env.PGHOST;
const databaseUser = process.env.PGUSER;

//export const sequelize = new Sequelize('clinica', 'postgres', '1234', {
//export const sequelize = new Sequelize('clinicadb', 'fl0user', 'MVCf14EqjtkY', {
export const sequelize = new Sequelize(databaseName, databaseUser, password, {
   // host: 'ep-square-butterfly-96990976.ap-southeast-1.aws.neon.fl0.io',
     host: databaseHost,
    //host: '127.0.0.1',
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
