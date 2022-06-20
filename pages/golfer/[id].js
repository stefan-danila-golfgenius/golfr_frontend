import Layout from '../../components/Layout'
import ScoreCard from '../../components/ScoreCard'
import { useRouter } from 'next/router'
import useUserScores, { USER_URL } from '../../lib/useUserScores'

const GolferProfile = () => {
  const router = useRouter()
  const { id } = router.query
  const { golfer, error } = useUserScores(id)
  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <div>User: {golfer?.name}</div>
            {golfer?.scores &&
              golfer.scores.map(score => (
                <ScoreCard
                  key={score.id}
                  id={score.id}
                  totalScore={score.total_score}
                  playedAt={score.played_at}
                  userId={score.user_id}
                  userName={score.user_name}
                  mutateURL={USER_URL}
                />
              ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default GolferProfile
