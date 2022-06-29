import { useBookmarks } from '../hooks/use-bookmarks'
import { Bookmark, BookmarkType } from '../types/bookmark'
import { durationToString } from '../utils/duration-to-string'
import { dateAgo } from '../utils/date-ago'
import { dateFormatted } from '../utils/date-formatted'

function BookmarkItem({ bookmark }: { bookmark: Bookmark }) {
  return (
    <article className="flex flex-col items-center rounded border p-6">
      <div className="grow">
        <div className="mb-3 text-center text-sm">Bookmarked: {dateAgo(bookmark.addedAt)}</div>
        <div className="flex min-h-[25rem] items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: bookmark.html }} />
        </div>
        <div>
          <span className="text-xl">{bookmark.title}</span>
          {bookmark.type === BookmarkType.Flickr && (
            <div className="text-sm italic">
              {bookmark.width}x{bookmark.height}
            </div>
          )}
        </div>
        {typeof bookmark.duration !== 'undefined' && (
          <div className="text-sm italic">{durationToString(bookmark.duration)}</div>
        )}
        <div className="mt-4">By {bookmark.author}</div>
        <div className="text-sm">{dateFormatted(bookmark.uploadDate)}</div>
      </div>
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener nofollow"
        className="mt-4 rounded border px-2 py-1 text-gray-600"
      >
        View
      </a>
    </article>
  )
}

function BookmarkList() {
  const { bookmarks } = useBookmarks()

  return (
    <>
      <h1 className="text-2xl">Bookmarks list</h1>

      <div className="grid grid-cols-2 gap-x-4 p-6">
        {bookmarks.map((bookmark) => (
          <BookmarkItem key={bookmark.id} bookmark={bookmark} />
        ))}
      </div>
    </>
  )
}

export default BookmarkList
