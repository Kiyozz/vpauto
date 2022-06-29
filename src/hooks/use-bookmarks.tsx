import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react'
import { Bookmark, BookmarkType } from '../types/bookmark'
import { bookmarkIdFromList } from '../utils/bookmark-id-from-list'
import { getUrlInformation } from '../utils/get-url-information'

interface Context {
  bookmarks: Bookmark[]
  addBookmark: (url: string, type: BookmarkType) => Promise<void>
  removeBookmark: (id: string) => void
}

export const BookmarksContext = createContext<Context>({} as Context)

export const useBookmarks = () => useContext(BookmarksContext)

function BookmarksProvider({ children }: PropsWithChildren) {
  // https://www.flickr.com/photos/feuilllu/45771361701/
  // https://vimeo.com/565486457
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  const addBookmark = useCallback(async (url: string, type: BookmarkType) => {
    const information = await getUrlInformation(url, type)

    setBookmarks((list) => [...list, { id: bookmarkIdFromList(list), ...information }])
  }, [])

  const removeBookmark = useCallback((id: string) => {}, [])

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}

export default BookmarksProvider
