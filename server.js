// Réaliser un site Web en NodeJS + MSSQL pour un restaurant (réel ou fictif).
// Le site Web doit posséder les pages suivantes :
//  /            : Page d'accueil du resto (Nom, texte de présentation, images)
//  /menu        : Liste des plats (Pour chaque plat : Nom, briève description, prix)
//  /menu/:id    : Detail d'un plat (Nom, description complète, image, prix, allergène)
//  /about       : Page d'info du resto
//  /comment     : Page de commentaire des clients
//  /comment/add : Page qui permet à un client d'ajouter un commentaire
// Les plats et les commentaires doivent être stockés en base de données.
// Remarque : Les plats ne sont pas modifiables depuis le site Web.

// Modèle des données 
//  • Un plat
//    - Nom du plat
//    - Image
//    - Description
//    - Briève description (Max 30 caractères)
//    - Prix (Ne pas être négatif)
//    - La liste des allergènes
//  • Un commentaire
//    - Le prénom
//    - Le nom (Optionnel)
//    - La note (0 à 10)
//    - Un email (Validation du format)
//    - un message (Minimum 10 caractères)
//***************************************************************************************************************************************
// //! Configuration pour la DB 43min!!!!!!!!!!!!!!!! 
// Chargement des variables d'environnement (.env)
require('dotenv').config();

// Import
const http = require('http');
//! Mon Module Perso
const homeController = require('./controllers/home.controller.js');
// const dbUtils = require('./utils/db.utils');

// Variable d'env
// Destructuring ici aller chercher les éléments depuis { PORT }
const { PORT } = process.env;

// Test la connexion vers la DB
// dbUtils.testDbConnection();

// Création du serveur
const server = http.createServer((request, response) => {

    // Info de la requete
    // Info de la requete avec ce que l on va récupérer
    console.log(`url: "${request.url}" • method: "${request.method}"`);

    // Routing simple (Méthode plus complexe vu avec "Express")
    if(request.url === '/') {
        // Appel de la méthode "index" en lui transmettant la requete et la réponse
        homeController.index(request, response);
    }
    else if(request.url === '/message-add' && request.method === "GET") {
        homeController.messageGET(request, response);
    }
    else if(request.url === '/message-add' && request.method === "POST") {
        homeController.messagePOST(request, response);
    }
    //! **********************************************Section****************************************************************** 
    else if(request.url === '/acceuil') {
        // Appel de la méthode "index" en lui transmettant la requete et la réponse
        homeController.acceuil(request, response);
    }
    else if(request.url === '/menu') {
        // Appel de la méthode "index" en lui transmettant la requete et la réponse
        homeController.menu(request, response);
    }
    else if(request.url === '/menuDetail') {
        // Appel de la méthode "index" en lui transmettant la requete et la réponse
        homeController.menuDetail(request, response);
    }
    else if(request.url === '/pageInfo') {
        // Appel de la méthode "index" en lui transmettant la requete et la réponse
        homeController.pageInfo(request, response);
    }
    //! ******************************************************************************************************************** 
    else {
        // Génération simple d'une page d'erreur 404 !
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h1>Page not found</h1>")
    }

    




});

// Démarrer le serveur
// Fonction qu'il va executer quand il va recevoir une information(listen =>lisener)
server.listen(PORT, () => {
    console.log(`Web Server start on port ${PORT}`);
});
