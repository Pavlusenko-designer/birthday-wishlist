import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Мій день. Мої бажання.",description:"Трохи музики, трохи чаю й речі, які тішать. Вішліст до дня народження.",robots:{index:false,follow:false},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="uk"><body>{children}</body></html>}
