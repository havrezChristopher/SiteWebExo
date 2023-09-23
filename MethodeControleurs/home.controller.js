// ici on récupères les paramettre de createServer
const homeController = {

    index: (req, res) => {
        //! Pour la page d Acceuil -> Page d'accueil du resto (Nom, texte de présentation, images)
    },
    //? methode pour traiter les commentaire (récupéré)
    commentaireGET: (req, res) => {
        //! Page de Commentaire (Formulaire)


    },
    //? methode pour traiter les commentaire (Envoie (DATA))
    commentairePOST: (req, res) => {
        //!  Traitement des donnée du formulaire


    }

};
//Ne pas oublier pour pouvoir l utiliser ailleur il sufira de le require depuis le fichier que l on veux   
module.exports = homeController;