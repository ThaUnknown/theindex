export interface Collection {
  _id: string,
  urlId: string,
  name: string,
  nsfw: boolean,
  description: string,
  columns: string[],
  items: string[],
  createdAt: string,
  lastModified: string,
  img: string
}
export interface Collections {
  [key: string]: Collection
}
export interface Column {
  _id: string,
  urlId: string,
  name: string,
  nsfw: boolean,
  description: string,
  type: string,
  values: string[],
  createdAt: string,
  lastModified: string
}
export interface Columns {
  [key: string]: Column
}
export interface Section {
  _id: string,
  urlId: string,
  name: string,
  nsfw: boolean,
  description: string,
  collections: string[],
  order?: number,
  createdAt: string,
  lastModified: string,
  img: string
}
export interface Sections {
  [key: string]: Section
}
export interface Item {
  _id: string,
  name: string,
  urls: string[],
  nsfw: boolean,
  description: string,
  blacklist: boolean,
  sponsor: boolean
  data: {
    [id: string]: boolean | string[],
  }
  createdAt: string,
  lastModified: string,
}
export interface Items {
  [id: string]: Item
}
