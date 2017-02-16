import { Path, GET } from 'parka';

import { Todo } from '../models/todo';

@Path('/todo')
export class TodoResource {

  @GET
  public getTodoList() {
    return Todo.query()
  }
}
