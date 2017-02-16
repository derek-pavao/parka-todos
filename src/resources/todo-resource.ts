import { Path, PathParam, DELETE, GET, PUT, POST, RequestBody} from 'parka';
import * as objection from 'objection';

import { Todo } from '../models/todo';

@Path('/todo')
export class TodoResource {

  @GET
  public getTodoList() {
    return Todo.query()
  }

  @GET
  @Path('/:id')
  public getSingleTodo(@PathParam('id') id: string) {
    return Todo.query()
      .findById(Number(id));
  }

  @POST
  public createTodo(@RequestBody(Todo) todo: Todo) {
    return Todo.query()
      .insert(todo);
  }

  @PUT
  @Path('/:id')
  public updateTodo(@RequestBody(Todo) todo: Todo, @PathParam('id') id: string) {
    if (todo.id !== Number(id)) {
      throw {statusCode: 419, message: 'Conflict'};
    } else {
      return todo.$query()
        .updateAndFetch(todo);
    }
  }

  @DELETE
  @Path('/:id')
  public deleteTodo(@PathParam('id') id: string) {

    return Todo.query()
      .deleteById(Number(id));
  }
}
