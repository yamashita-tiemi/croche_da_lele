import { TableContainer, Thead, Tr, Th, Tbody, Td, Table } from "@chakra-ui/react";

export function TableMembros() {
    return (
        <TableContainer
            bg={"offWhite"}
            width={"80%"}
        >
            <Table variant='striped' color="purple">
                <Thead bg={"purple"}>
                    <Tr>
                        <Th color={"offWhite"} fontSize={"24px"} width={"20%"} textAlign={"center"}>Nome</Th>
                        <Th color={"offWhite"} fontSize={"24px"} width={"20%"} textAlign={"center"}>Cargo</Th>
                        <Th color={"offWhite"} fontSize={"24px"} width={"25%"} textAlign={"center"}>Email</Th>
                        <Th color={"offWhite"} fontSize={"24px"} width={"25%"} textAlign={"center"}>Aniversário</Th>
                    </Tr>
                </Thead>
                <Tbody>
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