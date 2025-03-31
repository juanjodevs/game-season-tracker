export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export function getDaysRemaining(dateString: string): number {
  const today = new Date()
  const targetDate = new Date(dateString)

  today.setHours(0, 0, 0, 0)

  const differenceInTime = targetDate.getTime() - today.getTime()
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24))

  return differenceInDays - 1
}
