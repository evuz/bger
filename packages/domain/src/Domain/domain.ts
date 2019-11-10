import { Args, GetUseCase } from './types/domain';

export class Domain<T, U> {
  private useCases: T;
  private config: U;

  constructor({ useCases, config }: Args<T, U>) {
    this.useCases = useCases;
    this.config = config;
  }

  getConfig(): U {
    if (!this.config) {
      throw Error(`Config doesn't exist`);
    }
    return this.config;
  }

  get<K extends keyof T>({ useCase }: GetUseCase<T, K>): T[K] {
    if (!this.useCases[useCase]) {
      throw Error(`${useCase} doesn't exist in Domain`);
    }
    return this.useCases[useCase];
  }
}
