import "@mantine/core/styles.css";
import { theme } from "../theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Navigation from "./(component)/navigation";
import classes from './home.module.css'

export const metadata = {
  title: "Monito",
  description: "powered by suitmedia",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{background: "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%);"}}>
        <MantineProvider theme={theme}>
          <div className={classes.rectangle3}></div>
          <Navigation>{children}</Navigation>
        </MantineProvider>
      </body>
    </html>
  );
}
