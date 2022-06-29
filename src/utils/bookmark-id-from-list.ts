import { Bookmark } from '../types/bookmark'

export function bookmarkIdFromList(list: Bookmark[]): number {
  return (
    list.reduce((acc, curr) => {
      if (curr.id > acc) return curr.id

      return acc
    }, 0) + 1
  )
}
