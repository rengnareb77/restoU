

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

    // Requêtes relatives à restoU
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

    // Requêtes relatives à aliment

    this.createAliment = async (aliment) =>{
        const conn = await pool.getConnection();

        const request = "INSERT INTO aliment (nom,type,calories,allergene,vegan,nutriscore,description,idChoix,proteines,lipides,portionBase) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        await conn.query(request, [aliment.nom, aliment.type, aliment.calories, aliment.allergene, aliment.vegan, aliment.nutriscore, aliment.description, aliment.idChoix, aliment.proteines, aliment.lipides, aliment.portionBase]);
        await conn.end();
    }

    this.deleteAliment = async (id) =>{
        const conn = await pool.getConnection();
        const request = "DELETE FROM aliment WHERE idAliment = ?";
        await conn.query(request, [id]);
        await conn.end();
    }
}

module.exports = new DataBase();


