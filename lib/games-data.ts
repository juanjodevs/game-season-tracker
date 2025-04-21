import type { Game } from './types'

export const news: string[] = [
]

export const games: Game[] = [
  {
    id: 'poe',
    name: 'Path of Exile',
    officialSite: 'https://www.pathofexile.com',
    events: [
      {
        name: 'Settlers of Kalguur',
        type: 'season',
        startDate: '2024-07-26',
        shortDescription:
          'Settlers of Kalguur involves your exile assisting the Kalguurans in the development and funding of the settlement of Kingsmarch.',
        patchNotes: 'https://www.pathofexile.com/settlers'
      },
      {
        name: 'Legacy of Phrecia',
        type: 'event',
        startDate: '2025-02-20',
        endDate: '2025-04-23',
        shortDescription:
          'In this event, the original 19 ascendancy classes are replaced with more unusual ascendancy classes that are "whacky ideas that never quite made it off the brainstorm board", and the Atlas passive skill tree is replaced with the Idol system.'
      }
    ]
  },
  {
    id: 'poe2',
    name: 'Path of Exile 2',
    officialSite: 'https://pathofexile2.com/early-access',
    events: [
      {
        name: 'Dawn of the hunt (0.2, Early Access)',
        type: 'season',
        startDate: '2025-04-04',
        shortDescription:
          'Path of Exile 2 is a next generation Action RPG from Grinding Gear Games, featuring co-op for up to six players. Set years after the original Path of Exile, you will return to the dark world of Wraeclast and seek to end the corruption that is spreading.'
      }
    ]
  },
  {
    id: 'diablo4',
    name: 'Diablo IV',
    officialSite: 'https://diablo4.blizzard.com/',
    events: [
      {
        name: 'Season 7: Season of Witchcraft',
        type: 'season',
        startDate: '2024-01-21',
        endDate: '2025-04-29',
        shortDescription:
          'Wield Witchcraft Powers. Unravel a Mystery. Hunt the Headrotten.',
        patchNotes: 'https://news.blizzard.com/diablo4/season'
      },
      {
        name: 'Season 8: Belial\'s Return',
        type: 'season',
        startDate: '2024-04-29',
        shortDescription:
          'Belial has returned, or has he? Only the Lord of Lies knows for certain, but that is the truth you must uncover in Season 8: Belial’s Return, wanderer.',
        patchNotes: 'https://news.blizzard.com/diablo4/season'
      }
    ]
  },
  {
    id: 'last_epoch',
    name: 'Last Epoch',
    officialSite: 'https://lastepoch.com/',
    events: [
      {
        name: 'Tombs of the Erased (Season2)',
        type: 'season',
        startDate: '2025-04-17',
        shortDescription:
          'Explore forgotten graves, teeming with new threats and challenges. But be wary, Traveler - these mausoleums are ever-shifting labyrinths.',
        patchNotes: 'https://lastepoch.com/tombs-of-erased'
      }
    ]
  }
]
