import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { PubSubService } from 'src/pubsub.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(private readonly appService: AppService, private readonly pubSubService: PubSubService) {}

  async onModuleInit() {
    console.log('AppController initialized');
  }

  @Get()
  async getHello(): Promise<void> {
    console.log('Subscribing to topic...');
    await this.pubSubService.pullMessagesManual();
  }
}
