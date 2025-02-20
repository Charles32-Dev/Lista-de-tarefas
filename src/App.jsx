import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Container, Showlist, Input, Button, ListItem } from './styled.js'

import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";





function App() {

  const [list, setList] = useState([{ id: uuidv4(), task: '', finished: true }]);
  const [task, setTask] = useState('')

  function TypedTheMessage(event) {

    setTask(event.target.value)

  }

  function ButtonClicked() {
    setList([...list, { id: uuidv4(), task, finished: false }]);
  }

  function finished(id) {

    const NewList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(NewList)

  }

  function deleteItem(id) {
    const NewList = list.filter(item => item.id !== id)

    setList(NewList)
  }

  return (

    <Container>
      <Showlist>
        <Input onChange={TypedTheMessage} placeholder="Digite sua tarefa" type="text" />
        <Button onClick={ButtonClicked}>Adicionar</Button>


        <ul>
          {list.map(item => (

            <ListItem isFinish={item.finished} key={item.id}>
              <FcCheckmark onClick={() => finished(item.id)} />
              <li >{item.task}</li>
              <FcEmptyTrash onClick={() => deleteItem(item.id)} />
            </ListItem>

          ))}

        </ul>

      </Showlist>
    </Container >
  )
}

export default App
