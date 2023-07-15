import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class ListingModel  {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    published!: boolean

}