import { useState } from 'react';
import { Card } from '../../components';
// style
import './style.css';

export default function HomeScreen() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className={'container'}>
      <div className={'inner-container'}>
        <h1 className={'title'}>LISTA DE PRESENÇA</h1>
        <input
          type={'text'}
          placeholder={'Digite o nome...'}
          onChange={(value) => setStudentName(value.target.value)}
        />
        <button
          type={'button'}
          onClick={handleAddStudent}
        >
          Adicionar
        </button>

        {
          students.map((item, key) =>
            <Card
              id={key.time}
              name={item.name}
              time={item.time}
            />
          )
        }
      </div>
    </div >
  );
}
