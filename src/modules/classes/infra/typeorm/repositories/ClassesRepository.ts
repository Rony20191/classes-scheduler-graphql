import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { IClassesRepository } from '~modules/classes/repositories/IClassesRepository';

import { CreateClassInput } from '../../graphql/inputs/CreateClass.input';
import { Class } from '../entities/Class';

class ClassesRepository implements IClassesRepository {
  constructor(
    @InjectRepository(Class)
    private repository: Repository<Class>,
  ) {}

  async create(data: CreateClassInput): Promise<Class> {
    const classyToCreate = this.repository.create(data);

    const classy = this.repository.save(classyToCreate);

    return classy;
  }

  async existsById(id: string): Promise<boolean> {
    const [{ exists }] = await this.repository.query(
      'SELECT EXISTS(SELECT 1 FROM classes WHERE classes.id = $1)',
      [id],
    );

    return exists;
  }
}

export { ClassesRepository };
