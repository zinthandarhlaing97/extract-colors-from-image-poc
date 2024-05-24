import Layout from "@/components/Layout";
import type { Metadata } from "next";
import "../styles/globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Pixel Palette Picker",
  description:
    "Explore vibrant color palettes hidden within your images. Effortlessly extract harmonious combinations, whether you're a designer or enthusiast. Unleash your creativity with intuitive tools and transform your images into captivating works of art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children} </Layout>
        </Providers>
      </body>
    </html>
  );
}
