// on utilise le moteur de Template pour utiliser nos pages avec ejs
// donc ici on l importe 
const ejs = require('ejs');


// ici on récupères les paramettre de createServer
const homeController = {

    index: (req, res) => {
        //! Pour la page d Acceuil -> Page d'accueil du resto (Nom, texte de présentation, images)

        // Rendu de La Pages
        // ejs utilise une methode pour permetre de faire du render de fichier 
        // qui sert a aller chercher des fichier Template (code HTML)
        ejs.renderFile('../views/index/index.ejs');

    },
    menu: (req, res) => {
        //! Pour la Liste des plats (Pour chaque plat : Nom, briève description, prix)
        ejs.renderFile('../views/menu/menu.ejs');

    },
    menuDetail: (req, res) => {
        //! Pour le Detail d'un plat (Nom, description complète, image, prix, allergène)
        ejs.renderFile('../views/menuDatail/menuDatail.ejs');

    },
    pageInfo: (req, res) => {
        //! Pour la Page d'info du resto
        ejs.renderFile('../views/pageInfo/pageInfo.ejs');

    },
    indexComment: (req, res) => {
        //! Pour la Page de commentaire des clients(CALL_BACK <== Mieux les Promise)

        // Rendu de la Page(CALL BACK)
        //* En gros le callback est une fonction qui est passée comme argument à une autre fonction Async
        //* callback est exécutée après l'exécution de la fonction principale (generalements Fonction Async) 
        ejs.renderFile('../views/comment/indexComment.ejs', (error, pageRender) => {

            //* erreur lors de la génération du rendu 
            if (error) {
                console.error(error);
                //TODO  crée une Methode du callBack 
                res.writeHead(500);
                res.end();
                return;
            }
            //*Si Oppération est réusis 
            res.writeHead(200, { "Content-Type": "texte/html" });
            res.end(pageRender);
        });
    },


    //? methode pour traiter les commentaire (récupéré)
    commentaireGET: (req, res) => {
        // Rendu de la Page(PROMISE)

        //! Page Page de commentaire des clients (Formulaire)
        //* ici avec une promise meme que le callBack  
        ejs.renderFile('../views/comment/commentForm.ejs')
            // Génération de la vue Réussi !
            //*va ce declancher en qua de sucess! 
            .then(pageRender => {
                res.writeHead(200, { "Content-Type": "texte/html" });
                res.end(pageRender);
            })
            //*Si Oppération est réusis 
            //*va ce declancher en qua d Error !
            .catch(error => {
                res.writeHead(500);
                res.end();
            });

    },
    //? methode pour traiter les commentaire (Envoie (DATA))
    commentairePOST: (req, res) => {
        //!  Traitement des donnée du formulaire


    }

};
//Ne pas oublier pour pouvoir l utiliser ailleur il sufira de le require depuis le fichier que l on veux   
module.exports = homeController;