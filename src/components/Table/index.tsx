import { useEffect, useState } from "react";
import { TableContainer, Thead, Tr, Th, Tbody, Td, Table } from "@chakra-ui/react";

import React from "react";

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