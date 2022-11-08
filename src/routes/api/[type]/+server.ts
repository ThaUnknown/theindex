import type { RequestHandler } from './$types'

import { getCollections, getSections, getColumns, getItems } from '$lib/server/helpers/api.ts'

const dbmap = { sections: getSections, collections: getCollections, columns: getColumns, items: getItems }

export async function GET ({ params }): Promise<RequestHandler> {
  return new Response(JSON.stringify(await dbmap[params.type]?.()), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
