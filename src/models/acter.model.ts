import { Model, Optional  } from "sequelize";
import { CharacterData } from "../@types/type";


export class Character extends Model {
    public id!: number;
    public name!: string;
    public status!: string;
    public species!: string;
    public type!: string;
    public gender!: string;
    public origin!: any;
    public location!: any;
    public image!: string;
    public episode!: string[];
    public url!: string;
    public created!: string;
}

