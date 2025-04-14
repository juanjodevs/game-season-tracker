export interface Event {
  name: string
  startDate: string
  endDate?: string
  shortDescription: string
  patchNotes?: string
  type: 'season' | 'event'
}

export interface Game {
  id: string
  name: string
  events?: Event[]
  officialSite: string
}
