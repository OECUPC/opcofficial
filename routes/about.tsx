import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
	<div>
		<Header location="/about"/>
		<main className="min-h-screen pt-16">
			<div>
				<h1 className="text-3xl text-center">準備中...</h1>
			</div>
		</main>
		<Footer />
	</div>
  );
}
