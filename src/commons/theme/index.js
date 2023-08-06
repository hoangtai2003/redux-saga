import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
    color: {
        primary: "#D32F2F",
        secondary: "#00BC04",
        error: "#E64A19"
    },
    typography: {
        fontFamily: "Roboto",
    },
    shape: {
        borderRadius: 4,
        background: "#7B1FA2",
        textColor: "FFFFFF",
        color: "#CCCCCC"
    }
});
export default theme;