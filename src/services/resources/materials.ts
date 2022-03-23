import api from "../api"

export const listMaterials = (id: number) => {
  return api.get(`/api/v1/disciplines/materials/${id}`)
}

export const listAllMaterials = (id: number) => {
  return api.get(`/api/v1/disciplines/materials`)
}

export const findMaterialByName = (id: number, materialName: string) => {
  return api.get(`/api/v1/disciplines/${id}/materials/${materialName}`)
}