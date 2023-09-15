import React from "react"
import { Box, Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { AiFillPlusCircle } from "react-icons/ai";

import { Icon, IconSocialCRUD } from "../Icons"
import { TextIndex } from "../Text";
import { TitleNavbar } from "../Title";
import { ButtonMembro } from "../Button";


export function ModalCRUD() {
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const initialRef = React.useRef(null)

    return (
        <>
            <IconSocialCRUD onOpenView={onOpenView} onOpenEdit={onOpenEdit} onOpenDelete={onOpenDelete} />

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpenView}
                onClose={onCloseView}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={6} pt={16}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input type="text" ref={initialRef} placeholder='nome' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input type="text" placeholder='cargo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input type="date" placeholder='aniversario' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onCloseView}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

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
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input type="text" ref={initialRef} placeholder='nome' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input type="text" placeholder='cargo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input type="date" placeholder='aniversario' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onCloseEdit}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpenDelete} onClose={onCloseDelete} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody pb={12} pt={16}>
                        {/* <h2>Tem certeza que deseja excluir?</h2> */}
                        <TextIndex text={"Tem certeza que deseja excluir?"} size={"24px"} color={"#000"}></TextIndex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='gray' mr={3} onClick={onCloseDelete}>
                            Fechar
                        </Button>
                        <Button colorScheme='red' mr={3}>
                            Excluir
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export function ModalCreate() {
    const { isOpen: isOpen, onOpen: onOpen, onClose: onClose } = useDisclosure()

    const initialRef = React.useRef(null)

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
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input type="text" ref={initialRef} placeholder='Digite o nome' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input type="text" placeholder='Digite o cargo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='Digite o email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input type="date" placeholder='Digite o aniversario' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}