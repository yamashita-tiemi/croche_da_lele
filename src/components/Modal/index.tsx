import React, { useEffect, useState } from "react"
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"

import { ButtonMembro } from "../Button";

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

export function ModalCreate() {
    const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()

    const initialRef = React.useRef(null)

    const [membros, setMembros] = useState<Membro[]>([])
    const [novoMembro, setNovoMembro] = useState<Partial<Membro>>({})

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
                                />
                                <FormLabel>Cargo</FormLabel>
                                <Input
                                    name="cargo"
                                    type="text"
                                    value={novoMembro.cargo || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o cargo'
                                />
                                <FormLabel>Email</FormLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    value={novoMembro.email || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o email'
                                />
                                <FormLabel>Aniversário</FormLabel>
                                <Input
                                    name="aniversario"
                                    type="text"
                                    value={novoMembro.aniversario || ""}
                                    onChange={handleInputChange}
                                    placeholder='Digite o aniversario'
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