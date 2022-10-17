import collections from '$lib/collections.json'
import columns from '$lib/columns.json'
import items from '$lib/items.json'
import sections from '$lib/sections.json'
import type { Sections, Section, Collections, Collection, Columns, Column, Items, Item } from '$lib/types.d.ts'

function filterKeys (obj, keys) {
  const result = {}

  for (const key of keys) {
    result[key] = obj[key]
  }

  return result
};

const databaseURL = 'http://localhost:8080/'

export async function getCollections (): Promise<Collections> {
  // const res = await fetch(databaseURL + 'collections')
  // return await res.json()
  return collections
}

export async function getCollection (type: string): Promise<Collection> {
  return collections[type]
}

export async function getItems (ids: string[]): Promise<Items> {
  return ids?.length ? filterKeys(items, ids) : items
}

export async function getItem (id: string): Promise<Item> {
  return items[id]
}

export async function getSections (): Promise<Sections> {
  return sections
}

export async function getSection (id: string): Promise<Section> {
  return sections[id]
}

export async function getColumns (): Promise<Columns> {
  return columns
}

export async function getColumn (id: string): Promise<Column> {
  return columns[id]
}
