import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingController } from './booking/controllers/booking.controller';
import { BookingService } from './booking/services/booking.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      name: 'booking_db',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        name: config.get<string>('DB_NAME'),
      }),
    }),
    BookingModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class AppModule {}
