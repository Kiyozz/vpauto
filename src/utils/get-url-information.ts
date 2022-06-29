/**
 * Get information about the url from noembed.com
 * @param url
 */
import { Bookmark, BookmarkType } from '../types/bookmark'

export async function getUrlInformation(
  url: string,
  type: BookmarkType,
): Promise<Omit<Bookmark, 'id'>> {
  const response = await fetch(`https://noembed.com/embed?url=${url}`)
  const json = await response.json()

  if (type === BookmarkType.Vimeo) {
    return {
      url,
      type,
      html: json.html,
      uploadDate: new Date(json.upload_date),
      title: json.title,
      author: json.author_name,
      duration: json.duration,
      addedAt: new Date(),
      width: json.width,
      height: json.height,
    }
  }

  return {
    url,
    type,
    html: json.html,
    uploadDate: new Date(),
    title: json.title,
    author: json.author_name,
    addedAt: new Date(),
    width: json.width,
    height: json.height,
  }
}
