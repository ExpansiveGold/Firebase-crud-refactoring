//importar as configurações do firebase
import { app, database } from '../services/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

//definir a coleção
const contato = collection(database, 'contato')

export default function Create() {

    //read
    const [lista, setLista] = useState([])

    const read = () => {
    getDocs(query(contato, orderBy('nome')))
        .then((data) => {
            setLista(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
        })
    }

    //mostrar os documentos ao atualizar a pagina
    useEffect(() => {
        read()
    }, [])

    return (
        <>
          <h3 className="text-center">Exibir</h3>
            {lista.map((lista) => {
              return (
                <>
                <div className="card">
                  <div className="card-header bg-dark text-light">
                      Id: {lista.id}
                  </div>
                  <div className="card-body">
                      <p className="card-title text-info">Nome: {lista.nome}</p>
                      <p className="card-subtitle">Email: {lista.email}</p>
                      <p className="card-subtitle">Telefone: {lista.telefone}</p>
                      <p className="card-subtitle">Mensagem: {lista.mensagem}</p>
                  </div>
                  <div className="card-footer">
                    <div className="input-group">
                      <input type="button" value="Alterar" className="btn btn-outline-warning form-control" />
                      <input type="button" value="Excluir" className="btn btn-outline-danger form-control" />
                    </div>
                  </div>
                </div>
                </>
              )
            })}
        </>
    )
}