import api from "../api"

export const listDisciplines = () => {
  return api.get('/api/v1/disciplines')
}

export const findDisciplineByName = (disciplineName: string) => {
  return api.get(`/api/v1/disciplines/${disciplineName}`)
}

