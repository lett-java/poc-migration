import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('class')
export class Class {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column({
        length: 100,
        unique: true
    })
    name!: string;

    @Column()
    duration!: number;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @CreateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;

    @Column()
    year!: number;
}
