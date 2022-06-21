import useSWR from 'swr'
import { getToken } from './userAuth'

export const USER_URL = id => id ? `${process.env.NEXT_PUBLIC_API_URL}/users/${id}` : null

const useUserScores = id => {
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('There was an error while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data)
  }

  const { data, error } = useSWR(USER_URL(id), fetcher)

  return { golfer: data, error }
}

export default useUserScores
