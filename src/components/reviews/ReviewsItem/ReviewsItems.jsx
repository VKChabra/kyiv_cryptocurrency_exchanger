const ReviewsItem = ({ data }) => {
  return (
    <div>
      <div>
        <p>{data.owner.name}</p>
        <p>{data.review}</p>
      </div>
    </div>
  );
};

export default ReviewsItem;
