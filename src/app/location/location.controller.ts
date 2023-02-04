import { Controller, Get } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  public async listLocations(): Promise<string[]> {
    return await this.locationService.listLocations();
  }
}
