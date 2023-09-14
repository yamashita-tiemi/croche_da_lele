import { HStack, Stack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TitleFooter } from "../Title";
import { TextIndex } from "../Text";

export function Footer() {
    return (
        <HStack
            as={"footer"}
            bg={"purple"}
            width={"100%"}
            paddingX={4}
            justifyContent={"space-between"}
            marginTop={12}
        >
            <Image src={"/logo_redonda.png"} alt={"Crochê da Lelê"} width={491} height={125} w="15%" />
            <Stack
                spacing={5}
                width={"20%"}
            >
                <TitleFooter title={"Sobre Nós"}></TitleFooter>
                <TextIndex text={"Maecenas ut felis hendrerit, placerat nisi sit amet, mattis mi. Donec non gravida libero."} size={"20px"} color={"offWhite"}></TextIndex>
            </Stack>
            <Stack
                spacing={5}
                width={"20%"}
            >
                <TitleFooter title={"Contato"}></TitleFooter>
                <TextIndex text={"(XX) XXXX-XXXX"} size={"16px"} color={"offWhite"}></TextIndex>
                <TextIndex text={"Rua das Fiandeiras, 24 - Vila Olímpia, SP"} size={"20px"} color={"offWhite"}></TextIndex>
            </Stack>
            <Stack
                spacing={5}
                width={"20%"}
                align={"center"}
            >
                <TitleFooter title={"Icones"}></TitleFooter>
                <Stack
                    align={"center"}
                >
                    <TextIndex text={"CodeJr ©Copyright 2023."} size={"16px"} color={"offWhite"}></TextIndex>
                    <TextIndex text={"Todos os direitos reservados."} size={"16px"} color={"offWhite"}></TextIndex>
                </Stack>
            </Stack>
        </HStack>
    )
}