import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { GameInstance } from "../../gameInstance/models/GameInstance";
import { ChatCompletionRequestMessageRoleEnum } from "openai";

@Entity()
export class Message {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  role: ChatCompletionRequestMessageRoleEnum;
  @Column("text")
  content: string;
  @Column()
  timestamp: Date;
  @ManyToOne(() => GameInstance, (gameInstance) => gameInstance.messages, {
    nullable: false,
  })
  gameInstance: GameInstance;
}
