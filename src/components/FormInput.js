import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');


    const [dataName, setDataName] = useState('');





    const [dataPriority, setDataPriority] = useState('1');

    const list = [
        { id: 1, name: 'Alta' },
        { id: 2, name: 'Média' },
        { id: 3, name: 'Baixa' },
    ];




    const addTodo = e => {
        e.preventDefault();

        setTodos([...todos, { name: todoName, date: dataName, priority: dataPriority, conclusion: '', complete: false }])
        setTodoName('');

    }





    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input
                type="text" name="todos" id="todos"
                required placeholder="Liste suas tarefas" value={todoName}
                onChange={e => setTodoName(e.target.value.toLowerCase())}
            />


            <input
                type="date" onChange={e => setDataName(e.target.value)}
                value={dataName} name="datas" id="datas"
                required min="2021-06-01" max="2022-12-31"
            />



            <select value={dataPriority} onChange={e => setDataPriority(e.target.value)}>
                {list.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>


            <button type="submit">OK</button>

        </form>
    )


}
