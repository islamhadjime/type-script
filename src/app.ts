import { sequelize } from "./config/db";
import axios from "axios";
import { Character } from "./models/Acters";
import { CharacterData } from "./@types/type";

import * as dotenv from "dotenv";
dotenv.config();


const initializeDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log("Database synchronized");
};




const fetchAndSaveCharacters = async (): Promise<void> => {
     let nextUrl = process.env.API_URL || "";
     while(nextUrl){
        try{
            const response = await axios.get(nextUrl);
            const characters: CharacterData[] = response.data.results;
            const charactersToSave = characters.map((character) => ({
               id: character.id,
               name: character.name,
               status: character.status,
               species: character.species,
               gender: character.gender,
               origin: character.origin,
               location: character.location,
               image: character.image,
               episode: character.episode,
               url: character.url,
               created: character.created
            }));
            await Character.bulkCreate(charactersToSave,{
                updateOnDuplicate: [
                    'id', 'name', 'status', 'species', 'type', 'gender',
                    'origin', 'location', 'image', 'episode', 'url', 'created'
                ],
            });
            nextUrl = response.data.info.next;
            console.log(characters);
        } catch (error) {
            console.error("Error fetching characters", error);
        }
     }
}
    

const start = async () => {
    try{
        await initializeDatabase();
        await fetchAndSaveCharacters();
        await sequelize.close();
        console.log("Characters saved");
    } catch (error) {
        console.error("Error starting the application", error);
    }
}

start();