import { getCollections, getSections } from '$lib/server/helpers/api.ts'
import type { Sections, Collections } from '$lib/types'
import type { LayoutServerLoad } from './$types'
import geo from 'geoip-lite'

export const load: LayoutServerLoad = async ({ request, getClientAddress, cookies }): { sections: Sections, collections: Collections, title?: string, ipInfo: any, auth?: String } => {
  const [collections, sections] = await Promise.all([getCollections(), getSections()])
  const address = getClientAddress()
  const ipInfo = geo.lookup(address)
  if (ipInfo) ipInfo.address = address
  return {
    title: null,
    ipInfo,
    collections,
    sections,
    auth: cookies.get('auth') || null
  }
}

export const trailingSlash = 'always'
