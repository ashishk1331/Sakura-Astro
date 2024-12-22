export function fetchBlogs() {
	const isAtDEV = import.meta.env.ENV === "DEV";
	const allPosts = Object.values(
		import.meta.glob("../pages/posts/*.md", { eager: true }),
	);
	return allPosts.filter((post) => isAtDEV || !post.frontmatter.draft);
}
