import Review from '../../types/Review';

type ReviewItemProps = {
  item: Review;
};

function ReviewItem({ item }: ReviewItemProps): JSX.Element {

  const ratingPercent = `${item.rating / 0.05}%`;

  const itemDate = new Date(item.date);

  const monthName = itemDate.toLocaleString('en-EN', { month: 'long' });

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={item.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {item.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingPercent}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {item.comment}
        </p>
        <time className="reviews__time" dateTime={item.date.substring(0, 10)}>{monthName} {itemDate.getFullYear()}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
