import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  static user_id(user_id: any, contact: User): import("typeorm").UpdateResult | PromiseLike<import("typeorm").UpdateResult> {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;
 
  @Column()
  address: string;
}