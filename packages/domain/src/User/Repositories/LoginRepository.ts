export interface LoginWithUsername {
  username: string;
  password: string;
}

export interface LoginWithProvider {
  provider: 'google' | 'facebook';
}

export interface LoginRepository {
  loginWithUsername(user: LoginWithUsername);
  loginWithProvider(provider: LoginWithProvider);
}
