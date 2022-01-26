import { KeycloakInstance } from 'keycloak-js'
import { useKeycloak } from '@react-keycloak/ssr'
import { QueryClient, useQuery } from 'react-query'

import { endpoints } from 'common/api-endpoints'
import { authQueryFnFactory } from 'common/rest'

type Bootcamper = {
  id: string
  firstName: string
  lastName: string
}

export function useBootcampersList() {
  const { keycloak } = useKeycloak<KeycloakInstance>()
  return useQuery<Bootcamper[]>(
    endpoints.bootcamp.BootcampersList.url,
    authQueryFnFactory<Bootcamper[]>(keycloak?.token),
  )
}

export async function prefetchBootcampersList(client: QueryClient, token?: string) {
  await client.prefetchQuery<Bootcamper[]>(
    endpoints.bootcamp.BootcampersList.url,
    authQueryFnFactory<Bootcamper[]>(token),
  )
}
