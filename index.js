import { sequelize } from "./database/database.js";
import express from 'express';
import { Usuario } from "./models/usuario.js";

const app = express();
const port = process.env.PORT || 3001;

async function verifyAndSyncDBConnection() {
    try {
        await sequelize.authenticate();
        console.log("conexion establecida a bd");

        await sequelize.sync({force: true});         
    }
    catch(error) {
        console.error("No se puede establecer la conexion", error);
    }
}

app.get("/ver-todos-usuarios", async function(req, res) {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
})

app.get("/eliminar-usuario", async function(req, res) {
    await Usuario.destroy({
        where : {
            id : 2
        }
    })
    res.send("Usuario actualizado");
})

app.get("/actualizar-usuario", async function(req, res) {
    await Usuario.update({
        edad : 31
    }, {
        where : {
            codigo : "20123254"
        }
    })
    res.send("Usuario actualizado");
})

app.get("/insertar-usuario", async function(req, res) {
    const usuarioIngresadao = await Usuario.create({
        nombre : "Pepe",
        codigo : "20123254",
        edad : 30
    });
    res.send("Usuario insertado");
})

app.listen(port, function() {
    console.log("Servidor funcionando en el puerto " + port);
    verifyAndSyncDBConnection();
})
