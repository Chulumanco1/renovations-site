import "./globals.css";
import Navbar from "../components/Navbar";
import { DarkModeProvider } from "../context/DarkModeContext";

export const metadata = {
  title: "Ntakezulu Trading",
  description: "Paving • Building • Plumbing • Camera • Aluminium • Painting • Solar • Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DarkModeProvider>
          <Navbar />
          <main>{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
