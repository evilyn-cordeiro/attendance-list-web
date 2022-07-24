import './style.css';

export default function Card(props) {
  return (
    <div className='card'>
      <strong className='card-strong'>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
