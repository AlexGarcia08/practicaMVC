import { esquema } from "./user.model.js";
import { model } from "mongoose";

export const modeladmin = new model("administrativos", esquema)