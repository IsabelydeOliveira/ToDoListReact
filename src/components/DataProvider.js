import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])
    const [datas, setDatas] = useState([])
    const [prioridade, setPrioridades] = useState([])



    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore)
    }, [])

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos])



    return (
        <DataContext.Provider value={[todos, setTodos, datas, setDatas, prioridade]}>
            {props.children}
        </DataContext.Provider>
    )
}
