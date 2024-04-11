import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) { }
  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto)
    return await this.todoRepository.save(todo)
  }

  async findAll() {

    return await this.todoRepository.find();
  }

  async findOne(id: number) {
    return await this.todoRepository.find({where : {id : id}});
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todoToUpdate = await this.todoRepository.findOne({where : {id : id}});
    todoToUpdate.title = updateTodoDto.title

    return await this.todoRepository.save(todoToUpdate)
  }

  async remove(id: number) {
    const todoToUpdate = await this.todoRepository.findOne({where : {id : id}});

    return await this.todoRepository.remove(todoToUpdate)
  }
}
