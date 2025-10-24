import { Controller, Sse } from '@nestjs/common';
import { PubSubService } from './pubsub.service';
import { Observable, map } from 'rxjs';

@Controller()
export class EventsController {
  constructor(private readonly pubsubService: PubSubService) {}

  @Sse('sse')
  stream(): Observable<MessageEvent> {
    return this.pubsubService.events$.pipe(
      map((msgData) => ({ data: msgData } as MessageEvent))
    );
  }
}
