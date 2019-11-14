import { bearerAuth } from '../../Utils/bearerAuth';

describe('BearerAuth', () => {
  it('should create correct authorization header', () => {
    const token = 'MyToken';
    const header = bearerAuth(token);
    expect(header).toStrictEqual({ authorization: `Bearer ${token}` });
  });

  it("should throw error if doesn't have token", () => {
    function error() {
      return bearerAuth(null);
    }
    expect(error).toThrowError();
  });
});
