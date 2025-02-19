import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { tabs, tabContent } from '@/lib/data';

const OurProducts = () => {
	const [activeTab, setActiveTab] = useState('cloud');

	return (
		<section className="pt-32 pb-20 px-4 py-16">
			<div className="container mx-auto">
				<h1 className="bg-gradient-to-r text-center mb-10 from-white to-blue-950 text-2xl font-bold tracking-tight bg-clip-text text-transparent">
					Our Products
				</h1>

				<div className="flex justify-center gap-8 pb-3 mb-8">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							className={`relative pb-2 font-medium text-xl cursor-pointer ${
								activeTab === tab.id
									? 'text-blue-600'
									: 'text-gray-500'
							}`}
							onClick={() => setActiveTab(tab.id)}
						>
							{tab.label}
							{activeTab === tab.id && (
								<motion.div
									layoutId="underline"
									className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 rounded"
								/>
							)}
						</button>
					))}
				</div>

				<motion.div
					key={activeTab}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.3 }}
					className="flex flex-col md:flex-row items-center gap-8"
				>
					{/* from supabase  */}
					<div className="w-full md:w-1/2">
						<video
							className="w-full h-auto rounded-lg shadow-md"
							loop
							autoPlay
							playsInline
							muted
							poster="/images/index/dashboard/supabase-sql-editor.png"
						>
							<source
								src="https://xguihxuzqibwxjnimxev.supabase.co/storage/v1/object/public/videos/marketing/website/supabase-sql-editor.webm"
								type="video/webm"
							/>
						</video>
					</div>

					<div className="md:w-1/2">
						<h3 className="text-2xlfont-bold mb-4 underline">
							{tabContent[activeTab].title}
						</h3>
						<p className="text-gray-600 mb-4">
							{tabContent[activeTab].description}
						</p>
						<ul className="space-y-2">
							{tabContent[activeTab].features.map(
								(feature, index) => (
									<li
										key={index}
										className="text-gray-700 flex"
									>
										<Check
											size={50}
											className="self-start mt-[-10px] stroke-blue-500 mr-2"
										/>{' '}
										{feature}
									</li>
								),
							)}
						</ul>
						<button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
							Learn More
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default OurProducts;
