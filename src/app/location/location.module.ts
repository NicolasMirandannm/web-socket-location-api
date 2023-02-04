import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
  controllers: [LocationController],
  providers: [PrismaService, LocationService],
})
export class LocationModule {}
