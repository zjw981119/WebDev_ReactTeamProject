import {useProfile} from "../../../hooks";
import {useEffect, useState} from "react";
import {getReviewedGames} from "../../../services/review-service/reviews-service";
import ReviewsList from "../../../review";

export const TuitsReplies = () => {
  const {profile} = useProfile();
  const [games, setGames] = useState([]);
  const fetchGames = async () => {
    if (profile) {
      const games = await getReviewedGames(profile._id);
      setGames(games);
    }
  }
  useEffect(() => {
    fetchGames();
  }, [profile]);
  return (
    <div>
      <ReviewsList reviews={games} refreshReview={fetchGames}/>
    </div>
  )
}
