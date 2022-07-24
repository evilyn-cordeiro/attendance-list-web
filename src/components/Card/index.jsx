import './style.css';

export default function Card({
  id,
  name,
  time,
}) {
  return (
    <div className='card' id={id} >
      <strong className='card-strong'>{name}</strong>
      <small>{time}</small>
    </div>
  );
}
