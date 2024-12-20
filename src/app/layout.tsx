import "./globals.css";
import AnnouncementBar from "./components/AnnouncementBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-white grid grid-rows-[auto_1fr_auto] h-screen">
				<header>
					<AnnouncementBar />
					<NavBar />
				</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
