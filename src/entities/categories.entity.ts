import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { RealEstate } from "./realState.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", unique: true })
  name: string;

  @OneToMany(() => RealEstate, (real) => real.category)
  realEstate: RealEstate[];
}
export { Category };
