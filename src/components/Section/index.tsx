import NextLink from 'next/link'

import { MdEmail, MdSupportAgent } from "react-icons/md";
import { Accordion, Box, Flex, FormControl, FormLabel, Input, Link, Stack } from "@chakra-ui/react";

import { TextIndex } from "../Text";
import { ArticleContatoPrimary, ArticleIndexPrimary } from "../Article";
import { Image } from "../Image";
import { TitleSection } from "../Title";
import { ButtonAccordion, ButtonLogin } from "../Button";
import { CardContato } from "../Card";
import { TableMembros } from '../Table';
import { Icon, IconSocialMedia } from "../Icons";

export function SectionIndexPrimary() {
    return (
        <Stack
            as="section"
            backgroundImage={"/img_index.png"}
            width={"100%"}
            height={"720px"}
            bgRepeat={"no-repeat"}
            justifyContent={[
                "center",
                "center",
                "center",
                "flex-end",
                "flex-end",
                "flex-end",
                "flex-end"
            ]}
            paddingBottom={10}
        >
            <ArticleIndexPrimary
                text1={"Entre na trama da elegância com nossos crochês feitos à mão, onde cada ponto conta uma história única."}
                text2={"Estilo que é costurado com fios de carinho: explore nossa coleção"}
                text3={"Conheça nossa loja"}
            ></ArticleIndexPrimary>
        </Stack>
    )
}

export function SectionIndexTerciaryLeft() {
    return (
        <Stack
            as="section"
            width={[
                "90%",
                "90%",
                "90%",
                "90%",
                "30%",
                "30%",
                "30%",
            ]}
            spacing={14}
            textAlign={[
                "center",
                "center",
                "center",
                "center",
                "start",
                "start",
                "start",
            ]}
            alignItems={[
                "center",
                "center",
                "center",
                "center",
                "flex-start",
                "flex-start",
                "flex-start",
            ]}
        >
            <TextIndex text={"Do conforto à moda"} size={"32px"} color={"offWhite"} />

            <Stack
                spacing={5}
                width={"100%"}
                textAlign={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "start",
                    "start",
                    "start",
                ]}
                alignItems={[
                    "center",
                    "center",
                    "center",
                    "center",
                    "flex-start",
                    "flex-start",
                    "flex-start",
                ]}
            >
                <TextIndex text={"Extraordinário"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Exclusivos"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Elegância"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Arte"} size={"32px"} color={"offWhite"} />
            </Stack>
        </Stack>
    )
}

export function SectionIndexTerciaryRight() {
    return (
        <Stack
            as="section"
            spacing={14}
            width={[
                "90%",
                "90%",
                "90%",
                "90%",
                "40%",
                "30%",
                "30%",
            ]}
            textAlign={[
                "center",
                "center",
                "center",
                "center",
                "end",
                "end",
                "end",
            ]}
            alignItems={[
                "center",
                "center",
                "center",
                "center",
                "flex-end",
                "flex-end",
                "flex-end",
            ]}
        >
            <TextIndex text={"Aconchego artesanal"} size={"32px"} color={"offWhite"} />
            <TextIndex text={"Do conforto à moda, nossos crochês dão vida a cada ponto, transformando o comum em extraordinário."} size={"32px"} color={"offWhite"}/>

        </Stack>
    )
}

export function SectionContatoPrimary() {
    return (
        <Flex
            as="section"
            bg={"purple"}
            gap={0}
            minHeight={"539px"}
            flexDirection={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
            ]}
        >
            <Stack
                as="section"
                width={[
                    "100%",
                    "100%",
                    "100%",
                    "100%",
                    "100%",
                    "60%",
                    "60%"
                ]}
                height={"100%"}
                justifyContent={"center"}
            >
                <ArticleContatoPrimary
                    text1={"Feito com fios, amor e inspiração: vista a originalidade dos crochês que cativam olhares."}
                    text2={"Cada ponto é uma expressão, cada peça é uma história."}
                    text3={"Crochês feitos à mão..."}
                ></ArticleContatoPrimary>
            </Stack>
            <Image src={"/contato.png"} alt={""} width={572} height={539} />
        </Flex>
    )
}

export function SectionContatoSecondary() {
    return (
        <Flex
            as="section"
            minHeight={"710px"}
            alignItems={"center"}
            flexDirection={[
                "column",
                "column",
                "column",
                "column",
                "column",
                "row",
                "row",
            ]}
        >
            <Stack
                as="section"
                width={[
                    "90%",
                    "90%",
                    "80%",
                    "80%",
                    "60%",
                    "60%",
                    "60%",
                ]}
                align={"center"}
                spacing={20}
                paddingTop={28}
            >
                <TitleSection title={"Perguntas Frequentes"} size={"40px"} />

                <Accordion allowToggle>
                    <ButtonAccordion
                        question={"Vocês aceitam encomendas personalizadas?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                    <ButtonAccordion
                        question={"Qual é o prazo de entrega padrão?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                    <ButtonAccordion
                        question={"Como cuidar das peças de crochê?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                    <ButtonAccordion
                        question={"Vocês oferecem garantia?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                    <ButtonAccordion
                        question={"Quais métodos de pagamento vocês aceitam?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                    <ButtonAccordion
                        question={"Vocês oferecem descontos para compras em grande quantidade?"}
                        answer={"Lorem ipsum"}
                    ></ButtonAccordion>
                </Accordion>
            </Stack>
            <Stack
                as="section"
                width={[
                    "90%",
                    "90%",
                    "80%",
                    "80%",
                    "80%",
                    "40%",
                    "40%",
                ]}
                align={"center"}
                spacing={10}
            >
                <Box
                    borderRadius={"4px"}
                    color='offWhite'
                    w={"80%"}
                    p={4}
                    alignItems={"center"}
                >
                    <Icon width={"100px"} colorBg={"purple"} color={"offWhite"} margin={"auto"} marginBottom={"25px"} href={"https://web.whatsapp.com/"} isExternal>
                        <MdSupportAgent size={80} />
                    </Icon>
                    <CardContato title={"Telefone"} text={"(XX) X XXXX-XXXX"} obs="09h às 18h"></CardContato>
                </Box>
                <Box
                    borderRadius={"4px"}
                    color='offWhite'
                    w={"80%"}
                    p={4}
                >
                    <Icon width={"100px"} colorBg={"purple"} color={"offWhite"} margin={"auto"} marginBottom={"25px"} href={"https://www.google.com/intl/pt-BR/gmail/about/"} isExternal>
                        <MdEmail size={65} />
                    </Icon>
                    <CardContato title={"Email"} text={"croche_da_lele@gmail.com"}></CardContato>
                </Box>
                <IconSocialMedia size={60} width={"88px"}></IconSocialMedia>
            </Stack>
        </Flex>
    )
}

export function SectionLogin() {
    return (
        <Stack
            as="section"
            bg={"offWhite"}
            width={{
                base: "95%",
                fold: "95%",
                xs: "95%",
                sm: "80%",
                md: "80%",
                lg: "65%",
                xl: "65%"
            }}
            align={"center"}
            borderRadius={"16px"}
            spacing={16}
            marginTop={20}
            paddingBottom={10}
        >
            <Box
                bg={"purple"}
                width={"100%"}
                borderRadius={"16px 16px 0 0"}
                minHeight={"120px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Link as={NextLink} href={"/"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <Image src={"/logo_redonda.png"} alt={""} width={300} height={300} w="10%" />
                </Link>
            </Box>
            <FormControl
                isRequired
                width={"90%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <Flex
                    width={"100%"}
                    gap={4}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    marginBottom={20}
                    flexDirection={{
                        base: "column",
                        fold: "column",
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                        xl: "row"
                    }}
                >
                    <Stack width={{
                        base: "100%",
                        fold: "100%",
                        xs: "80%",
                        sm: "80%",
                        md: "80%",
                        lg: "45%",
                        xl: "45%"
                    }}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Digite o email' padding={6} />
                    </Stack>
                    <Stack width={{
                        base: "100%",
                        fold: "100%",
                        xs: "80%",
                        sm: "80%",
                        md: "80%",
                        lg: "45%",
                        xl: "45%"
                    }}>
                        <FormLabel>Senha</FormLabel>
                        <Input type='password' placeholder='Digite a senha' padding={6} />
                    </Stack>
                </Flex>
                <ButtonLogin title={'Login'} w='30%'></ButtonLogin>
            </FormControl>
        </Stack >
    )
}

export function SectionMembros() {
    return (
        <Stack
            as="section"
            width={"100%"}
            // height={"710px"}
            align={"center"}
            paddingTop={24}
            spacing={24}
            textAlign={"center"}
        >
            <TitleSection title={"Nossos Colaboradores"} size={"48px"} />
            <TableMembros></TableMembros>
        </Stack>
    )
}