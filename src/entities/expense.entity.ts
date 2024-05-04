// src/expenses/expense.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserProfile } from './user.entity';
import { Category } from './category.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(() => UserProfile, userProfile => userProfile.expenses)
  userProfile: UserProfile;

  @ManyToOne(() => Category, category => category.expenses)
  category: Category;
}
