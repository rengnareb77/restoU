# Guide d'installation

## Prérequis

Afin de pouvoir lancer l'application sur votre propre ordinateur il faut avoir node.js d'installer sur sont ordinateur. Je vous laisse le soin de trouver comment faire cela sur Google.

## Étape 1: télécharger le repo github

La première étape consiste à récupérer le projet depuis github, pour cela 2 méthodes :

- Si vous avez git d'installé sur votre machine faite simplement `git clone https://github.com/rengnareb77/restoU.git` dans un terminal.

- Sinon télécharger le depuis le [github associé](https://github.com/rengnareb77/restoU)
  
  - Cliquer sur "code" puis "download zip" 

## Étape 2: Installation des différents modules grâce à Node

Une fois que vous avez télécharger le projet ouvrez un terminal à l'emplacement ou vous avez récupérer les projet `cd endroit/ou/est/situé/le/projet`. 

Pour être sur que c'est le bon emplacement exécutez la commande `ls` et cette dernière doit vous retourner `INSTALLATION.MD package.json public src node_modules package-lock.json README.md` .

Une fois que vous êtes au bon endroit exécuter la commande `npm install` pour télécharger les différents modules utiles au projet.

Pour finir exécuter la commande `npm start` qui devrait lancer le projet et vous afficher un lien (souvent localhost:3000) que vous pourrez ouvrir dans votre navigateur.
