import Layout from '../components/Layout'
import ScorePostWidget from '../components/ScorePostWidget'
import ScoreCard from '../components/ScoreCard'
import useScores, { FEED_URL } from '../lib/useScores'

const Home = () => {
  const { scores, error } = useScores()

  return (
    <Layout>
      <>
        {error ? (
          error
        ) : (
          <>
            <ScorePostWidget />
            {scores && scores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
                mutateURL={FEED_URL}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}

export default Home
