import { TableContainer, Thead, Tr, Th, Tbody, Td, Table, useDisclosure, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { ModalCRUD } from "../Modal";

import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { IconSocialCRUD } from "../Icons";

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

export function TableMembros() {
    const [membros, setMembros] = useState<Membro[]>([])

    const getMembros = async () => {
        const response = await fetch(APIURL)
        if (!response.ok) {
            console.error("Nao ao carregar dados")
        }
        const data: Membro[] = await response.json()
        setMembros(data)
    }

    useEffect(() => {
        getMembros()
    }, [])

    return (
        <TableContainer
            bg={"offWhite"}
            width={{
                base: "95%",
                fold: "95%",
                xs: "95%",
                sm: "90%",
                md: "90%",
                lg: "80%",
                xl: "80%"
            }}
        >
            <Table variant='striped' color="purple">
                <Thead bg={"purple"}>
                    <Tr>
                        <Th color={"offWhite"} fontSize={"20px"} width={"20%"} textAlign={"center"}>Nome</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"20%"} textAlign={"center"}>Cargo</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"25%"} textAlign={"center"}>Email</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"25%"} textAlign={"center"}>Aniversário</Th>
                    </Tr>
                </Thead>
                <Tbody overflow={"scroll"}>
                    {membros.map((membro, index) => (
                        <Tr>
                            <Td textAlign={"center"}>{membro.name}</Td>
                            <Td textAlign={"center"}>{membro.cargo}</Td>
                            <Td textAlign={"center"}>{membro.email}</Td>
                            <Td textAlign={"center"}>{membro.aniversario}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export function TableAdmin() {
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const initialRef = React.useRef(null)

    const [membros, setMembros] = useState<Membro[]>([])
    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})
    const [editMembroId, setEditMembroId] = useState<number | null>(null)

    const getMembros = async () => {
        const response = await fetch(APIURL)
        if (!response.ok) {
            console.error("Nao ao carregar dados")
        }
        const data: Membro[] = await response.json()
        setMembros(data)
    }

    useEffect(() => {
        getMembros()
    }, [])

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
        <TableContainer
            bg={"offWhite"}
            width={"100%"}
        >
            <Table variant='striped' color="purple">
                <Thead bg={"purple"}>
                    <Tr>
                        <Th color={"offWhite"} fontSize={"20px"} width={"18%"} textAlign={"center"}>Nome</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"18%"} textAlign={"center"}>Cargo</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"18%"} textAlign={"center"}>Email</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"18%"} textAlign={"center"}>Aniversário</Th>
                        <Th color={"offWhite"} fontSize={"20px"} width={"28%"} textAlign={"center"}></Th>
                    </Tr>
                </Thead>
                <Tbody overflow={"scroll"}>
                    {membros.map((membro, index) => (
                        <Tr>
                            <Td textAlign={"center"}>{membro.name}</Td>
                            <Td textAlign={"center"}>{membro.cargo}</Td>
                            <Td textAlign={"center"}>{membro.email}</Td>
                            <Td textAlign={"center"}>{membro.aniversario}</Td>

                            <Td textAlign={"center"}>
                                <IconSocialCRUD onOpenView={onOpenView} onOpenEdit={onOpenEdit} onOpenDelete={onOpenDelete} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}