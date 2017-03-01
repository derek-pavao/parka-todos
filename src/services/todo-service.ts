import {Injectable} from "parka";
import {Todo} from '../models/todo';

@Injectable()
export class TodoService {

  public getAll() {
    return Todo.query();
  }

  public getOneById(id: number) {
    return Todo
      .query()
      .findById(id)
  }

  public create(todo: Todo) {
    return Todo
      .query()
      .insert(todo);
  }

  public removeById(id: number) {
    return Todo
      .query()
      .deleteById(id);
  }

  public updateTodo(todo: Todo) {
    return todo
      .$query()
      .updateAndFetch(todo);
  }
}
