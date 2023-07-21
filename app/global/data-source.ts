// import packages
import { env } from "process";
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Message } from "../message/models/Message";
// import entities
import { GameInstance } from "./../gameInstance/models/GameInstance"

// create db data source
export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "db",
    port: 3306,
    username: env.DB_USERNAME || "clifford",
    password: env.DB_PASSWORD || "123",
    database: env.DB_NAME || "CLIFFORDAPP",
    synchronize: true,
    logging: false,
    entities: [GameInstance, Message],
    migrations: [],
    subscribers: [],
})
