export const houseCleaner = (data) => {
  const cleanData = data.map(house => {
    return {
      name: house.name,
      founded: house.founded || 'unknown',
      seats: house.seats,
      titles: house.titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: house.ancestralWeapons,
      words: house.words || 'none'
    }
  })
  return cleanData
}