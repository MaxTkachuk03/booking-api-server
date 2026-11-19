import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ name: 'room_id' })
  room_id: string;

  @Column({ name: 'user_id' })
  user_id: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @CreateDateColumn({ name: 'startTime', type: 'timestamp with time zone' })
  startTime: Date;

  @CreateDateColumn({ name: 'endTime', type: 'timestamp with time zone' })
  endTime: Date;
}
