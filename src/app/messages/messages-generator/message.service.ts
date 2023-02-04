import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { MessageNotification } from '../message-notification/message-notification.gateway';

@Injectable()
export class MessageGeneratorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly messageNotification: MessageNotification,
  ) {}

  public async postMessage(message: string, local: string) {
    const messageCreated = await this.prisma.message.create({
      data: {
        message,
        local: {
          connect: {
            local,
          },
        },
      },
      select: {
        message: true,
        local: {
          select: {
            local: true,
          },
        },
      },
    });
    this.messageNotification.notificationOnLocation(
      messageCreated.message,
      messageCreated.local.local,
    );
  }
}
