import { useState } from 'react'
import './App.css'

function App() {
  const [index, setIndex] = useState<number>(0)

  let list = [
    { categoria: `Categoria ${index}`, descripton: `Descrição ${index}` },    
  ]

  const handleAdiconar = () => {
    const calc = index + 1  
    list.push({  categoria: `Categoria ${calc}`, descripton: `Descrição ${calc}` })    
    setIndex(calc)

    return list
  }

  return (
    <>
      <button onClick={handleAdiconar}>Adicionar</button>
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
        </thead>        
        <tbody className='tbody'>
          {list.map(item => {
            return (
              <tr key={list.indexOf(item)}>
                <td>{item.categoria}</td>
                <td>{item.descripton}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
