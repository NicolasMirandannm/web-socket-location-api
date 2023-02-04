import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessageNotification implements OnGatewayConnection {
  @WebSocketServer()
  private server: Server;
  public handleConnection(client: Socket) {
    client.emit('connection', 'successfully connected to server');
  }

  public notificationOnLocation(message: string, location: string): void {
    try {
      this.server.emit(`notification/${location}`, message);
    } catch (error) {
      console.error(`Erro ao notificar o região ${location}`);

      throw new WsException(
        error.message || `Erro ao notificar o região ${location}`,
      );
    }
  }
}
