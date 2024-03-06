// Source code generated by AppGPT (www.appgpt.tech)

 //to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("OrderDetails")
export class OrderDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
orderNumber: number;

@Column("integer",{nullable: true})
line: number;

@Column("integer",{nullable: true})
product: number;

@Column("real",{nullable: true})
price: number;

@Column("integer",{nullable: true})
quantity: number;


}
