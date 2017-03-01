import {Application, ParkaApp} from "parka";
import {ApplicationConfig} from "./application-config";
import {TodoResource} from "./resources/todo-resource";
import {TodoService} from './services/todo-service';

@Application({
  providers: [TodoService],
  resources: [TodoResource]
})
export class App extends ParkaApp<ApplicationConfig> {
}

export const app = new App(ApplicationConfig);
