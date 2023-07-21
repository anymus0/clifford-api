import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GameInstance {
  @PrimaryGeneratedColumn()
  gameId: string;
  @Column()
  title: string;
  @Column()
  description: string;
}
