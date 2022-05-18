import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LevelsRepositories } from '~modules/levels/infra/typeorm/repositories/LevelsRepositories';

import { ClassesResolver } from './infra/graphql/resolvers/Classes.resolver';
import { Class } from './infra/typeorm/entities/Class';
import { ClassesRepository } from './infra/typeorm/repositories/ClassesRepository';
import { CreateClassUseCase } from './useCases/createClass/CreateClass.useCase';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [
    ClassesResolver,
    CreateClassUseCase,
    {
      provide: 'ClassesRepository',
      inject: [ClassesRepository],
      useClass: ClassesRepository,
    },
    {
      provide: 'LevelsRepository',
      inject: [LevelsRepositories],
      useClass: LevelsRepositories,
    },
  ],
})
export class ClassesModule {}
