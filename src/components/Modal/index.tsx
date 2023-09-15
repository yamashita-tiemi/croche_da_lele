import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { IconSocialCRUD } from "../Icons"
import { TextIndex } from "../Text";


export function ModalCRUD() {
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure()
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure()

    const initialRef = React.useRef(null)

    return (
        <>
            <IconSocialCRUD onOpenView={onOpenView} onOpenEdit={onOpenEdit} onOpenDelete={onOpenDelete}/>

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
                            <Input ref={initialRef} placeholder='nome' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input placeholder='cargo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input placeholder='aniversario' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
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
                            <Input ref={initialRef} placeholder='nome' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Cargo</FormLabel>
                            <Input placeholder='cargo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Aniversário</FormLabel>
                            <Input placeholder='aniversario' />
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