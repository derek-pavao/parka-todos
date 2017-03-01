import {Path, PathParam, DELETE, GET, PUT, POST, RequestBody} from "parka";
import {Todo} from "../models/todo";
import {TodoService} from "../services/todo-service";

@Path('/todo')
export class TodoResource {

  constructor(private service: TodoService) {}

  @GET
  public getTodoList() {
    return this.service.getAll();
  }

  @GET
  @Path('/:id')
  public getSingleTodo(@PathParam('id') id: string) {
    return this.service.getOneById(Number(id));
  }

  @POST
  public createTodo(@RequestBody(Todo) todo: Todo) {
    return this.service.create(todo);
  }

  @PUT
  @Path('/:id')
  public updateTodo(@RequestBody(Todo) todo: Todo, @PathParam('id') id: string) {
    if (todo.id !== Number(id)) {
      throw {statusCode: 419, message: 'Conflict'};
    } else {
      return this.service.updateTodo(todo);
    }
  }

  @DELETE
  @Path('/:id')
  public deleteTodo(@PathParam('id') id: string) {
    return this.service.removeById(Number(id));
  }
}
