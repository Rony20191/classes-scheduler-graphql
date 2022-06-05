import { Inject, Injectable } from '@nestjs/common';

import { Class } from '~modules/classes/infra/typeorm/entities/Class';
import { IClassesRepository } from '~modules/classes/repositories/IClassesRepository';

@Injectable()
class FindAllClassesUseCase {
  constructor(
    @Inject('ClassesRepository')
    private readonly classesRepository: IClassesRepository,
  ) {}
  async execute(): Promise<Class[]> {
    const classes = await this.classesRepository.findAll();

    return classes;
  }
}
export { FindAllClassesUseCase };
