const {pool} = require('../db/database.js');






const getUsers = async (req, res) => {

    try {
        //throw new Error('Mi error')
        const response = await pool.query('SELECT * FROM users');
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }catch(error){
        return res.status(500).send("Hubo un error en la peticion");
    }
    
};





const getUser = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        if (response.rows.length <= 0){
            return res.status(404).send("Empleado no encontrado");
        } 
        console.log(response.rows);
        return res.status(200).json(response.rows);
    }catch(error){
        return res.status(500).send("Hubo un error en la peticion");

    }
};





const addUsers = async (req, res) => {

    try{
        const {email, age} = req.body;
        const response = await pool.query('INSERT INTO users (email, age) VALUES ($1, $2)', [email, age]);
        return res.status(200).send("Usuario añadido");
    }catch(error){
        return res.status(500).send("Hubo un error en la peticion");

    }

};




const updtingUsers = async (req, res) => {
    try{
        const id = req.params.id;
        const {email, age} = req.body;
        const response = await pool.query('UPDATE users SET email = $1, age = $2 WHERE id = $3', [email, age, id]);
        return res.status(200).send("Usuario actualizado");
    }catch(error){
        return res.status(500).send("Hubo un error en la peticion");
    }
};




const deleteUsers = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
        return res.status(200).send("Usuario eliminado");
    }catch(error){
        return res.status(500).send("Hubo un error en la peticion");
    }
};



module.exports ={
    getUsers,
    addUsers,
    updtingUsers,
    deleteUsers,
    getUser
}