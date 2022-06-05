import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateClassUseCase } from '~modules/classes/useCases/createClass/CreateClass.useCase';

import { CreateClassInput } from '../inputs/CreateClass.input';
import { ClassInterface } from '../interfaces/ClassInterface';

@Resolver()
class ClassesResolver {
  constructor(private createClassUseCase: CreateClassUseCase) {}

  @Mutation(() => ClassInterface)
  async createClass(
    @Args('input') input: CreateClassInput,
  ): Promise<ClassInterface> {
    const classy = await this.createClassUseCase.execute(input);

    return classy;
  }
  @Query(() => [Class])
  async classes(): Promise<Class[]> {
    return [
      {
        id: '1',
        title: 'Class 1',
        description: 'Description 1',
        link: 'Link 1',
        minimum_level_id: '1',
        teacher_id: '1',
        created_at: new Date(),
        updated_at: null,
      },
      {
        id: '2',
        title: 'Class 2',
        description: 'Description 2',
        link: 'Link 2',
        minimum_level_id: '2',
        teacher_id: '2',
        created_at: new Date(),
        updated_at: null,
      },
    ];
  }
}

export { ClassesResolver };
