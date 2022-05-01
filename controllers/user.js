const {response, request} = require("express");

const userGet = (req = request, res = response)=>{
    const id = req.params.id;
    const {nombre} = req.query;

    let user = {
        id,
        nombre: "Omar Calderon",
        edad: "23"
    }

    res.status(400).json({
        peticion : "ok",
        datos : "get prueba controlador",
        user,
        nombre
    })
}

const userPost = (req, res = response)=>{

    let {nombre, edad} = req.body;
    let mayorEdad = false;
    if(edad > 18){
        mayorEdad = true;
    }

    res.json({
        peticion: "ok",
        "datos" : "post prueb",
        nombre,
        edad,
        mayorEdad
    });
}


const userPut = (req, res = response)=>{
    res.json({
        peticion : "ok",
        datos : "put prueba"
    })
}

const userDelete = (req, res = response)=>{
    res.json({
        peticion : "ok",
        datos : "delete prueba"
    })
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}
