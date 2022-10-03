import './style.css';

export default function Card({
  name,
  time,
  onClick,
}) {

  function handleRemove(value) {
    if (onClick) onClick(value)
  }
  return (
    <div className='card'>
      <strong className='card-strong'>{name}</strong>
      <small>{time}</small>
      <button
        className='buttonRemove'
        onClick={handleRemove}
      >
        Remover
      </button>
    </div>
  );
}
