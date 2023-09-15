import { ArticleIndexSecundary, ArticleIndexTerciary, ArticleShop } from "@/components/Article";
import { Footer } from "@/components/Footer";
import { IconShop } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { SectionIndexPrimary } from "@/components/Section";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      spacing={0}
    >
      <Navbar login={"Login"} href={"/login"} children={<IconShop/>}></Navbar>
      <SectionIndexPrimary></SectionIndexPrimary>
      <ArticleIndexSecundary></ArticleIndexSecundary>
      <ArticleIndexTerciary></ArticleIndexTerciary>
      <ArticleShop
        id="Bolsas"
        title={"Nossas Bolsas"} color={"purple"} colorCard={"lilac"}
        titleItem1={"Bolsa Redonda"} price1={"R$109,90"} src1={"/bolsa1.png"} alt1={""} width1={170} height1={200}
        titleItem2={"Bolsa Sun"} price2={"R$129,90"} src2={"/bolsa2.png"} alt2={""} width2={170} height2={200} 
        titleItem3={"Bolsa Pink"} price3={"R$99,90"} src3={"/bolsa3.png"} alt3={""} width3={170} height3={200} 
      ></ArticleShop>
      <ArticleShop
        id="Croppeds"
        title={"Nossos Croppeds"} color={"lilac"} colorCard={"purple"}
        titleItem1={"Cropped Básico"} price1={"R$59,90"} src1={"/cropped1.png"} alt1={""} width1={170} height1={200}
        titleItem2={"Cropped Summer"} price2={"R$69,90"} src2={"/cropped2.png"} alt2={""} width2={170} height2={200} 
        titleItem3={"Cropped Pink"} price3={"R$69,90"} src3={"/cropped3.png"} alt3={""} width3={170} height3={200} 
      ></ArticleShop>
      <ArticleShop
        id="Vestidos"
        title={"Nossos Vestidos"} color={"purple"} colorCard={"lilac"}
        titleItem1={"Vestido Areia"} price1={"R$129,90"} src1={"/vestido1.png"} alt1={""} width1={170} height1={200}
        titleItem2={"Vestido Mermaid"} price2={"R$159,90"} src2={"/vestido2.png"} alt2={""} width2={170} height2={200} 
        titleItem3={"Vestido Pink"} price3={"R$119,90"} src3={"/vestido3.png"} alt3={""} width3={170} height3={200} 
      ></ArticleShop>

      <Footer></Footer>
    </Stack>
  )
}