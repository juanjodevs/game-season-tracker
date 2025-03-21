export interface Event {
  name: string
  startDate: string
  endDate?: string
  shortDescription: string
  patchNotes?: string
}

export interface Game {
  id: string
  name: string
  nextSeason?: Event
  currentSeason: Event
  events?: Event[]
  officialSite: string
}
