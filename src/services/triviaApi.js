// const BASE_URL = 'https://opentdb.com'

// export async function fetchCategories() {
//   const response = await fetch(`${BASE_URL}/api_category.php`)
//   const data = await response.json()
//   return data.trivia_categories
// }

// export async function fetchQuestions({ amount, category, difficulty }) {
//   const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
//   const response = await fetch(url)
//   const data = await response.json()

//   if (data.response_code !== 0) {
//     throw new Error('No questions available for this selection.')
//   }

//   return data.results
// }

const BASE_URL = 'https://opentdb.com'

// Get or reuse a session token
async function getSessionToken() {
  const stored = sessionStorage.getItem('otdb_token')
  if (stored) return stored

  const response = await fetch(`${BASE_URL}/api_token.php?command=request`)
  const data = await response.json()
  sessionStorage.setItem('otdb_token', data.token)
  return data.token
}

export async function fetchCategories() {
  const response = await fetch(`${BASE_URL}/api_category.php`)
  const data = await response.json()
  return data.trivia_categories
}

export async function fetchQuestions({ amount, category, difficulty }) {
  const token = await getSessionToken()
  const url = `${BASE_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`
  const response = await fetch(url)
  const data = await response.json()

  // Token exhausted, reset it and try once more
  if (data.response_code === 4) {
    await fetch(`${BASE_URL}/api_token.php?command=reset&token=${token}`)
    sessionStorage.removeItem('otdb_token')
    return fetchQuestions({ amount, category, difficulty })
  }

  if (data.response_code !== 0) {
    throw new Error('No questions available for this selection.')
  }

  return data.results
}