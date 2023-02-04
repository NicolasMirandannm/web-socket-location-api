import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { MessageNotification } from './message-notification/message-notification.gateway';
import { MessageController } from './messages-generator/message.controller';
import { MessageGeneratorService } from './messages-generator/message.service';

@Module({
  controllers: [MessageController],
  providers: [PrismaService, MessageGeneratorService, MessageNotification],
})
export class MessageModule {}
