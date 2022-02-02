import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('customer')
export class Customer {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column({
        length: 100,
        unique: true
    })
    name!: string;

    @Column('boolean', {
        default: false
    })
    deleted: boolean;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @CreateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;
}
