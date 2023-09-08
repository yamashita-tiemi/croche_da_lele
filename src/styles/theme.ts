import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        offWhite: "#FEFFF5",
        turquesa: "#007786",
        purple: "#634C71",
        lilas: "#A187B0"
    },
    styles: {
        global: {
            body: {
                bg: "#A187B0"
            }
        }
    },
    breakpoints: {
        "2xl": "2560px",
        "xl": "1440px",
        "lg": "1024px",
        "md": "768px",
        "sm": "425px",
        "xs": "375px",
        "xxs": "320px",
        "xxxs": "200px",
    }
})