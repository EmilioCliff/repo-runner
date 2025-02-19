import { Menus } from './lib/data';
import DesktopMenu from './components/DesktopMenu';
import MobMenu from './components/MobMenu';
import {
	ChevronRight,
	Database,
	Github,
	Terminal,
	Zap,
	ArrowRight,
} from 'lucide-react';
import Marquee from './components/Marquee';
import OurProducts from './components/OurProducts';

function App() {
	return (
		<div>
			<header className="h-16 text-[15px] border-b  text-gray-300 fixed top-0 left-0 right-0 flex-center z-50 border-gray-800 bg-primary/80 backdrop-blur-sm">
				<nav className="px-3.5 flex justify-between items-center w-full max-w-7xl mx-auto">
					<div className="flex space-x-10">
						<img
							src="/repo-runner.png"
							alt="Repo Runner"
							className="size-8 w-[8rem] h-auto"
						/>
						<ul className="hidden lg:flex items-center gap-x-3">
							{Menus.map((menu) => (
								<DesktopMenu key={menu.name} menu={menu} />
							))}
						</ul>
					</div>
					<div className="flex-center gap-x-5">
						<a
							href="#"
							className="text-sm text-gray-300 hover:text-white transition"
						>
							Sign In
						</a>
						<button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
							Get Started
						</button>
					</div>
					<div className="lg:hidden">
						<MobMenu Menus={Menus} />
					</div>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="pt-32 pb-20 min-h-screen px-4 border-b border-gray-700">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
						Deploy faster.
						<br />
						Scale anywhere.
					</h1>
					<p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Qui nobis quidem, alias maiores numquam quas,
						necessitatibus exercitationem illum laborum modi
						laboriosam quia, quae recusandae harum. Qui ea porro
						distinctio tempore!
					</p>
					<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
						<button className="flex space-x-2 items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700">
							Start Deploying
							<ChevronRight className="ml-2 h-4 w-4" />
						</button>
						<button className="flex space-x-2 items-center px-4 py-2 rounded-md border border-blue-600 text-gray-300 hover:text-white">
							<Github className="mr-2 h-4 w-4" />
							View on GitHub
						</button>
					</div>
				</div>
			</section>

			{/* Why Choose Us  */}
			<section className="pt-32 pb-20 px-4">
				<div className="container mx-auto text-center">
					<h1 className="bg-gradient-to-r from-white to-blue-950 text-2xl font-bold tracking-tight bg-clip-text text-transparent">
						Why use RepoRunner?
					</h1>
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
						Trusted by developers.
						<br />
						Chosen by Fortune 100 companies.
					</h1>
					<p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Qui nobis quidem, alias maiores numquam quas,
						necessitatibus exercitationem illum laborum modi
						laboriosam quia, quae recusandae harum. Qui ea porro
						distinctio tempore!
					</p>
					<a
						href="#"
						className="text-blue-800 mt-6 inline-flex mx-auto hover:underline"
					>
						Read More Customer Stories
						<ArrowRight className="ml-2" />
					</a>
				</div>
				<div className="mx-auto w-full text-white flex justify-center items-center overflow-x-hidden">
					<Marquee />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-center mt-8">
					<div className="flex flex-col items-center">
						<p className="text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							20M+
						</p>
						<p className="text-gray-300 text-sm sm:text-base">
							Monthly developers
						</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							7M+
						</p>
						<p className="text-gray-300 text-sm sm:text-base">
							Applications
						</p>
					</div>
					<div className="flex flex-col items-center">
						<p className="text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
							20B+
						</p>
						<p className="text-gray-300 text-sm sm:text-base">
							Monthly image pulls
						</p>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-20 px-4 border-t border-gray-800 bg-blue-950">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
							<Terminal className="h-10 w-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Instant Deployments
							</h3>
							<p className="text-gray-400">
								Deploy your code in seconds with our automated
								CI/CD pipeline.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
							<Zap className="h-10 w-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Lightning Fast
							</h3>
							<p className="text-gray-400">
								Experience blazing fast build times and
								deployments.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
							<Database className="h-10 w-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Built-in Database
							</h3>
							<p className="text-gray-400">
								Integrated database solutions for seamless data
								management.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
							<Zap className="h-10 w-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Lightning Fast
							</h3>
							<p className="text-gray-400">
								Experience blazing fast build times and
								deployments.
							</p>
						</div>
						<div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50">
							<Database className="h-10 w-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Built-in Database
							</h3>
							<p className="text-gray-400">
								Integrated database solutions for seamless data
								management.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Our Products  */}
			<OurProducts />

			{/* CTA Section */}
			<section className="py-20 px-4">
				<div className="container mx-auto">
					<div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
						<div className="max-w-2xl mx-auto text-center">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Ready to get started?
							</h2>
							<p className="text-lg text-gray-200 mb-8">
								Join thousands of developers who are already
								using RepoRunner to deploy their applications.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="max-w-xs py-2 border pl-4 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
								/>
								<button className="bg-white px-4 py-2 rounded-md text-blue-600 hover:bg-gray-100">
									Start Free Trial
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-800 py-12 px-4">
				<div className="container mx-auto">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div>
							<h4 className="font-semibold mb-4">Product</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Features
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Documentation
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Company</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Blog
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Careers
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Resources</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Community
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Support
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Status
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">Legal</h4>
							<ul className="space-y-2">
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Privacy
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Terms
									</a>
								</li>
								<li>
									<a
										href="#"
										className="text-sm text-gray-400 hover:text-white"
									>
										Security
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
						<p className="text-sm text-gray-400">
							© {new Date().getFullYear()} RepoRunner. All rights
							reserved.
						</p>
						<div className="flex items-center space-x-6 mt-4 md:mt-0">
							<a
								href="#"
								className="text-gray-400 hover:text-white"
							>
								<Github className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
