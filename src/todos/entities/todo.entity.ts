import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : 'todos'})
export class Todo {
    @PrimaryGeneratedColumn()
    id : number;
    @Column()
    title : string;
}
