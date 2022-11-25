/**
 * @typedef {Object} Carte 
 * Visualisation JSON  d'une carte recupérée de la base de données
 * @property {number?} Carte.idCarte
 * @property {Date} Carte.jour
 * @property {number} Carte.ru_idRu
 */

/**
 * @typedef {Object} Aliment
 * Visualisation JSON  d'un aliment recupéré de la base de données
 * @property {number} idAliment
 * @property {string} nomAl
 * @property {number} calories
 * @property {string} allergenes
 * @property {1|0} vegan
 * @property {string} description
 * @property {number} proteines
 * @property {number} lipides
 * @property {number} portionBase

 */

/**
 * @typedef {Object} RestoU
 * Visualisation JSON  d'un restoU recupéré de la base de données	
 * @property {number} idRu
 * @property {string} nomRu
 * @property {string} adresse
 * @property {string} descriptionRu
 * @property {string} imageRu
 */

/**
 * @typedef {Object} Admin
 * Visualisation JSON  d'un admin recupéré de la base de données
 * @property {number} idAdmin
 * @property {string} login
 * @property {string} mdp
 */

module.exports = {
    Carte:this.Carte,
    RestoU:this.RestoU,
    Aliment:this.Aliment,
    Admin:this.Admin,
}