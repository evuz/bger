export interface Args<T> {
  useCases: T;
  config?: any;
}

export interface SetConfig {
  key: string;
  config: any;
}

export interface GetConfig {
  key: string;
}

export interface GetUseCase<T, K extends keyof T> {
  useCase: K;
}
