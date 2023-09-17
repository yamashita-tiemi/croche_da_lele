import { TableContainer, Thead, Tr, Th, Tbody, Td, Table, useDisclosure, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Stack, ModalFooter } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { Icon } from "../Icons";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { TextIndex } from "../Text";

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
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    var [membroModal, setMembroModal] = useState<Partial<Membro>>({})

    const initialRef = React.useRef(null)

    const [membros, setMembros] = useState<Membro[]>([])
    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})
    const [editMembroId, setEditMembroId] = useState<number | null>(null)

    const getMembros = async () => {
        const response = await fetch(APIURL);
        if (!response.ok) {
            console.error("Erro ao carregar dados");
        }
        const data: Membro[] = await response.json();
        setMembros(data);
    }

    useEffect(() => {
        getMembros();
    }, [])

    const validate = (memberId: number) => {
        if (memberId == 0) {
            console.error('Id inválido');
            return;
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNovoMembro((prevMembro) => ({ ...prevMembro, [name]: value }));
    }

    const handleDelete = async (memberId: number) => {
        validate(memberId);

        const response = await fetch(`${APIURL}/${memberId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Membro excluido com sucesso");
            getMembros();
            onCloseDelete();
        }
        else {
            alert("Erro ao tentar deletar");
        }
    }

    const handleSaveEdit = async (memberId: number) => {
        validate(memberId);

        const response = await fetch(`${APIURL}/${memberId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoMembro)
        });

        if (response.ok) {
            alert("Membro editado com sucesso");
            setEditMembroId(null);
            setNovoMembro({});
            getMembros();
        }
        else {
            alert("Erro ao tentar editar");
        }
    }

    const handleOpenModal = (membroModal: Membro) => {
        setMembroModal(membroModal);
        onOpenEdit();
    }

    return (
        <Stack>
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
                                    <HStack justifyContent={"center"}>
                                        <Button onClick={function () { handleOpenModal(membro) }} bg={"none"}>
                                            <Icon width={"40px"} colorBg={"#EAA800"} color={"offWhite"}>
                                                <BiSolidPencil size={28} />
                                            </Icon>
                                        </Button>
                                        <Button onClick={function () { handleOpenModal(membro), onOpenDelete() }} bg={"none"}>
                                            <Icon width={"40px"} colorBg={"#D00"} color={"offWhite"}>
                                                <FaTrash size={20} />
                                            </Icon>
                                        </Button>
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>


            {/* ------ Modal Edit ------ */}
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpenEdit}
                onClose={onCloseEdit}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6} pt={16}>
                        <form>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="name"
                                    type="text"
                                    value={novoMembro.name || membroModal.name}
                                    onChange={handleInputChange}
                                    placeholder='Digite o nome'
                                />
                                <FormLabel>Cargo</FormLabel>
                                <Input
                                    name="cargo"
                                    type="text"
                                    value={novoMembro.cargo || membroModal.cargo}
                                    onChange={handleInputChange}
                                    placeholder='Digite o cargo'
                                />
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={novoMembro.email || membroModal.email}
                                    onChange={handleInputChange}
                                    placeholder='Digite o email'
                                />
                                <FormLabel>Aniversário</FormLabel>
                                <Input
                                    name="aniversario"
                                    type="text"
                                    value={novoMembro.aniversario || membroModal.aniversario}
                                    onChange={handleInputChange}
                                    placeholder='Digite o aniversario'
                                />
                            </FormControl>
                            <HStack
                                justifyContent={"flex-end"}
                                marginTop={10}
                            >
                                <Button type="submit" onClick={function (event) { event.preventDefault(); handleSaveEdit(membroModal.id || 0) }} colorScheme='blue'>
                                    Salvar
                                </Button>
                                <Button onClick={onCloseEdit}>Fechar</Button>
                            </HStack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>

            {/* ----- Modal Delete ------ */}
            <Modal isOpen={isOpenDelete} onClose={onCloseDelete} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={12} pt={16}>
                        <TextIndex text={"Tem certeza que deseja excluir?"} size={"24px"} color={"#000"}></TextIndex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='gray' mr={3}>
                            Fechar
                        </Button>
                        <Button onClick={function (event) { onOpenDelete(); handleDelete(membroModal.id || 0) }} colorScheme='red' mr={3}>
                            Excluir
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}