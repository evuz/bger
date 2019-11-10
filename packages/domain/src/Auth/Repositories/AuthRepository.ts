export interface LoginWithMail {
  email: string;
  password: string;
}

export interface LoginWithProvider {
  provider: 'google' | 'facebook';
}

export interface AuthRepository {
  loginWithMail(user: LoginWithMail): Promise<any>;
  loginWithProvider(provider: LoginWithProvider): Promise<any>;
}
