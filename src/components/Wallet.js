import React, { Component } from 'react'
import { MuiThemeProvider ,createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline";



const themeDark = createMuiTheme({
    palette: {
      background: {
        default: "#000"
      },
    }
  });

export class Wallet extends Component {
    render() {
        return (
            <MuiThemeProvider theme={themeDark}>
                <CssBaseline />
            </MuiThemeProvider>
        )
    }
}

export default Wallet
