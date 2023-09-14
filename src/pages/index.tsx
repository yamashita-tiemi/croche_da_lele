import { ArticleIndexSecundary, ArticleIndexTerciary, ArticleShop } from "@/components/Article";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionIndexPrimary } from "@/components/Section";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack
      spacing={0}
    >
      <Navbar login={"Login"} href={"/login"}></Navbar>
      <SectionIndexPrimary></SectionIndexPrimary>
      <ArticleIndexSecundary></ArticleIndexSecundary>
      <ArticleIndexTerciary></ArticleIndexTerciary>
      <ArticleShop
        id="Bolsas"
        title={"Nossas Bolsas"} color={"purple"} colorCard={"lilac"}
        titleItem1={"Bolsa Redonda"} price1={"R$109,90"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125}
        titleItem2={"Bolsa Sun"} price2={"R$129,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} 
        titleItem3={"Bolsa Pink"} price3={"R$99,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} 
      ></ArticleShop>
      <ArticleShop
        id="Croppeds"
        title={"Nossos Croppeds"} color={"lilac"} colorCard={"purple"}
        titleItem1={"Cropped Básico"} price1={"R$59,90"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125}
        titleItem2={"Cropped Summer"} price2={"R$69,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} 
        titleItem3={"Cropped Pink"} price3={"R$69,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} 
      ></ArticleShop>
      <ArticleShop
        id="Vestidos"
        title={"Nossos Vestidos"} color={"purple"} colorCard={"lilac"}
        titleItem1={"Vestido Areia"} price1={"R$129,90"} src1={"/bolsa1.png"} alt1={""} width1={120} height1={125}
        titleItem2={"Vestido Mermaid"} price2={"R$159,90"} src2={"/bolsa1.png"} alt2={""} width2={120} height2={125} 
        titleItem3={"Vestido Pink"} price3={"R$119,90"} src3={"/bolsa1.png"} alt3={""} width3={120} height3={125} 
      ></ArticleShop>

      <Footer></Footer>
    </Stack>
  )
}