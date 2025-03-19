import type { Game } from './types'

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
      features: [
        'A new challenge league, Settlers league',
        'Tinctures reworked and re-introduced to the game',
        'New Retaliation skills',
        'Ascendancy changes',
        'Gladiator rework',
        'Raider replaced with Warden',
        'Balance changes',
        'Melee rework',
        'Removal of Ancestral totems',
        'Melee attack gems now scale significantly with levels',
        'Banner skill rework',
        'Rage rework, Aggravate Bleeding added',
        'Defences rework, equipment quality rework and new top-tier armour bases',
        'Magic find nerf, increased Item Quantity stat removed',
        'Endgame changes',
        'New endgame encounters based on Affliction, Sentinel, and Kalandra leagues',
        '6th map device slot',
        'Tier 17 map rebalance',
        'New & reworked Scarabs',
        'The Nameless Seer now allows Scrying of a map, replacing a map divination card drops with another maps',
        'New Mavens Chisels',
        'League mechanic changes',
        'New anoint-exclusive passive skills through Prismatic Oil',
        'New & reworked Ritual items, Affliction monsters and The King in the Mists encounter added to Ritual',
        'More improvements/mini-versions of mechanics in the campaign',
        'Reworked "Deal with the Bandits" quest rewards in Act 2',
        'Miscellaneous quality of life improvements',
        'Dump all items into stash tab hotkey (ctrl + right click)',
        'Console version performance improvements',
        'A new map series was introduced.'
      ],
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
      features: [
        'New Seasonal Mechanic: Witch Powers',
        'New Seasonal Items: Occult Gems',
        'New Season Journey, Season Blessings, and Battle Pass',
        'New World Event: Headhunts',
        'New Dungeon Type: Rootholds',
        'Tree of Whispers System Updates',
        'New Season Story and Questline',
        'New Seasonal Reputation: The Coven',
        'New Armory System',
        'New Legendary Aspects, Uniques, Tempering Manuals',
        'New Runes'
      ],
      patchNotes: 'https://news.blizzard.com/diablo4/season'
    },
    //nextSeason: {
    //  name: 'Season 8',
    //  startDate: 'TBD',
    //  shortDescription: 'Season 8 brings new endgame content, gear, and updates to Diablo 4, including new zone events and a borrowed power seasonal mechanic',
    //  features: [
    //    'New Lair Bosses: Urivar, Harbinger of Hatred, and Belial',
    //    'New and Updated Boss Mechanics',
    //    'New Seasonal Mechanic: Boss Powers',
    //    'New World Event: Apparition Incursions',
    //    'New Seasonal Items: TBD',
    //    'New Season Journey, Season Blessings, and Battle Pass',
    //    'System Update: Boss Lair Keys',
    //    'New Season Story and Questline',
    //    'New Seasonal Reputation: TBD',
    //    'New Legendary Aspects and Uniques'
    //  ],
    //  patchNotes: 'https://news.blizzard.com/diablo4/season'
    //},
    events: [
      {
        name: 'March of the Goblins',
        startDate: '2025-03-04',
        endDate: '2025-03-11',
        shortDescription: 'This March of the Goblins introduces six brand-new Goblin variants, who will remain after the increased Goblin activity has ended.'
      },
      {
        name: 'Season 8 PTR',
        startDate: '2025-03-11',
        endDate: '2025-03-18',
        shortDescription: 'Season 8 brings new endgame content, gear, and updates to Diablo 4, including new zone events and a borrowed power seasonal mechanic.'
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
      features: [
        'Pinnacle Boss',
        'Harbingers and the Forgotten Knight',
        'Random Nemesis Encounters',
        'Evade Mechanic',
        'Reworked Boss Defenses',
        'Item Faction Updates',
        'Monolith Progression ',
        'New Uniques'
      ],
      patchNotes: 'https://www.lastepoch.com/harbingers-of-ruin'
    },
    nextSeason: {
      name: 'Tombs of the Erased',
      startDate: '2025-04-14',
      shortDescription:
        'Explore forgotten graves, teeming with new threats and challenges. But be wary, Traveler - these mausoleums are ever-shifting labyrinths.',
      features: [
        'Tombs of the Erased',
        'New Faction: The Woven',
        'Monolith Expansion: Woven Echoes',
        'Crafting Improvements',
        'Mastery Respecialization',
        'Sentinel Rework',
        'New Marksman Skill: Heartseeker',
        'Boss and Loot Updates',
        'Quality of Life Improvements'
      ],
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
        name: 'Kut-Ku Gone Cuckoo',
        startDate: '2025-03-04',
        endDate: '2025-03-18',
        shortDescription:
          'Gather special materials to obtain the Mimiphyta α headgear!'
      },
      {
        name: 'Stalking Supper',
        startDate: '2025-03-04',
        endDate: '2025-03-11',
        shortDescription:
          'An event quest for gathering Kunafa Cheese that you can use as an additional ingredient when cooking on the BBQ Grill!'
      },
      {
        name: 'Tongue-Tied',
        startDate: '2025-03-11',
        endDate: '2025-03-18',
        shortDescription:
          'An event quest for gathering Hard Armor Spheres and Advanced Armor Spheres for upgrading your armor!'
      },
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
      }
    ]
  }
]
