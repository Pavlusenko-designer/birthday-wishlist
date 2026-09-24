import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Мій день. Мої бажання.",description:"07.10 — мій день народження. Цього року мені 32. Вішліст із подарунками та бронюванням.",robots:{index:false,follow:false},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="uk"><body>{children}</body></html>}
