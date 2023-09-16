import { TableContainer, Thead, Tr, Th, Tbody, Td, Table } from "@chakra-ui/react";
import { ModalCRUD } from "../Modal";

export function TableMembros() {
    return (
        <TableContainer
            bg={"offWhite"}
            width={"80%"}
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
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export function TableAdmin() {
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
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                        <Td textAlign={"center"}><ModalCRUD/></Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                        <Td textAlign={"center"}><ModalCRUD/></Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                        <Td textAlign={"center"}><ModalCRUD/></Td>
                    </Tr>
                    <Tr>
                        <Td textAlign={"center"}>Amanda S.</Td>
                        <Td textAlign={"center"}>Marketing</Td>
                        <Td textAlign={"center"}>amanda_cl@gmail.com</Td>
                        <Td textAlign={"center"}>20/07/1997</Td>
                        <Td textAlign={"center"}><ModalCRUD/></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}