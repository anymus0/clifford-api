import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Message } from "../../message/models/Message";


@Entity()
export class GameInstance {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @OneToMany(() => Message, (message) => message.gameInstance)
  messages: Message[]
}
