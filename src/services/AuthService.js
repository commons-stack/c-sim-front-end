import { Api } from './base/Api'

export const AuthService = {
  register: (
    data = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  ) => Api.post('accounts/register/email', data),
  login: (
    data = {
      email: '',
      password: '',
    },
  ) => Api.post('accounts/login/email', data),
  logout: () => Api.post('accounts/logout'),
  validateRequest: () => Api.post('accounts/validate_request'),
  verifyEmail: token => Api.get(`accounts/verify_email/${token}`),
}
