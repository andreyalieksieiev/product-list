export const RESET_STORE = 'auth/RESET_STORE';

export type AuthState = {
  email: string,
  password: string,
  token: string | null,
};