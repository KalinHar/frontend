import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'common/api-endpoints'
import { authQueryFnFactory } from 'common/rest'
import { BootcampersResponse } from 'gql/bootcamp'

export function useBootcampersList() {
  return useQuery<BootcampersResponse[]>(endpoints.bootcamp.BootcampersList.url)
}

export function useViewBootcamper(id: string) {
  return useQuery<BootcampersResponse>(endpoints.bootcamp.viewBootcamper(id).url)
}

export function useDeleteBootcamper(id: string) {
  return useQuery<BootcampersResponse>(endpoints.bootcamp.deleteBootcamper(id).url)
}
