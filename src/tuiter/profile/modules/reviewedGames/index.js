import {useEffect, useState} from "react";
import {getReviewedGames} from "../../../services/review-service/reviews-service";
import ReviewsList from "../../../review";
import {useParams} from "react-router";

export const UserReviewedGames = () => {
  const {uid} = useParams();
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    if (uid) {
      const games = await getReviewedGames(uid);
      setGames(games);
    }
  }
  useEffect(() => {
    fetchGames();
  }, [uid]);
  return (
    <div>
      <ReviewsList reviews={games} refreshReview={fetchGames}/>
    </div>
  )
}
