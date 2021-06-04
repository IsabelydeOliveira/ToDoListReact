import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);

    /* console.log(todos)*/

    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete


                if (todo.complete) {
                    todo.conclusion = getDate()
                    console.log(todo)
                } else {
                    todo.conclusion = ''
                }
            }
        })

        setTodos(newTodos)


    }


    const getDate = () => {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return dia + '/' + mes + '/' + ano;
    }



    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }
    return (
        <ul>
            {
                todos.map((todo, index) => (

                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))



            }


        </ul>

    )

}