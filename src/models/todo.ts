import { ParkaModel, TableName } from 'parka';

@TableName('Todo')
export class Todo extends ParkaModel {

  public static jsonSchema = {
    type: 'object',
    required: ['title', 'description'],
    properties: {
      id: { type: 'integer' },
      title: { type: 'string', maxLength: 30 },
      description: { type: 'string', maxLength: 500 },
      done: { type: 'integer', default: 0 }
    }
  };

  public id: number;
  public description: string;
  public done: number;
}
