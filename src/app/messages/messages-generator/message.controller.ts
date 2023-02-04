import { Controller, Post } from '@nestjs/common';
import { Body, Request } from '@nestjs/common/decorators';
import { MessageGeneratorService } from './message.service';

export interface MessageDto {
  message: string;
  local: string;
}

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageGeneratorService) {}

  @Post('create')
  public async postMessage(@Body() messageReq: MessageDto) {
    await this.messageService.postMessage(messageReq.message, messageReq.local);
  }
}
