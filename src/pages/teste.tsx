import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const APIURL = "http://localhost:3001/membros";

type Membro = {
    userId: number,
    id: number,
    name: string,
    email: string,
    aniversario: string,
    cargo: string,
    completed: boolean,
}



export default function Teste() {
    const [membros, setMembros] = useState<Membro[]>([])
    //partial pq esta vazio
    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})
    const [editMembroId, setEditMembroId] = useState<number | null>(null)

    const getMembros = async () => {
        const response = await fetch(APIURL)
        if (!response.ok) {
            console.error("Nao ao carregar dados")
        }

        //transforma em json
        const data: Membro[] = await response.json()
        //escreve no membros
        setMembros(data)
    }

    useEffect(() => {
        getMembros()
    }, [])

    //so cria
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const response = await fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoMembro)
        })
        if (response.ok) {
            toast.success("Membro criado com sucesso")
            setNovoMembro({})
            getMembros()
        }
        else {
            console.error("Nao foi possivel criar novo membro")
        }
    }

    //visual
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setNovoMembro((prevMembro) => ({ ...prevMembro, [name]: value }))
    }

    const handleDelete = async (memberId: number) => {
        const confirmDelete = window.confirm("Tem certeza que deeja excluir?")
        if (confirmDelete) {
            const response = await fetch(`${APIURL}/${memberId}`, {
                method: "DELETE"
            })
            if (response.ok) {
                alert("Membro excluido com sucesso")
                getMembros()
            }
            else {
                alert("Erro ao tentar deletar")
            }
        }
    }

    const handleSaveEdit = async (memberId: number) => {

        const response = await fetch(`${APIURL}/${memberId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoMembro)
        })
        if (response.ok) {
            alert("Membro editado com sucesso")
            setEditMembroId(null)
            setNovoMembro({})
            getMembros()
        }
        else {
            alert("Erro ao tentar editar")
        }
    }

    const handleEdit = (memberId: number) => {
        setEditMembroId(memberId)
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <input
                    placeholder="nome"
                    name="name"
                    type="text"
                    value={novoMembro.name || ""}
                    onChange={handleInputChange}
                />
                <input
                    placeholder="cargo"
                    name="cargo"
                    type="text"
                    value={novoMembro.cargo || ""}
                    onChange={handleInputChange}
                />
                <input
                    placeholder="email"
                    name="email"
                    type="email"
                    value={novoMembro.email || ""}
                    onChange={handleInputChange}
                />
                <input
                    placeholder="aniversario"
                    name="aniversario"
                    type="text"
                    value={novoMembro.aniversario || ""}
                    onChange={handleInputChange}
                />
                <button type="submit">Adicionar</button>
            </form> */}

            <ul>

                {membros.map((membro, index) => (
                    <div>
                        {/* edita se esta selecionado o membro */}
                        {editMembroId === membro.id ? (
                            <div>
                                <input
                                    placeholder="nome"
                                    name="name"
                                    type="text"
                                    value={novoMembro.name || membro.name}
                                    onChange={handleInputChange}
                                />
                                <input
                                    placeholder="cargo"
                                    name="cargo"
                                    type="text"
                                    value={novoMembro.cargo || membro.cargo}
                                    onChange={handleInputChange}
                                />
                                <input
                                    placeholder="email"
                                    name="email"
                                    type="email"
                                    value={novoMembro.email || membro.email}
                                    onChange={handleInputChange}
                                />
                                <input
                                    placeholder="aniversario"
                                    name="aniversario"
                                    type="text"
                                    value={novoMembro.aniversario || membro.aniversario}
                                    onChange={handleInputChange}
                                />
                                <button type="submit" onClick={() => handleSaveEdit(membro.id)}>Salvar</button>
                            </div>
                        ) : (
                            <div>
                                <p>{membro.name}</p>
                                <p>{membro.cargo}</p>
                                <p>{membro.email}</p>
                                <p>{membro.aniversario}</p>
                                <button onClick={() => handleEdit(membro.id)}>Editar</button>
                                <button onClick={() => handleDelete(membro.id)}>Deletar</button>
                            </div>
                        )}

                    </div>
                ))}
            </ul>
        </>
    )
}