import { BookmarkType } from '../types/bookmark'

export function bookmarkTypeFromUrl(url: string): BookmarkType | false {
  if (/^https:\/\/vimeo\.com\/(\d+)\/?$/gi.test(url)) {
    return BookmarkType.Vimeo
  }

  if (/^https:\/\/www\.flickr\.com\/photos\/(\w+)\/(\d+)\/?$/gi.test(url)) {
    return BookmarkType.Flickr
  }

  return false
}
