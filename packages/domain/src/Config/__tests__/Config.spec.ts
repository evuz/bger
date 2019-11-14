import { Config } from '../Config';

describe('Config', () => {
  let config: Config<any>;

  beforeEach(() => {
    config = new Config({
      fetcher: <any>'My database',
    });
  });

  it('should create', () => {
    expect(config).toBeTruthy();
  });

  it('should return config if exist', () => {
    expect(config.get('fetcher')).toBeTruthy();
  });

  it("should throw error if config doesn't exit", () => {
    function error() {
      return config.get(<any>'database');
    }
    expect(error).toThrowError();
  });
});
