import { Api } from './core/Api'

export const ExampleService = {
  get: id => Api.get(`resource/${id}`),
  getAll: () => Api.get('resource'),
  create: data => Api.post('resource', data),
  update: (id, data) => Api.put(`resource/${id}`, data),
  delete: id => Api.delete(`resource/${id}`),
}
