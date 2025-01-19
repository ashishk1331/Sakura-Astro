import DaysCodeLogo from "./100_days_of_code_logo.svg";
import BleachLogo from "./bleach_logo.svg";
import BFCompilerLogo from "./compiler_logo.svg";
import CrackNutLogo from "./crack_the_nut_logo.svg";
import FolderLogo from "./folder_routing_logo.svg";
import ImageAlgoLogo from "./imgs_logo.svg";
import TetraLogo from "./tetrapack_logo.svg";
import Feather from "./feather_logo.svg";
import Altar from "./altar_logo.svg";
import Commit from "./commit_logo.svg";

type ProjectType = {
	title: string;
	link: string;
	imageSource: string;
};

export const PROJECTS: Record<string, ProjectType> = {
	feather: {
		title: "feather",
		link: "https://feather-website.vercel.app/",
		imageSource: Feather.src,
	},
	altar: {
		title: "altar",
		link: "https://github.com/ashishk1331/altar",
		imageSource: Altar.src,
	},
	commit: {
		title: "commit",
		link: "https://commit-neon.vercel.app/",
		imageSource: Commit.src,
	},
	tetra_data: {
		title: "tetrapack",
		link: "https://tetra-docs.vercel.app/",
		imageSource: TetraLogo.src,
	},
	folder_routing_data: {
		title: "folder-routing",
		link: "https://github.com/ashishk1331/folder-routing",
		imageSource: FolderLogo.src,
	},

	crack_the_nut_data: {
		title: "crack the nut",
		link: "https://flower-stork-026.notion.site/Crack-The-Nut-Nov-24-edition-12e8d9750c69801a83f6ea583895b86e",
		imageSource: CrackNutLogo.src,
	},
	days_of_code_data: {
		title: "100 days of code",
		link: "https://100-days-of-code-ten.vercel.app/",
		imageSource: DaysCodeLogo.src,
	},

	bleach_db_data: {
		title: "bleach db",
		link: "https://github.com/ashishk1331/bleach-database",
		imageSource: BleachLogo.src,
	},
	image_algos_data: {
		title: "image algorithms repo",
		link: "https://github.com/ashishk1331/Image-Algorithms",
		imageSource: ImageAlgoLogo.src,
	},
	bf_compiler_data: {
		title: "brainfuck compiler",
		link: "https://github.com/ashishk1331/BrainFuck-Compiler",
		imageSource: BFCompilerLogo.src,
	},
} as const;
