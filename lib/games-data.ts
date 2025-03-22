import type { Game } from './types'

export const news: string[] = [
  'Last Epoch Season 2 delayed to 2025-04-14',
  'Expected date for Diablo 4 Season 8: Season of the Hunt is 2025-04-29, but not yet confirmed'
]

export const games: Game[] = [
  {
    id: 'poe',
    name: 'Path of Exile',
    officialSite: 'https://www.pathofexile.com',
    currentSeason: {
      name: 'Settlers of Kalguur',
      startDate: '2024-07-26',
      shortDescription:
        'Settlers of Kalguur involves your exile assisting the Kalguurans in the development and funding of the settlement of Kingsmarch.',
      patchNotes: 'https://www.pathofexile.com/settlers'
    },
    events: [
      {
        name: 'Legacy of Phrecia',
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
    currentSeason: {
      name: '0.1 (Early Access)',
      startDate: '2024-12-06',
      endDate: '2025-04-04',
      shortDescription:
        'Path of Exile 2 is a next generation Action RPG from Grinding Gear Games, featuring co-op for up to six players. Set years after the original Path of Exile, you will return to the dark world of Wraeclast and seek to end the corruption that is spreading.'
    },
    nextSeason: {
      name: '0.2 (Early Access)',
      startDate: '2025-04-04',
      shortDescription:
        'Path of Exile 2 is a next generation Action RPG from Grinding Gear Games, featuring co-op for up to six players. Set years after the original Path of Exile, you will return to the dark world of Wraeclast and seek to end the corruption that is spreading.'
    },
    events: [
      {
        name: 'Race Event',
        startDate: '2024-03-02',
        endDate: '2025-03-02',
        shortDescription:
          'Series of race Events leading up to Patch 0.2.0'
      },
      {
        name: 'Race Event',
        startDate: '2024-03-09',
        endDate: '2025-03-09',
        shortDescription:
          'Series of race Events leading up to Patch 0.2.0'
      },
      {
        name: 'Race Event',
        startDate: '2025-03-16',
        endDate: '2025-03-16',
        shortDescription:
          'Series of race Events leading up to Patch 0.2.0'
      }
    ]
  },
  {
    id: 'diablo4',
    name: 'Diablo IV',
    officialSite: 'https://diablo4.blizzard.com/',
    currentSeason: {
      name: 'Season 7: Season of Witchcraft',
      startDate: '2024-01-21',
      endDate: '2025-04-29',
      shortDescription:
        'Wield Witchcraft Powers. Unravel a Mystery. Hunt the Headrotten.',
      patchNotes: 'https://news.blizzard.com/diablo4/season'
    },
    events: [
      {
        name: 'Mother\'s Blessings',
        startDate: '2025-03-18',
        endDate: '2025-03-25',
        shortDescription: 'Gold and experience at increased rates and claim bonus Gifts of the Tree caches.'
      }
    ]
  },
  {
    id: 'last_epoch',
    name: 'Last Epoch',
    officialSite: 'https://lastepoch.com/',
    currentSeason: {
      name: 'Harbingers of Ruin',
      startDate: '2024-07-09',
      shortDescription:
        'Harbingers have slain warriors across Eterra, cursing their souls to linger.',
      patchNotes: 'https://www.lastepoch.com/harbingers-of-ruin'
    },
    nextSeason: {
      name: 'Tombs of the Erased',
      startDate: '2025-04-14',
      shortDescription:
        'Explore forgotten graves, teeming with new threats and challenges. But be wary, Traveler - these mausoleums are ever-shifting labyrinths.',
      patchNotes: 'https://lastepoch.com/tombs-of-erased'
    }
  },
  {
    id: 'monster_hunter_wilds',
    name: 'Monster Hunter Wilds',
    officialSite: 'https://www.monsterhunter.com/wilds',
    currentSeason: {
      name: 'Base Game',
      startDate: '2025-02-28',
      shortDescription:
        'A wild and unrelenting new frontier. Dynamic, ever-changing environments. A story of monsters and humans in a world with two faces.'
    },
    events: [
      {
        name: 'Ballet in the Rain',
        startDate: '2025-03-18',
        endDate: '2025-03-25',
        shortDescription:
          'An event quest for gathering Glowing Orb - Swords to use as decorations for customizing your weapon skills!'
      },
      {
        name: 'Sand-Scarred Soul',
        startDate: '2025-03-18',
        endDate: '2025-03-25',
        shortDescription:
          'An event quest for gathering Glowing Orb - Armors to use as decorations for customizing your armor skills!'
      },
      {
        name: 'Like a Fire Hidden by Sand',
        startDate: '2025-03-18',
        endDate: '2025-04-01',
        shortDescription:
          'Gather special material to obtain the Expedition Headgear α, a piece of equipment based on the emblem of the expedition!'
      }, {
        name: 'Congalala Cravings',
        startDate: '2025-03-25',
        endDate: '2025-04-01',
        shortDescription:
          'Gather special material to obtain the Expedition Headgear α, a piece of equipment based on the emblem of the expedition!'
      }
    ]
  }
]
