const cors = require('cors');
const express = require('express');
class Server{
    constructor(){  
        this.app = express();
        this.PORT = process.env.PORT;
        this.USER_PATH = "/api/users";

        //middlewares
        this.middlewares();
        //rutas
        this.defineRoutes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    defineRoutes(){
        this.app.use(this.USER_PATH, require("../routes/user"));
    }


    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`This app is listen in ${this.PORT}`);
        });
    }
}


module.exports = Server;