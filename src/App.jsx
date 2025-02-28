import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Container, Showlist, Input, Button, ListItem, Trash, Check } from './styled.js'




function App() {

  const [list, setList] = useState([]);
  const [task, setTask] = useState('')

  function TypedTheMessage(event) {

    setTask(event.target.value)

  }

  function ButtonClicked() {
    if (task) { setList([...list, { id: uuidv4(), task, finished: false }]); }

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
          {
            list.length > 0 ? (

              list.map(item => (

                <ListItem isFinish={item.finished} key={item.id}>
                  <Check onClick={() => finished(item.id)} />
                  <li >{item.task}</li>
                  <Trash onClick={() => deleteItem(item.id)} />
                </ListItem>

              ))
            ) : (
              <h3>Não há itens na lista</h3>
            )
          }
        </ul>

      </Showlist>
    </Container >
  )
}

export default App