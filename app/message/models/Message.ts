import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { GameInstance } from "../../gameInstance/models/GameInstance";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  content: string;
  @Column()
  timestamp: Date;
  @ManyToOne(() => GameInstance, (gameInstance) => gameInstance.messages, {
    nullable: false,
  })
  gameInstance: GameInstance;
}
