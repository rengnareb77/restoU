const {createPool} = require("mariadb");
const { config } = require('dotenv');
config();

const DataBase = function (){
    const pool = createPool({
        host     : process.env.HOST,
        user     : process.env.USERDB,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    });

    /* ========================== */
    /* Requêtes relatives à Carte */
    /* ========================== */

    this.getCartes = async ()=>{
        // TODO : Récupérer toutes les cartes
    }

    this.getCarte = async (ru,date,service) => {
        // TODO : Récupérer une carte spécifique
    }

    this.addCarte = async (carte) => {
        // TODO : Ajouter une carte
    }

    this.updateCarte = async (id,carte) => {
        // TODO : Mettre à jour une carte
    }

    /* =========================== */
    /* Requêtes relatives à RestoU */
    /* =========================== */

    this.getRestoU = async () =>{
        const conn = await pool.getConnection();
        let restoU = [];
        conn.queryStream("SELECT * FROM ru")
            .on("data", data => restoU.push(data))
        await conn.end();
        return restoU;
    }

    this.getRestoUById = async (id) =>{
        const conn = await pool.getConnection();
        let restoU = [];
        conn.queryStream("SELECT * FROM ru WHERE idRU = ?", [id])
            .on("data", data => restoU.push(data))
        await conn.end();
        return restoU;
    }

    /* ============================ */
    /* Requêtes relatives à Aliment */
    /* ============================ */

    this.getAliments = async () =>{
        // TODO : Récupère tous les aliments
    }

    this.getAlimentById = async (id) =>{
        // TODO : Récupère un aliment spécifique
    }

    this.createAliment = async (aliment) =>{
        const conn = await pool.getConnection();
        const request = "INSERT INTO aliment (nom,type,calories,allergene,vegan,nutriscore,description,idChoix,proteines,lipides,portionBase) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        await conn.query(request, [aliment.nom, aliment.type, aliment.calories, aliment.allergene, aliment.vegan, aliment.nutriscore, aliment.description, aliment.idChoix, aliment.proteines, aliment.lipides, aliment.portionBase]);
        await conn.end();
    }

    this.updateAliment = async (id,aliment) =>{
        // TODO : Mettre à jour un aliment
    }

    this.deleteAliment = async (id) =>{
        const conn = await pool.getConnection();
        const request = "DELETE FROM aliment WHERE idAliment = ?";
        await conn.query(request, [id]);
        await conn.end();
    }

}

module.exports = new DataBase();


