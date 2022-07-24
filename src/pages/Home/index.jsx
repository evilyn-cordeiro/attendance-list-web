import { Card } from '../../components';
import './style.css';

export default function HomeScreen() {
  return (
    <div className={'container'}>
      <div className={'inner-container'}>
        <h1 className={'title'}>LISTA DE PRESENÇA</h1>
        <input type={'text'} placeholder={'Digite o nome...'} />
        <button type={'button'}>Adicionar</button>
        <Card name={'Evilyn'} time={'17:28'} />
        <Card  name={'Maria'} time={'17:29'}/>
      </div>
    </div >
  );
}
