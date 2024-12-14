import "./globals.css";
import AnnouncementBar from "./components/AnnouncementBar";

export default function RootLayout() {
	return (
		<html lang="en">
			<body>
				<header>
					<AnnouncementBar />
				</header>
			</body>
		</html>
	);
}
