export const calculateTotalRating = data => {
  const ratings = [];
  data.ratings.forEach(rate => {
    ratings.push(rate.rating);
  });
  if (ratings.length > 0) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const ratingsValue = ratings.reduce(reducer);
    const maxRatings = ratings.length * 5;
    const ratingsPercentage = (ratingsValue / maxRatings) * 100;
    const averageRating = Math.round((ratingsValue / maxRatings) * 5 * 10) / 10;
    const widthPercentage = `${ratingsPercentage}%`;
    return { widthPercentage, averageRating };
  }
};

export const calculateEachReview = data => {
  const { rating } = data;
  const ratingsPercentage = (rating / 5) * 100;
  return `${ratingsPercentage}%`;
};
