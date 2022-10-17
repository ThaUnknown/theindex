import { getCollection } from '$lib/helpers/api.ts'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params }) => {
  const section = await getCollection(params.section)
  return {
    data: section,
    section: params.section
  }
}
