import { BsTelephone } from "react-icons/bs";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import PrimaryButton from "../components/ui/Button";

const page = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-6 md:py-12 lg:py-20">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				{/* Breadcrumb */}
				<nav className="mb-8 md:mb-16 lg:mb-20">
					<ul className="flex items-center gap-2 text-sm md:text-base text-gray-600">
						<li className="hover:text-gray-800 transition-colors cursor-pointer">Home</li>
						<li>/</li>
						<li className="text-gray-800 font-medium">Contact</li>
					</ul>
				</nav>

				{/* Main Content */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
					{/* Contact Information Card */}
					<div className="lg:col-span-1">
						<div className="bg-white p-6 md:p-8 lg:p-10 shadow-lg rounded-lg h-fit">
							{/* Call To Us Section */}
							<div className="border-b border-gray-200 pb-6 mb-6">
								<div className="flex items-center gap-4 mb-4">
									<span className="flex justify-center items-center rounded-full w-10 h-10 bg-red-500">
										<BsTelephone className="text-white w-4 h-4" />
									</span>
									<h3 className="text-lg font-semibold text-gray-800">Call To Us</h3>
								</div>
								<p className="text-gray-600 mb-4 leading-relaxed">
									We are available 24 hours, 7 days a week
								</p>
								<div className="space-y-1">
									<p className="text-sm text-gray-500">Phone:</p>
									<a 
										href="tel:+23491244856" 
										className="text-gray-800 font-medium hover:text-red-500 transition-colors"
									>
										+234 912 448 56
									</a>
								</div>
							</div>

							{/* Write To Us Section */}
							<div>
								<div className="flex items-center gap-4 mb-4">
									<span className="flex justify-center items-center rounded-full w-10 h-10 bg-red-500">
										<PiEnvelopeSimpleThin className="text-white w-4 h-4" />
									</span>
									<h3 className="text-lg font-semibold text-gray-800">Write To Us</h3>
								</div>

								<div className="space-y-4">
									<p className="text-gray-600 leading-relaxed">
										Fill out our form and we will contact you within 24 hours
									</p>
									
									<div className="space-y-2">
										<div>
											<span className="text-sm text-gray-500">Customer Support:</span>
											<a 
												href="mailto:customer@exclusive.com" 
												className="block text-gray-800 font-medium hover:text-red-500 transition-colors"
											>
												customer@exclusive.com
											</a>
										</div>
										<div>
											<span className="text-sm text-gray-500">Technical Support:</span>
											<a 
												href="mailto:support@exclusive.com" 
												className="block text-gray-800 font-medium hover:text-red-500 transition-colors"
											>
												support@exclusive.com
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<div className="bg-white p-6 md:p-8 lg:p-10 shadow-lg rounded-lg">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
								Send us a Message
							</h2>
							
							<form className="space-y-6">
								{/* Input Fields */}
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									<div>
										<label className="sr-only" htmlFor="name">Your Name</label>
										<input
											id="name"
											type="text"
											placeholder="Your Name *"
											className="w-full bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
											required
										/>
									</div>
									<div>
										<label className="sr-only" htmlFor="email">Your Email</label>
										<input
											id="email"
											type="email"
											placeholder="Your Email *"
											className="w-full bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
											required
										/>
									</div>
									<div className="sm:col-span-2 lg:col-span-1">
										<label className="sr-only" htmlFor="phone">Your Phone</label>
										<input
											id="phone"
											type="tel"
											placeholder="Your Phone"
											className="w-full bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
										/>
									</div>
								</div>

								{/* Message Textarea */}
								<div>
									<label className="sr-only" htmlFor="message">Your Message</label>
									<textarea
										id="message"
										placeholder="Your Message *"
										rows={6}
										className="w-full bg-gray-50 border border-gray-200 py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-vertical min-h-[120px]"
										required
									></textarea>
								</div>

								{/* Submit Button */}
								<div className="flex justify-center lg:justify-end">
									<PrimaryButton 
										type="default" 
										text="Send Message" 
										className="w-full sm:w-auto px-8 py-3"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;