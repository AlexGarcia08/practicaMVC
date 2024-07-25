import { modelo } from "../models/user.model.js";

export const test = () =>{
    console.log("si funciona la conexion entre el controlador y el proyeto")
}

modelo.create ({
    name: "alex"
})