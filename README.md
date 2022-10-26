# Projet RestoU

> Pour savoir comment installer le projet se référer au fichier INSTALLATION.MD

## Arborescence

Les fichiers source se situent dans le dossier `src/`. Ce dossier est lui-même composé de plusieurs autres dossiers/fichier :

- `component/` : Il contient les composants React qui sont communs à toutes les pages (Header, Footer...)

- `page_user/` : Il contient l'ensemble des fichiers sources relatifs à la page user avec comme fichier principal PageUser.js qui contient la page à afficher 

- `page_acceuil/, page_admin/` : Même chose que page_user (*il manque surement d'autre dossier, je vous laisse créer le dossier correspondant à la page que vous faîtes*)

- `App.js` : Ce fichier contient la page à afficher au démarrage de l'application (*pour l'instant elle contient seulement des boutons affichant les différentes pages*)

- `App.css` : Le style de l'application (*ici on ne mettra que les styles des éléments communs à toutes les pages*)

- `index.css/index.js` : Les fichiers par défaut utilisé par React ne pas toucher pour l'instant 

Les fichiers de l'API se situent dans le dossier `api/` :

- `index.js` : Ce fichier sert au lancement de l'api (*il peut être nécessaire de changer la valeur de la variable port au besoin*).

- `db.js` : Sert à récupérer les données dans la base de données.

- `routes/` : Contient l'ensemble des fichiers correspondant aux différents endpoints.

- `.env` : Ce fichier n'apparaît pas sur le git cependant **il est nécessaire de le créer comme ci-dessous** : 

```
HOST=L'ADRESSE DE LA BASE DE DONNÉES
USERDB=VOTRE NOM D'UTILISATEUR
PASSWORD=VOTRE MOT DE PASSE
DATABASE=VOTRE BASE DE DONNÉES

PORT_SERVER_API=VOTRE PORT DE VOTRE MACHINE POUR LE SERVEUR API
```

## Lancement

### API

Pour lancer l'API :

1.  Se déplacer dans le dossier `api/` (`cd api/`)

2. Lancer la commande `npm install`

3. Vérifier que le fichier `.env` est bien configuré (*cf. la partie Arborescence*).

4. Lancer la commande `npm start`

### Site web

Pour lancer le site web react :

1. Vérifier que l'on se situe à la racine du projet

2. Lancer la commande `npm install`

3. Lancer la commande `npm start`
