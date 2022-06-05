import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateClassUseCase } from '~modules/classes/useCases/createClass/CreateClass.useCase';
import { FindAllClassesUseCase } from '~modules/classes/useCases/FindAllClassesUseCase/FindAllClassesUseCase';

import { CreateClassInput } from '../inputs/CreateClass.input';
import { ClassInterface } from '../interfaces/ClassInterface';

@Resolver()
class ClassesResolver {
  constructor(
    private createClassUseCase: CreateClassUseCase,
    private findALlClassesUseCase: FindAllClassesUseCase,
  ) {}

  @Mutation(() => ClassInterface)
  async createClass(
    @Args('input') input: CreateClassInput,
  ): Promise<ClassInterface> {
    const classy = await this.createClassUseCase.execute(input);

    return classy;
  }
  @Query(() => [ClassInterface])
  async classes(): Promise<ClassInterface[]> {
    const classes = await this.findALlClassesUseCase.execute();

    return classes;
  }
}

export { ClassesResolver };
