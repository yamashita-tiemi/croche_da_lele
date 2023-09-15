import { MdEmail, MdSupportAgent } from "react-icons/md";
import { Accordion, Box, FormControl, FormLabel, HStack, Input, Stack } from "@chakra-ui/react";

import { TextIndex } from "../Text";
import { ArticleIndexPrimary } from "../Article";
import { Image } from "../Image";
import { TitleSection } from "../Title";
import { ButtonAccordion, ButtonLogin } from "../Button";
import { CardContato } from "../Card";
import { TableAdmin, TableMembros } from '../Table';
import { Icon, IconSocialMedia } from "../Icons";
import { ModalCreate } from "../Modal";

export function SectionIndexPrimary() {
    return (
        <Stack
            as="section"
            backgroundImage={"/img_index.png"}
            width={"100%"}
            height={"720px"}
            bgRepeat={"no-repeat"}
            justifyContent={"flex-end"}
            paddingBottom={10}
        >
            <ArticleIndexPrimary
                text1={"Entre na trama da elegância com nossos crochês feitos à mão, onde cada ponto conta uma história única."}
                text2={"Estilo que é costurado com fios de carinho: explore nossa coleção"}
                text3={"Conheça nossa loja"}
                w1="25%"
                w2="30%"
            // w1={[
            //     "100%",
            //     "50%",
            //     "25%",
            //     "15%",
            //   ]}
            //   w1={{ xl: "100%", md: "50%", xs: "25%" }} 
            ></ArticleIndexPrimary>
        </Stack>
    )
}

export function SectionIndexTerciaryLeft() {
    return (
        <Stack
            as="section"
            width={"30%"}
            spacing={14}
        >
            <TextIndex text={"Do conforto à moda"} size={"32px"} color={"offWhite"} />

            <Stack
                spacing={5}
            >
                {/* <ul> */}
                <TextIndex text={"Extraordinário"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Exclusivos"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Elegância"} size={"32px"} color={"offWhite"} />
                <TextIndex text={"Arte"} size={"32px"} color={"offWhite"} />
                {/* </ul> */}
            </Stack>
        </Stack>
    )
}

export function SectionIndexTerciaryRight() {
    return (
        <Stack
            as="section"
            width={"30%"}
            spacing={14}
            textAlign={"end"}
            align={"flex-end"}
        >
            <TextIndex text={"Aconchego artesanal"} size={"32px"} color={"offWhite"} />
            <TextIndex text={"Do conforto à moda, nossos crochês dão vida a cada ponto, transformando o comum em extraordinário."} size={"32px"} color={"offWhite"} w="80%" />

        </Stack>
    )
}

export function SectionContatoPrimary() {
    return (
        <HStack
            as="section"
            bg={"purple"}
            spacing={0}
            height={"539px"}
        >
            <Stack
                as="section"
                width={"60%"}
                height={"100%"}
                justifyContent={"center"}
            // paddingBottom={10}
            >
                <ArticleIndexPrimary
                    text1={"Feito com fios, amor e inspiração: vista a originalidade dos crochês que cativam olhares."}
                    text2={"Cada ponto é uma expressão, cada peça é uma história."}
                    text3={"Crochês feitos à mão..."}
                    w1="55%"
                    w2="70%"
                ></ArticleIndexPrimary>
            </Stack>
            <Image src={"/contato.png"} alt={""} width={572} height={539} />
        </HStack>
    )
}

export function SectionContatoSecondary() {
    return (
        <HStack
            as="section"
            spacing={0}
            minHeight={"710px"}
        >
            <Stack
                as="section"
                width={"60%"}
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
                width={"40%"}
                align={"center"}
                spacing={10}
            >
                <Box
                    as='button'
                    borderRadius={"4px"}
                    color='offWhite'
                    w={"80%"}
                    p={4}
                >
                    <Icon width={"100px"} colorBg={"purple"} color={"offWhite"} margin={"auto"} marginBottom={"25px"}>
                        <MdSupportAgent size={80} />
                    </Icon>
                    <CardContato title={"Telefone"} text={"(XX) X XXXX-XXXX"} obs="09h às 18h"></CardContato>
                </Box>
                <Box
                    as='button'
                    borderRadius={"4px"}
                    color='offWhite'
                    w={"80%"}
                    p={4}
                >
                    <Icon width={"100px"} colorBg={"purple"} color={"offWhite"} margin={"auto"} marginBottom={"25px"}>
                        <MdEmail size={80} />
                    </Icon>
                    <CardContato title={"Email"} text={"croche_da_lele@gmail.com"}></CardContato>
                </Box>
                <IconSocialMedia size={60} width={"100px"}></IconSocialMedia>
            </Stack>
        </HStack>
    )
}

export function SectionLogin() {
    return (
        <Stack
            as="section"
            bg={"offWhite"}
            width={"65%"}
            align={"center"}
            borderRadius={"16px"}
            spacing={16}
            marginTop={32}
            paddingBottom={10}
        >
            <Box
                bg={"purple"}
                width={"100%"}
                borderRadius={"16px 16px 0 0"}
                align={"center"}
            >
                <Image src={"/logo_redonda.png"} alt={""} width={500} height={500} w="15%" />
            </Box>
            <FormControl
                isRequired
                width={"90%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <HStack
                    width={"100%"}
                    spacing={4}
                    justifyContent={"space-between"}
                    marginBottom={20}
                >
                    <Stack width={"45%"}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Digite o email' padding={6} />
                    </Stack>
                    <Stack width={"45%"}>
                        <FormLabel>Senha</FormLabel>
                        <Input type='password' placeholder='Digite a senha' padding={6} />
                    </Stack>
                </HStack>
                <ButtonLogin title={'Login'} w='30%'></ButtonLogin>
            </FormControl>
        </Stack>
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
        >
            <TitleSection title={"Nossos Colaboradores"} size={"48px"} />
            <TableMembros></TableMembros>
        </Stack>
    )
}

export function SectionAdmin() {
    return (
        <Stack
            as="section"
            width={"100%"}
            // height={"710px"}
            align={"center"}
            paddingTop={24}
            spacing={10}
        >
            <TitleSection title={"Lista de Membros"} size={"48px"} />
            <Stack
                width={"80%"}
                align={"flex-start"}
                spacing={5}
            >
                <ModalCreate></ModalCreate>
                <TableAdmin></TableAdmin>
            </Stack>
        </Stack>
    )
}