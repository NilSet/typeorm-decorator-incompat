import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'text'})
    firstName: string;

    @Column({type: 'text'})
    lastName: string;

    @Column({type: 'int'})
    age: number;

}
