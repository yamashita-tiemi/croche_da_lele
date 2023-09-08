import { HStack, Stack } from "@chakra-ui/react"
import { Image } from "../Image"
import { TitleNavbar } from "../Title"

export function Navbar() {
    return (
        <HStack
            bg={"purple"}
            height={"100px"}
            justifyContent={"space-between"}
            paddingX={6}
        >
            <Image src={"/logo.png"} alt={"Crochê da Lelê"} width={491} height={125} w="20%"/>
            <HStack
                spacing={10}
            >
                <TitleNavbar title={"Home"} size={"32px"} />
                <TitleNavbar title={"Contato"} size={"32px"} />
                <TitleNavbar title={"Membros"} size={"32px"} />
            </HStack>
            <HStack
                spacing={10}
                w={"20%"}
                justifyContent={"flex-end"}
            >
                <TitleNavbar title={"Login"} size={"32px"} />
                <TitleNavbar title={"Img"} size={"32px"} />
            </HStack>
        </HStack>
    )
}