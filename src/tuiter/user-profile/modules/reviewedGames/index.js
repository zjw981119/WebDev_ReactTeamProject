import {useProfile, useUserProfile} from "../../hooks";
import {useEffect, useState} from "react";
import {getReviewedGames} from "../../../services/review-service/reviews-service";
import ReviewsList from "../../../review";
import {useParams} from "react-router";

export const UserReviewedGames = () => {
  const {uid} = useParams();
  const {profile} = useUserProfile(uid);
  const [games, setGames] = useState([]);
  const {profile: currentUser} = useProfile();
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
