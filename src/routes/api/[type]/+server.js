import collections from '$lib/collections.json'
import columns from '$lib/columns.json'
import items from '$lib/items.json'
import sections from '$lib/sections.json'

const dbmap = { sections, collections, columns, items }

export async function GET ({ params }) {
  return new Response(JSON.stringify(dbmap[params.type]), {
    headers: {
      'content-type': 'application/json'
    }
  })
}
