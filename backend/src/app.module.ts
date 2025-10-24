import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PubSubService } from 'src/pubsub.service';
import { ConfigModule } from '@nestjs/config';
import { EventsController } from 'src/events.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, EventsController],
  providers: [AppService, PubSubService],
})
export class AppModule {}
