// on utilise le moteur de Template pour utiliser nos pages avec ejs
// donc ici on l importe 
const ejs = require('ejs');
const { creatDbConnection } = require('../utils/db.utils');
const { rows } = require('mssql');

// ici on récupères les paramettre de createServer
const homeController = {

    index: async (req, res) => {

        //Recupération des donnée de la DB
        const db = await creatDbConnection();
        // Récupérer les messages
        const result = await db.query('SELECT * FROM Commentaires ');
        console.log(result);
        // on utilise le recorset pour aller chercher nos éléments et le .map pour filtrer ce que l'ont veux
        //formatage des donnée pour l utilisation (Mapping)
        
        const MessageSql = result.recordset.map(row =>{
                return {
                Prenom: row['Prenom'],
                Nom: row['Nom'],
                Message: row['Message']
            }
        });
       
        
        //! Page d'accueil → Liste des message

        // Rendu de la page (Callback)
        //* En gros le callback est une fonction qui est passée comme argument à une autre fonction Async
        //* callback est exécutée après l'exécution de la fonction principale (generalements Fonction Async) 
        //? Pour obtenir le repertoire racine → "require.main.path" 
        ejs.renderFile(`${require.main.path}/views/home/index.ejs`,{ MessageSql}, (error, pageRender) => {
            //* Erreur lors de la génération du rendu
            if (error) {
                console.error(error);
                //TODO  crée une Methode du callBack 
                res.writeHead(500);
                res.end();
                return;
            }

            //* Génération de la vue réussi !
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(pageRender);
        });
    },
    //? methode pour traiter les commentaire (récupéré)
    messageGET: (req, res) => {
        //! Page de formulaire

        // Rendu de la page (Promise)
        ejs.renderFile(`${require.main.path}/views/home/message-form.ejs`)
            .then(pageRender => {
                //* Génération de la vue réussi !
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(pageRender);
            })
            .catch(error => {
                //* Erreur lors de la génération du rendu
                res.writeHead(500);
                res.end();
            });
    },

    messagePOST: (req, res) => {
        //! Traitement des données du formulaire

    },

    //! *********************************************Section*************************************************************************
    acceuil: (req, res) => {
        //! Pour la page d Acceuil -> Page d'accueil du resto (Nom, texte de présentation, images)

        // Rendu de La Pages
        // ejs utilise une methode pour permetre de faire du render de fichier 
        // qui sert a aller chercher des fichier Template (code HTML)
        ejs.renderFile(`${require.main.path}/views/home/Acceuil/acceuil.ejs`)
            // Rendu de la page (Promise)

            .then(pageRender => {
                //* Génération de la vue réussi !
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(pageRender);
            })
            .catch(error => {
                //* Erreur lors de la génération du rendu
                res.writeHead(500);
                res.end();
            });

    },
    menu: (req, res) => {
        //! Pour la Liste des plats (Pour chaque plat : Nom, briève description, prix)

        ejs.renderFile(`${require.main.path}/views/home/menu/menu.ejs`)
            // Rendu de la page (Promise)

            .then(pageRender => {
                //* Génération de la vue réussi !
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(pageRender);
            })
            .catch(error => {
                //* Erreur lors de la génération du rendu
                res.writeHead(500);
                res.end();
            });

    },
    menuDetail: (req, res) => {
        //! Pour le Detail d'un plat (Nom, description complète, image, prix, allergène)


        ejs.renderFile(`${require.main.path}/views/home/menuDetail/menuDetail.ejs`)
            // Rendu de la page (Promise)

            .then(pageRender => {
                //* Génération de la vue réussi !
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(pageRender);
            })
            .catch(error => {
                //* Erreur lors de la génération du rendu
                res.writeHead(500);
                res.end();
            });

    },
    pageInfo: (req, res) => {
        //! Pour la Page d'info du resto

        ejs.renderFile(`${require.main.path}/views/home/pageInfo/pageInfo.ejs`)
            // Rendu de la page (Promise)

            .then(pageRender => {
                //* Génération de la vue réussi !
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(pageRender);
            })
            .catch(error => {
                //* Erreur lors de la génération du rendu
                res.writeHead(500);
                res.end();
            });

    },
    //! *********************************************Section************************************************************************* 
};
//Ne pas oublier pour pouvoir l utiliser ailleur il sufira de le require depuis le fichier que l on veux 
module.exports = homeController;