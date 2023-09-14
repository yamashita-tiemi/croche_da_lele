import { Accordion, Box, HStack, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
// import { EmailIcon } from '@chakra-ui/icons'

import { TextIndex } from "../Text";
import { ArticleIndexPrimary } from "../Article";
import { Image } from "../Image";
import { TitleSection } from "../Title";
import { ButtonAccordion, ButtonTurquesa } from "../Button";
import { CardContato } from "../Card";
import { TableAdmin, TableMembros } from '../Table';

export function SectionIndexPrimary() {
    return (
        <Stack
            as="section"
            backgroundImage={"/img_index.png"}
            width={"100%"}
            height={"710px"}
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
                spacing={20}
            >
                <CardContato src={""} alt={""} width={0} height={0} title={"Telefone"} text={"(XX) X XXXX-XXXX"} obs="09h às 18h"></CardContato>
                <CardContato src={""} alt={""} width={0} height={0} title={"Email"} text={"croche_da_lele@gmail.com"}></CardContato>

                //adicionar os icons
            </Stack>
        </HStack>
    )
}

export function SectionLogin() {
    return (
        <Stack
            as="section"
            bg={"offWhite"}
            width={"70%"}
            spacing={32}
            borderRadius={"16px"}
            marginTop={20}
            align={"center"}
            paddingBottom={10}
        >
            <Box
                bg={"purple"}
                width={"100%"}
                borderRadius={"16px 16px 0 0"}
                align={"center"}
            >
                <Image src={"/logo_redonda.png"} alt={""} width={500} height={500} w="20%"/>
            </Box>
            <HStack
                width={"90%"}
                spacing={4}
                justifyContent={"space-between"}
            >
                <Stack
                    width={"45%"}
                >
                    <TextIndex text={"Email:"} size={"24px"} color={"#000"}/>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            {/* <EmailIcon color='gray.300' /> */}
                        </InputLeftElement>
                        <Input type='email' placeholder='Digite o email' padding={6}/>
                    </InputGroup>
                </Stack>

                <Stack
                    width={"45%"}
                >
                    <TextIndex text={"Senha:"} size={"24px"} color={"#000"}/>
                    <InputGroup>
                        {/* <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            children='$'
                        /> */}
                        <Input type='password' placeholder='Digite a senha' padding={6}/>
                    </InputGroup>
                </Stack>
            </HStack>
            <ButtonTurquesa title={'Login'} href={'/admin'} w='40%' fontsize={'32px'}></ButtonTurquesa>
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
            <TitleSection title={"Nossos Colaboradores"} size={"48px"}/>
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
            spacing={24}
        >
            <TitleSection title={"Lista de Membros"} size={"48px"}/>
            <Stack
                width={"80%"}
                align={"flex-start"}
            >
                <ButtonTurquesa title={'+ Novo Membro'} href={'/'} w='15%' fontsize={'20px'}></ButtonTurquesa>
                <TableAdmin></TableAdmin>
            </Stack>
        </Stack>
    )
}