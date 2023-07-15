import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

import { Listing } from "packages/types/Listing"

@Entity()
export class ListingModel implements Listing {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    description!: string

    @Column()
    published!: boolean

}