import BookmarkForm from './bookmark-form'
import BookmarkList from './bookmark-list'
import BookmarksProvider from '../hooks/use-bookmarks'

function App() {
  return (
    <div className="container mx-auto p-6">
      <BookmarksProvider>
        <BookmarkForm />

        <div className="my-6">
          <BookmarkList />
        </div>
      </BookmarksProvider>
    </div>
  )
}

export default App
