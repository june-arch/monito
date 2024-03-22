import "@mantine/core/styles.css";
import { theme } from "../theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

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
      <body>
        <MantineProvider theme={theme}>
          <div style={{ backgroundColor: "white" }}>{children}</div>
        </MantineProvider>
      </body>
    </html>
  );
}
