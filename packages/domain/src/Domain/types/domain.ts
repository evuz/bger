export interface Args<T, U> {
  useCases: T;
  config?: U;
}

export interface GetUseCase<T, K extends keyof T> {
  useCase: K;
}
