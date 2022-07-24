import './style.css';

export default function HomeScreen() {
  return (
    <div className='container'>
      <h1> Lista de presença</h1>
      <input type={'text'} placeholder={'Digite o nome...'} />
      <button type={'button'}>Adicionar</button>
    </div >
  );
}
