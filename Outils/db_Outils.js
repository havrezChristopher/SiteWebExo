const mssql = require('mssql');

// ici création d'une methode qui permet d ouvrire la connection a la DB
const creatDbConnection = async () => {

    // sur la doc pour la connection avec mssql
    const sqlConfig = {
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        server: process.env.DB_SERVER,
        option: {
            // Permets d indiquer comme quoi le server est en train de tourner !
            trustServerCertificate: true
        }

    };
    // création d un objet (db)pour pouvoir la réutiliser et await dit quelle est async!
    const db = await mssql.connect(sqlConfig);
    // et on renvoie la db pour l objet !
    return db;
};

// Methodes pour tester la connection 
const testDbConnection = async () => {

    try {
        const db = await creatDbConnection();
        db.close();
        console.log('***Connection Réussie !***');
        return true;
    } catch {
        console.error(error);
        return false;
    }

};
module.exports = {

    creatDbConnection,
    testDbConnection

}