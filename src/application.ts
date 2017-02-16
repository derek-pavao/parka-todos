import { ParkaApp } from 'parka';
import { ApplicationConfig } from './application-config';
import { TodoResource } from './resources/todo-resource';

export class Application extends ParkaApp<ApplicationConfig> {

  public onBeforeApplicationStart() {
    this.registerResource(TodoResource)
  }

}

export const app = new Application(ApplicationConfig);
