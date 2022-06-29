const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function dateFormatted(date: Date) {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${day} ${months[month]} ${year}`
}
