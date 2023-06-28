import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarComponent() {
	return (
		<Navbar rounded>
			<Navbar.Brand href="https://flowbite-react.com">
				<span className="self-center text-[30px] font-semibold whitespace-nowrap dark:text-white">
					Hexa<span className="text-[#fe6601]">gon</span>
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<Link
							href="#"
							class="block py-2 pl-3 pr-4 text-white bg-[#fe6601] rounded md:bg-transparent md:text-[#fe6601] md:p-0 dark:text-white md:dark:text-blue-500"
							aria-current="page"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fe6601] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fe6601] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fe6601] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href="#"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#fe6601] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>
							Contact
						</Link>
					</li>
				</ul>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavbarComponent;
