import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider'


export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
    const [todos, setTodos] = useContext(DataContext);


    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)



    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos)
    }

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleSalvar = id => {
        setOnEdit(false)
        if (editValue) {
            handleEditTodos(editValue, id)
        } else {
            setEditValue(todo.name)
        }
    }



    if (onEdit) {
        return (
            <li>
                <input type="text" id="editValue" value={editValue} name="editValue"
                    onChange={e => setEditValue(e.target.value.toLocaleLowerCase())} />


                <button className="salvar" onClick={() => handleSalvar(id)}>salvar</button>
            </li>
        )
    } else {
        return (
            <li>
                <label htmlFor={id} className={todo.complete ? "active" : ""}>

                    <input type="checkbox" id={id} checked={todo.complete}
                        onChange={() => checkComplete(id)} />

                    {todo.name}
                    <br />


                    {todo.date}
                    <br />


                    {(() => {
                        switch (todo.priority) {
                            case "1": return "Prioridade Alta";
                            case "2": return "Prioridade Média";
                            case "3": return "Prioridade Baixa";
                            default: return "Sem categoria";
                        }
                    })()}


                </label>



                Data de Conclusão:
                <br />
                {todo?.conclusion}



                <button className="editar" disabled={todo.complete} onClick={handleOnEdit}>Editar</button>
                <button className="delet" onClick={deleteTodo}  >Deletar</button>
            </li>
        )

    }

}
