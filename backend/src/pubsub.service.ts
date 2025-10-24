import { Injectable, OnModuleInit } from '@nestjs/common';
import { PubSub, Message } from '@google-cloud/pubsub';
import { Subject } from 'rxjs';

@Injectable()
export class PubSubService implements OnModuleInit {
  private pubSubClient: PubSub;
  public events$ = new Subject<string>();

  async onModuleInit() {
    this.pubSubClient = new PubSub({ projectId: 'pubsub-ui', port: 8085, emulatorMode: true });
    this.pubSubClient.getTopics().then((data) => {
      console.log('Available topics:');
      data[0].forEach((topic) => console.log(topic.name));
    });
  }

  async pullMessagesManual() {
    await this.pubSubClient.getSubscriptions().then((data) => {
      console.log('Available subscriptions:');
      data[0].forEach((sub) => console.log(sub.name));
    });

    this.pubSubClient.subscription('cars_operations_sub').on('message', (message: Message) => {
      const messageData = message.data.toString();
      console.log('Mensagem recebida via listener:', messageData);
      this.events$.next(messageData);
      // message.ack();
    });
  }

  async publishMessage(topicName: string, data: Record<string, any>) {
    const topic = this.pubSubClient.topic(topicName);
    const dataBuffer = Buffer.from(JSON.stringify(data));
    await topic.publishMessage({
      data: dataBuffer,
    });
  }
}
