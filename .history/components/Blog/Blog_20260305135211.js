import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Blog</h2>

      <div className={styles.images}>
        <img src="/images/Untitled-2.png" alt="Blogsthree" />
        <img src="/images/2.png" alt="Blogs" />
        <img src="/images/34.png" alt="Blogstwo" />
      </div>

      <p className={styles.desc}>
   "These visuals were crafted to bridge the gap between concept and reality. By transforming abstract blog topics into detailed, realistic mockups, I captured the specific essence and style of each post. This approach allows viewers to connect with the content in a tangible way, turning digital ideas into a physical brand experience."
      </p>
    </section>
  );
};

export default Blog;
