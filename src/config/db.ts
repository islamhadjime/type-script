import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config();


export const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
            ca: fs.readFileSync(process.env.ROOT_CERT_PATH as string).toString(),
        }
    }
});


