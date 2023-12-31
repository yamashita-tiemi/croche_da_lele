import NextLink from 'next/link'

import { Flex, Link, Stack } from "@chakra-ui/react";
import { Image } from "../Image";
import { TitleFooter } from "../Title";
import { TextIndex } from "../Text";
import { IconSocialMedia } from "../Icons";

export function Footer() {
    return (
        <Flex
            as={"footer"}
            bg={"purple"}
            width={"100%"}
            paddingX={4}
            justifyContent={"space-between"}
            marginTop={12}
            paddingY={8}
            flexDirection={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
            ]}
            alignItems={"center"}
            gap={10}
        >
            <Link as={NextLink} href={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/logo_redonda.png"} alt={"Crochê da Lelê"} width={491} height={125} w="55%" mx="2%" />
            </Link>
            <Stack
                spacing={5}
                width={[
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "45%",
                    "30%",
                ]}
                alignItems={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                ]}
                textAlign={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                    "start",
                    "start",
                ]}
            >
                <TitleFooter title={"Sobre Nós"}></TitleFooter>
                <TextIndex text={"Maecenas ut felis hendrerit, placerat nisi sit amet, mattis mi. Donec non gravida libero."} size={"20px"} color={"offWhite"}></TextIndex>
            </Stack>
            <Stack
                spacing={5}
                width={[
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "45%",
                    "30%",
                ]}
                alignItems={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                ]}
                textAlign={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "center",
                    "start",
                    "start",
                ]}
            >
                <TitleFooter title={"Contato"}></TitleFooter>
                <TextIndex text={"(XX) XXXX-XXXX"} size={"16px"} color={"offWhite"}></TextIndex>
                <TextIndex text={"Rua das Fiandeiras, 24 - Vila Olímpia, SP"} size={"20px"} color={"offWhite"}></TextIndex>
            </Stack>
            <Stack
                spacing={5}
                align={"center"}
                width={[
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "90%",
                    "45%",
                    "30%",
                ]}
            >
                <IconSocialMedia size={40} width={"60px"}></IconSocialMedia>
                <Stack
                    align={"center"}
                    width={"100%"}
                    textAlign={"center"}
                >
                    <TextIndex text={"CodeJr ©Copyright 2023."} size={"16px"} color={"offWhite"}></TextIndex>
                    <TextIndex text={"Todos os direitos reservados."} size={"16px"} color={"offWhite"}></TextIndex>
                </Stack>
            </Stack>
        </Flex>
    )
}