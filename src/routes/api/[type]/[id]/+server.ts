import type { RequestHandler } from './$types'
import { getCollection, getColumn, getItem, getSection } from '$lib/server/helpers/api.ts'

const dbmap = { sections: getSection, collections: getCollection, columns: getColumn, items: getItem }

export async function GET ({ params }): Promise<RequestHandler> {
  return new Response(JSON.stringify(await dbmap[params.type]?.(params.id)), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
