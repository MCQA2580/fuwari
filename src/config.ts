import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
		title: "无情",
		subtitle: "演示站点",
		lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题颜色的默认色调，从 0 到 360。例如：红色: 0, 青色: 200, 蓝青色: 250, 粉色: 345
		fixed: false, // 对访问者隐藏主题颜色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 相当于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的 credits 文本
			text: "", // 要显示的 credits 文本
			url: "", // (可选) 指向原始作品或艺术家页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 显示在表格中的最大标题深度，从 1 到 3
	},
	favicon: [
		// 留空数组以使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 图标的路径，相对于 /public 目录
		//   theme: 'light',              // (可选) 可以是 'light' 或 'dark'，仅当您有不同的明暗模式图标时设置
		//   sizes: '32x32',              // (可选) 图标的大小，仅当您有不同大小的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "加群向导",
			url: "/posts/guide/",
			external: false,
		},
		{
			name: "关于如何联系二叉树树",
			url: "/posts/contact/",
			external: false,
		},
		{
			name: "GitHub",
			url: "https://github.com/MCQA2580/fuwari",
			external: true,
		},
	],
};

export const profileConfig: ProfileConfig = {
		avatar: "assets/images/demo-avatar.png", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
		name: "无情",
		bio: "这是一个使用 Fuwari 主题的演示博客。",
		links: [
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/MCQA2580/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景颜色）正在被覆盖，请参阅 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景颜色
	theme: "github-dark",
};
