import { StarFill, StarHalf, Star } from "react-bootstrap-icons";


const RatingView = ({ rating }) => {
  if (rating === undefined) {
    throw new Error("rating prop is required");
  }

  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="rating-container">
      {[...Array(fullStars)].map((_, index) => (
        <StarFill key={index} className="star-icon filled" />
      ))}
      {hasHalfStar && <StarHalf className="star-icon half" />}
      {[...Array(maxStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <Star key={index} className="star-icon empty" />
      ))}
    </div>
  );
};

export default RatingView;
