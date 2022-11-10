const {createPool} = require("mariadb");
const { config } = require('dotenv');
config();

const DataBase = function (){
    const pool = createPool({
        host     : process.env.HOST_DB,
        user     : process.env.USERDB,
        password : process.env.PASSWORD,
        database : process.env.DATABASE
    });

    /* ========================== */
    /* Requêtes relatives à Carte */
    /* ========================== */

    this.getCartes = async ()=>{
        const conn = await pool.getConnection();
        let carte = [];
        conn.queryStream("SELECT * FROM carte")
            .on("data", data => carte.push(data))
        await conn.end();
        return carte;
    }

    this.getCarte = async (ru,date,service) => {
        // TODO : Récupérer une carte spécifique
    }

    this.addCarte = async (carte) => {
        // TODO : Ajouter une carte
    }

    this.updateCarte = async (id,carte) => {
        const conn = await pool.getConnection();
        const request = "UPDATE carte SET jour = ?, ru_idru = ? WHERE idCarte = ?";
        await conn.query(request, [carte.jour, carte.ru_idru, id]);
        await conn.end();
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
        const conn = await pool.getConnection();
            let aliment = [];
        conn.queryStream("SELECT * FROM aliment")
            .on("data", data => aliment.push(data))
        await conn.end();
        return aliment;
    } 
        

   this.getAlimentById = async (id) =>{
        const conn = await pool.getConnection();
        let aliment = [];
        conn.queryStream("SELECT * FROM aliment WHERE idAliment = ?",[id])
            .on("data", data => aliment.push(data))
        await conn.end(); 
        return aliment;
    }

    this.createAliment = async (aliment) =>{
        const conn = await pool.getConnection();
        const request = "INSERT INTO aliment (nomAl,type,calories,allergenes,vegan,nutriscore,description,proteines,lipides,portionBase) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        await conn.query(request, [aliment.nomAl, aliment.type, aliment.calories, aliment.allergenes, aliment.vegan, aliment.nutriscore, aliment.description, aliment.idChoix, aliment.proteines, aliment.lipides, aliment.portionBase]);
        await conn.end();
    }

    this.updateAliment = async (id,aliment) =>{
        const conn = await pool.getConnection();
        const request = "UPDATE aliment SET nomAl=?, type=?, calories=?, allergenes=? ,vegan=? ,nutriscore=? ,description=?, proteines=?, lipides=?, portionBase=? WHERE idAliment = ?";
        await conn.query(request, [aliment.nomAl, aliment.type, aliment.calories, aliment.allergenes, aliment.vegan, aliment.nutriscore, aliment.description, aliment.proteines, aliment.lipides, aliment.portionBase, id]);
        await conn.end();
    }

    this.deleteAliment = async (id) =>{
        const conn = await pool.getConnection();
        const request = "DELETE FROM aliment WHERE idAliment = ?";
        await conn.query(request, [id]);
        await conn.end();
    }



    /* ============================ */
    /* Requêtes relatives à Login   */
    /* ============================ */

    this.checkLogin = async (admin) =>{
        const conn = await pool.getConnection();
        let loginRecu= []
        const request ="SELECT login,mdp FROM admin WHERE login=? and mdp=?"
        conn.queryStream(request,[admin.login,admin.mdp])
            .on("data",data => loginRecu.push(data));
        await conn.end();
	console.log(loginRecu);
	console.log(loginRecu.length);
        return loginRecu;
    }
}
module.exports = new DataBase();


