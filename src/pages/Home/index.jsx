import { useEffect, useState } from 'react';
import { Card } from '../../components';
// style
import './style.css';

const urlGitHub = ('https://api.github.com/users/evilyn-araujo');

export default function HomeScreen() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState([]);

  // controla o valor do input
  function handleInputValue(value) {
    setStudentName(value)
  }

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }

    // quando não tiver "estudante informado, não adiciona a lista"
    if (!studentName) {
      return students
    }
    setStudents(prevState => [...prevState, newStudent]);

  }

  function handleRemoveStudent(value) {
    students.keys(value);
  }

  useEffect(() => {
    fetch(urlGitHub)
      .then((data) => data.json())
      .then((userData) => {
        setUser({
          name: userData.name,
          avatar: userData.avatar_url,
        })
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <div className={'container'}>
      <div className={'inner-container'}>
        <header>
          <h1 className={'title'}>LISTA DE PRESENÇA</h1>
          <div>
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="Foto de perfil" />
          </div>
        </header>
        <input
          type={'text'}
          placeholder={'Digite o nome...'}
          onChange={(value) => handleInputValue(value.target.value)}
        />
        <button
          type={'button'}
          onClick={handleAddStudent}
        >
          Adicionar
        </button>

        {
          students.map((item) =>
            <Card
              key={item.time}
              name={item.name}
              time={item.time}
              onClick={() => handleRemoveStudent(item.time)}
            />
          )
        }
      </div>
    </div>
  );
}
