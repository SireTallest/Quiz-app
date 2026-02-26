import { useState, useEffect } from 'react'
import { fetchCategories } from '../services/triviaApi'

export function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchCategories()
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load categories. Please check your connection.')
        setLoading(false)
      })
  }, [])

  return { categories, loading, error }
}