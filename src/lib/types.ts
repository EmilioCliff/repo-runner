import { LucideIcon } from 'lucide-react';
import { FC, SVGProps } from 'react';

export interface SubMenu {
	name: string;
	desc?: string;
	icon?: FC<SVGProps<SVGSVGElement>>;
}

export interface Menu {
	name: string;
	subMenuHeading?: string[];
	hasSubMenu: boolean;
	subMenu?: SubMenu[];
	gridCols?: number;
}
