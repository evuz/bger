export function bearerAuth(token: string) {
  if(!token) {
    throw Error('BearerAuth need a token');
  }

  return { authorization: `Bearer ${token}` };
}
