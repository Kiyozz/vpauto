export enum BookmarkType {
  Vimeo,
  Flickr,
}

export interface Bookmark {
  id: number
  url: string
  type: BookmarkType
  html: string
  uploadDate: Date
  title: string
  author: string
  duration?: number
  addedAt: Date
  width: number
  height: number
}
