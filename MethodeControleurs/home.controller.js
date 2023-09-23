// ici on récupères les paramettre de createServer
const homeController = {

    index: (req, res) => {
        //! Pour la page d Acceuil -> Page d'accueil du resto (Nom, texte de présentation, images)
    },
    menu: (req, res) => {
        //! Pour la Liste des plats (Pour chaque plat : Nom, briève description, prix)
    },
    menuDetail: (req, res) => {
        //! Pour le Detail d'un plat (Nom, description complète, image, prix, allergène)
    },
    pageInfo: (req, res) => {
        //! Pour la Page d'info du resto
    },
    comment: (req, res) => {
        //! Pour la Page de commentaire des clients
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