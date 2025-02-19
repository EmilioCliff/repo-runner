import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Menu as MenuType, SubMenu } from '@/lib/types';

interface MobMenuProps {
	Menus: MenuType[];
}

export default function MobMenu({ Menus }: MobMenuProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [clicked, setClicked] = useState<number | null>(null);

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
		setClicked(null);
	};

	const subMenuDrawer = {
		enter: {
			height: 'auto',
			overflow: 'hidden',
		},
		exit: {
			height: 0,
			overflow: 'hidden',
		},
	};

	return (
		<div>
			<button
				className="lg:hidden z-[999] relative"
				onClick={toggleDrawer}
			>
				{isOpen ? <X /> : <Menu />}
			</button>
			<motion.div
				className="fixed inset-0 bg-primary text-white px-[30px] py-16 min-h-screen w-screen backdrop-blur-md z-[998] overflow-y-auto"
				initial={{ x: '-100%' }}
				animate={{ x: isOpen ? '0%' : '-100%' }}
				transition={{ type: 'spring', stiffness: 100 }}
			>
				<ul className="space-y-4">
					{Menus.map((menu: MenuType, i) => {
						const isClicked = clicked === i;
						return (
							<li key={menu.name}>
								<span
									style={{ padding: '1rem' }}
									className="flex justify-between items-center hover:bg-white/10 rounded-md cursor-pointer"
									onClick={() =>
										setClicked(isClicked ? null : i)
									}
								>
									{menu.name}
									{menu.hasSubMenu && (
										<ChevronDown
											style={{
												width: '18px',
												height: '18px',
											}}
											className={`ml-auto transition-transform ${
												isClicked ? 'rotate-180' : ''
											}`}
										/>
									)}
								</span>
								{menu.hasSubMenu && (
									<motion.ul
										initial="exit"
										animate={isClicked ? 'enter' : 'exit'}
										variants={subMenuDrawer}
										className="ml-5 space-y-2"
									>
										{menu.subMenu?.map(
											(subMenu: SubMenu) => (
												<li
													style={{
														padding: '6px',
														marginLeft: '1.5rem',
													}}
													key={subMenu.name}
													className="flex items-center gap-2 hover:bg-white/5 rounded-md cursor-pointer"
												>
													{subMenu.icon && (
														<subMenu.icon className="w-8 h-8 fill-blue-900" />
													)}
													{subMenu.name}
												</li>
											),
										)}
									</motion.ul>
								)}
							</li>
						);
					})}
				</ul>
			</motion.div>
		</div>
	);
}
