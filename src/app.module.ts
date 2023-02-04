import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './app/location/location.module';
import { MessageModule } from './app/messages/message.module';

@Module({
  imports: [MessageModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
