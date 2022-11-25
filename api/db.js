const {createPool} = require("mariadb");
const { config } = require('dotenv');
const { Carte,Aliment,RestoU,Admin } = require('./types');
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
        const conn = await pool.getConnection();
        let restoU = [];
        let alim = [];

        const request = "SELECT idChoix_Menu, etapeRepas FROM ru JOIN carte ON (ru.idRu = carte.ru_idRu) JOIN choix_menu ON (carte.idCarte = choix_menu.ct_idCarte) JOIN etape_Repas ON (choix_menu.er_idEtape_Repas = etape_Repas.idEtape_Repas) WHERE nomRu = ? AND jour = ? AND momentJour = ?;";
        restoU = await conn.query(request,[ru,date,service])
        

        for(elem of restoU){
            alim.push(elem.etapeRepas);
            const request = "SELECT nomAl FROM composition JOIN aliment ON (composition.al_idAliment = aliment.idAliment) WHERE chm_idChoixM = ?;";
            alim.push( await conn.query(request,[elem.idChoix_Menu]) );
                //.on("data", data => alim.push(data))  
        }
        
        await conn.end();
        return alim;
    }

    this.createCarte = 
    /**
    * 
    * @param {Carte} carte 
    * @returns {Promise<Carte>}
    */
   async (carte) => {
       const conn = await pool.getConnection();
       const {jour, ru_idRu} = carte;
       const query = 
       `INSERT into carte (jour,ru_idRu)
       VALUES (?,?)`;
       const options = [jour,ru_idRu];
       const res = {...carte,idCarte:Number((await conn.query(query,options)).insertId)};
       await conn.end();
       return res;
    }

    this.updateCarte = async (id,carte) => {
        const conn = await pool.getConnection();
        const request = "UPDATE carte SET jour = ?, ru_idRu = ? WHERE idCarte = ?";
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


