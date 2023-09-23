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
// Chargement des variables d'environnement (.env)
require('dotenv').config();

// Import des module Crée
const http = require('http');
const homeController = require('./controllers/home.controller');
const dbUtils = require('./utils/db.utils');

// Variable d'environements 
// Destructuring ici aller chercher les éléments depuis { PORT }
const { PORT } = process.env;

// Test la connexion vers la DB
dbUtils.testDbConnection();

// Création du serveur
const server = http.createServer((request, response) => {


// Démarrer le serveur
// Fonction qu'il va executer quand il va recevoir une information(listen =>lisener)
server.listen(PORT, () => {
    console.log(`Server On sur le port => ${PORT}`);
});