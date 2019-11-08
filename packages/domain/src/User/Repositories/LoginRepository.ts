export interface LoginWithMail {
  email: string;
  password: string;
}

export interface LoginWithProvider {
  provider: 'google' | 'facebook';
}

export interface LoginRepository {
  loginWithMail(user: LoginWithMail);
  loginWithProvider(provider: LoginWithProvider);
}
