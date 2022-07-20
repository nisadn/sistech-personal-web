// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/poppins'
import '@fontsource/anek-telugu'

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  colors: {
    custom: {
      100: "#F1FAEE",
      200: "#A8DADC",
      300: "#457B9D",
      400: "#1D3557",
      500: "#E63946",
    },
    special: {
      150: "DEF2E9",
      200: "#C5E6E4",
    }
  },
  fonts: {
    heading: `Poppins, sans-serif`,
    body: `'Anek Telugu', sans-serif`, 
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
})

export default customTheme;