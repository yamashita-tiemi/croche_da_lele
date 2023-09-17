import React, { useEffect, useState } from "react"
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"

import { ButtonMembro } from "../Button";
import { TitleSection } from "../Title";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { TextIndex } from "../Text";
import { Icon } from "../Icons";

const APIURL = "http://localhost:3001/membros";

type Membro = {
    userId: number,
    id: number,
    name: string,
    email: string,
    aniversario: string,
    cargo: string,
    completed: boolean
}

export function SectionAdmin() {
    const [membros, setMembros] = useState<Membro[]>([])

    const getMembros = async () => {
        const response = await fetch(APIURL);
        if (!response.ok) {
            console.error("Erro ao carregar dados");
        }
        const data: Membro[] = await response.json();
        setMembros(data);
    }

    return (
        <Stack
            as="section"
            width={"100%"}
            // height={"710px"}
            align={"center"}
            paddingTop={24}
            spacing={10}
            textAlign={"center"}
        >
            <TitleSection title={"Lista de Membros"} size={"48px"} />
            <Stack
                align={"flex-start"}
                spacing={5}
                width={{
                    base: "95%",
                    fold: "95%",
                    xs: "95%",
                    sm: "90%",
                    md: "90%",
                    lg: "90%",
                    xl: "90%"
                }}
            >
                <ModalCreate getMembros={getMembros}></ModalCreate>
                <TableAdmin getMembros={getMembros} membros={membros}></TableAdmin>
            </Stack>
        </Stack>
    )
}

interface ModalCreateProps {
    getMembros: Function
}

export function ModalCreate({getMembros}:ModalCreateProps) {
    const initialRef = React.useRef(null)
    const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()
    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})

    useEffect(() => {
        getMembros();
    }, [])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch(APIURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoMembro)
        });

        if (response.ok) {
            alert("Membro criado com sucesso");
            setNovoMembro({});
            getMembros();
            onClose();
        }
        else {
            console.error("Nao foi possivel criar novo membro")
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNovoMembro((prevMembro) => ({ ...prevMembro, [name]: value }));
    }

    return (
        <>
            <ButtonMembro onOpen={onOpen}></ButtonMembro>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6} pt={16}>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input
                                    ref={initialRef}
                                    name="name"
                                    type="text"
                                    value={novoMembro.name || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o nome'
                                    isRequired
                                />
                                <FormLabel>Cargo</FormLabel>
                                <Input
                                    name="cargo"
                                    type="text"
                                    value={novoMembro.cargo || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o cargo'
                                    isRequired
                                />
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={novoMembro.email || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o email'
                                    isRequired
                                />
                                <FormLabel>Aniversário</FormLabel>
                                <Input
                                    name="aniversario"
                                    type="text"
                                    value={novoMembro.aniversario || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o aniversario'
                                    isRequired
                                />
                            </FormControl>
                            <HStack
                                justifyContent={"flex-end"}
                                marginTop={10}
                            >
                                <Button type="submit" colorScheme='blue'>
                                    Salvar
                                </Button>
                                <Button onClick={onClose}>Fechar</Button>
                            </HStack>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

interface TableAdminProps {
    membros: Membro[]
    getMembros: Function
}

export function TableAdmin({ getMembros, membros }:TableAdminProps) {
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const [membroModal, setMembroModal] = useState<Partial<Membro>>({})

    const initialRef = React.useRef(null)

    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})
    const [editMembroId, setEditMembroId] = useState<number | null>(null)

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
            onCloseEdit();
        }
        else {
            alert("Erro ao tentar editar");
        }
    }

    const handleOpenModalEdit = (membroModal: Membro) => {
        setMembroModal(membroModal);
        onOpenEdit();
    }

    const handleOpenModalDelete = (membroModal: Membro) => {
        setMembroModal(membroModal);
        onOpenDelete();
    }

    return (
        <Stack width={"100%"}>
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
                                        <Button onClick={function () { handleOpenModalEdit(membro) }} bg={"none"}>
                                            <Icon width={"40px"} colorBg={"#EAA800"} color={"offWhite"}>
                                                <BiSolidPencil size={28} />
                                            </Icon>
                                        </Button>
                                        <Button onClick={function () { handleOpenModalDelete(membro) }} bg={"none"}>
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