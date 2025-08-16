import type React from "react";
import type { Metadata } from "next";
import { Open_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-open-sans",
});

const workSans = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-work-sans",
});

export const metadata: Metadata = {
	title: "NeighborHub - Unleash the Power of Community Sharing",
	description:
		"Transform your neighborhood into a thriving sharing economy. Borrow what you need, lend what you have.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${openSans.variable} ${workSans.variable} dark`}
		>
			<body className="antialiased">{children}</body>
		</html>
	);
}
