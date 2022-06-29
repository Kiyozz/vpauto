import { useState } from 'react'
import { bookmarkTypeFromUrl } from '../utils/bookmark-type-from-url'
import { useBookmarks } from '../hooks/use-bookmarks'

function BookmarkForm() {
  const { addBookmark } = useBookmarks()
  const [disabled, setDisabled] = useState(false)
  const [url, setUrl] = useState('')
  const [validationError, setValidationError] = useState<string | undefined>(undefined)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (disabled) return

    setValidationError(undefined)

    const type = bookmarkTypeFromUrl(url)

    if (type === false) {
      setValidationError('Invalid URL')
      return
    }

    try {
      setDisabled(true)
      await addBookmark(url, type)
      setUrl('')
    } finally {
      setDisabled(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 text-center">
      <legend className="text-xl font-bold">Add a bookmark</legend>
      <input
        className="rounded border border-gray-500 p-2"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      {typeof validationError !== 'undefined' && <p className="text-red-500">{validationError}</p>}
      <button
        type="submit"
        className="rounded border bg-gray-700 px-3 py-1 text-white"
        disabled={disabled}
      >
        Add
      </button>
    </form>
  )
}

export default BookmarkForm
