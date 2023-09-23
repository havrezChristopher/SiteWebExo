// on utilise le moteur de Template pour utiliser nos pages avec ejs
// donc ici on l importe 
const ejs = require('ejs')


// ici on récupères les paramettre de createServer
const homeController = {

    index: (req, res) => {
        //! Pour la page d Acceuil -> Page d'accueil du resto (Nom, texte de présentation, images)
    
        // Rendu de La Pages
        // ejs utilise une methode pour permetre de faire du render de fichier 
        // qui sert a aller chercher des fichier Template (code HTML)
          ejs.renderFile('../views/index/index.ejs')

    },
    menu: (req, res) => {
        //! Pour la Liste des plats (Pour chaque plat : Nom, briève description, prix)
    ejs.renderFile('../views/menu/menu.ejs')
    
    },
    menuDetail: (req, res) => {
        //! Pour le Detail d'un plat (Nom, description complète, image, prix, allergène)
        ejs.renderFile('../views/menuDatail/menuDatail.ejs')
    
    },
    pageInfo: (req, res) => {
        //! Pour la Page d'info du resto
        ejs.renderFile('../views/pageInfo/pageInfo.ejs')
    
    },
    indexComment: (req, res) => {
        //! Pour la Page de commentaire des clients
        ejs.renderFile('../views/indexComment/indexComment.ejs')
    
    },


    //? methode pour traiter les commentaire (récupéré)
    commentaireGET: (req, res) => {
        //! Page Page de commentaire des clients (Formulaire)


    },
    //? methode pour traiter les commentaire (Envoie (DATA))
    commentairePOST: (req, res) => {
        //!  Traitement des donnée du formulaire


    }

};
//Ne pas oublier pour pouvoir l utiliser ailleur il sufira de le require depuis le fichier que l on veux   
module.exports = homeController;