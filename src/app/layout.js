import "./globals.css";
import { DisplayProvider } from "../context";
import LayoutContent from "../components/display";

export const metadata = {
  title: "My App",
  description: "Example with context",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DisplayProvider>
          <LayoutContent>{children}</LayoutContent>
        </DisplayProvider>
      </body>
    </html>
  );
}