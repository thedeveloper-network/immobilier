import { DataSource } from "typeorm";
import { Listing } from "../models/Listing";



export const AppDataSource = new DataSource({
    type: "postgres",
})

export const initDB = () => {
    return new Promise( (res, rej) => {
        AppDataSource.setOptions({
            host: process.env.DB_HOST,
            port: Number( process.env.DB_PORT ),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            synchronize: process.env.ENV == 'dev'? true : false,
            logging: process.env.ENV == 'dev'? true : false,
            entities: [Listing],
            subscribers: [],
            migrations: [],
        })
        AppDataSource.initialize()
        .then(() => {
            res( AppDataSource );
        })
        .catch((error) => rej( error ) )
    });
}