# NodeJs

Intro
Le but du projet va être de compléter le projet de chat existant réalisé lors des cours. Ce projet devra être rendu sous la forme d'un package publié sur le repository NPM et poussé sur Github. Vous enverrez ensuite le nom de votre projet en MP sur Teams pour le rendu. Vous aurez 1 mois pour rendre le projet.

Objectifs du module
Comprendre et connaitre les bases de NodeJS en travaillant sur un projet concret. Ce projet permettra de :

Maitriser ExpressJS et être capable d'ajouter ses propres routes HTTP
Être capable d'utiliser les WebSockets pour communiquer en temps réel
Savoir utiliser Prisma pour dialoguer avec une base de données
Être capable d'écrire des scripts NPM
Savoir publier un package sur NPM
Connaître les bases pour construire un projet utilisable en production
Tâches
Le but de ce projet va être de construire une mini-version de Facebook. En plus du chat existant, l'utilisateur devra être capable de gérer son compte, de poster des status et de voir en temps réel les posts des autres utilisateurs.

Compte utilisateur
Nous allons ajouter :

 Une page /profile pour modifier les données du compte utilisateur
 La possibilité depuis cette page de supprimer le compte
 Un endpoint /logout qui enlève le cookie de session et redirige vers le login
Chat
 Déplacer le chat dans une page /chat
 Ajouter une feuille de style CSS pour styliser le chat (styling au choix, restez simple, le but est juste de vérifier si vous savez servir un fichier d'asset)
Posts
 Créer un nouveau model Prisma nommé Post contenant :
content - Contenu du post
userId - Id de l'utilisateur qui a posté
id - Id du post
createdAt - Date de création du post
updatedAt - Date de dernière modification du post
 Sur le /, lister les posts des utilisateurs dans l'ordre chronologique décroissant
 Ajouter la possibilité de créer un post grâce à une simple textarea en haut de la list
 Afficher en temps réel les nouveaux posts
Tooling
 Ajouter ESLint à votre projet et utiliser la configuration recommandée
 Ajouter un script NPM nommé lint pour faire tourner ESLint sur votre projet
Autres prérequis
 Publier au moins une version mineure de votre projet
 Votre projet ne doit pas comporter d'erreur TS ou ESLint
 Votre projet doit être fonctionnel et sans erreurs
 Votre code est proprement formaté et commenté
 Uniquement les pages Login et Register doivent être accessibles sans être connecté
Points bonus
 Possibilité d'uploader une image dans un post ou dans le profil
Utilisation du streaming de données pour uploader l'image comme vu en cours
Stocker le fichier dans le dossier public et stocker le chemin dans la base de données
 Fonctionnalité additionnelle de votre choix
 Navigation entre les pages avec des liens HTML
Bonne chance ! 🤗
