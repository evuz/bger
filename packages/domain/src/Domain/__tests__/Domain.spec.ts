import { Domain } from '../domain';

describe('Domain', () => {
  let domain: Domain<{ useCase: string }, any>;
  beforeEach(() => {
    domain = new Domain({ useCases: { useCase: 'TestUseCase' }, config: { test: 'Config' } });
  });

  it('should create', () => {
    expect(domain).toBeTruthy();
  });

  it('should return useCase', () => {
    expect(domain.get({ useCase: 'useCase' })).toBe('TestUseCase');
  });

  it("should throw error if useCase doesn't exist", () => {
    function error() {
      return domain.get({ useCase: <any>'fail' });
    }
    expect(error).toThrowError();
  });

  it('should return Config', () => {
    expect(domain.getConfig()).toStrictEqual({ test: 'Config' });
  });

  it("should throw error if config doesn't exist", () => {
    domain = new Domain({ useCases: { useCase: 'TestUseCase' } });
    function error() {
      return domain.getConfig();
    }
    expect(error).toThrowError();
  });
});
