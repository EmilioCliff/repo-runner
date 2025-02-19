import { Menu } from '@/lib/types';
import { ChevronDown } from 'lucide-react';
import { useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface DesktopMenuProps {
	menu: Menu;
}

function DesktopMenu({ menu }: DesktopMenuProps) {
	const [isHovered, setIsHovered] = useState(false);
	const menuRef = useRef<HTMLLIElement>(null);
	const controls = useAnimationControls();

	const subMenuAnimate = {
		enter: {
			opacity: 1,
			rotateX: 0,
			transition: {
				duration: 0.3,
			},
			display: 'block',
		},
		exit: {
			opacity: 0,
			rotateX: -15,
			transition: {
				duration: 0.3,
				onComplete: () => {
					// Only set display to none after animation completes
					controls.set({ display: 'none' });
				},
			},
		},
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
		controls.start('enter');
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		controls.start('exit');
	};

	return (
		<motion.li
			ref={menuRef}
			className="group/link static"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:text-white">
				{menu.name}
				{menu.hasSubMenu && (
					<ChevronDown
						className={`mt-0.5 duration-200 ${
							isHovered ? 'rotate-180' : ''
						}`}
					/>
				)}
			</span>

			{menu.hasSubMenu && (
				<motion.div
					className="sub-menu"
					initial={{ display: 'none', opacity: 0, rotateX: -15 }}
					animate={controls}
					variants={subMenuAnimate}
				>
					<div className="container mx-auto">
						{' '}
						{/* Container to center content */}
						<div
							className={`
                grid gap-7 ${
					menu.gridCols === 3
						? 'grid-cols-3'
						: menu.gridCols === 2
						? 'grid-cols-2'
						: 'grid-cols-1'
				}`}
						>
							{menu?.subMenu?.map((subMenu, i) => (
								<div
									key={i}
									className="relative cursor-pointer p-2 hover:bg-gray-900/50 rounded-md"
								>
									<div className="flex-center gap-x-4 group/menubox">
										<div className="bg-white/5 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
											{subMenu.icon && (
												<subMenu.icon className="w-12 h-12 fill-blue-900" />
											)}
										</div>
										<div>
											<h6 className="font-semibold">
												{subMenu.name}
											</h6>
											<p className="text-sm text-gray-400">
												{subMenu.desc}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</motion.li>
	);
}

export default DesktopMenu;
