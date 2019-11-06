export interface AuthProviderAdapter {
  login(provider: string): Promise<any>;
}
