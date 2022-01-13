import { blue, red } from "@material-ui/core/colors/";

import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      type: "dark",
      main: "#424242",
    },
    // secondary: {
    //   main: "#d8336c",
    // },
    background: {
      default: "#fefefe",
      paper: "#424242",
    },
  },
  toolbar: {
    minHeight: "100px",
    backgroundColor: "IndianRed",
  },
  mixins: { toolbar: { minHeight: "100px" } },
});
