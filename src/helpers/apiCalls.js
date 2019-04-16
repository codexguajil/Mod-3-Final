export const fetchAllCards = async () => {
  const url = 'http://localhost:3001/api/v1/houses'
  try {
    const response = await fetch(url)
    const cards = response.json()
    return cards;
  }catch(error) {
    return error.message
  }
}