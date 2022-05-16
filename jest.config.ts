import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  bail: true,
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/useCases/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  rootDir: './',
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '~modules/*': ['src/modules/*'],
      '~providers/*': ['src/shared/infra/providers/*'],
    },
    {
      prefix: '<rootDir>/',
    },
  ),
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  verbose: true,
};

export default config;
