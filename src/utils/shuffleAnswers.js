export function shuffleAnswers(correct, incorrect) {
  const all = [...incorrect, correct]
  return all.sort(() => Math.random() - 0.5)
}