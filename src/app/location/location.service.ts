import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  public async listLocations(): Promise<string[]> {
    const locations = await this.prisma.location.findMany();

    return locations.map((local) => {
      return local.local;
    });
  }
}
