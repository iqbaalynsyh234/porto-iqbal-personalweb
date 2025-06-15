import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Iqbal | Portofolio",

    description:
		"My name is Iqbal Alyansyah, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

    author: "Iqbal Alyansyah",
    siteUrl: "",
    applicationName: "Iqbal Porto",

    keywords: [
		"alvalens",
		"alvalen",
		"alvalen shafel",
		"shafel",
		"Iqbal Alyansyah",
		"alvalen shafel bilyunazra",
		"bloodfallen",
		"alvalen porto",
		"alvalen um",
	],

    openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
		title: "Iqbal | Portofolio",
		site_name: "Iqbal | Portofolio",
		description: "My name is Iqbal, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Iqbal Portofolio",
			},
		],
		site_name: "Iqbal | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
