import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.styleGuide}>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.blogItem}>
        <img src="/images/Untitled-2.png" alt="Blogsthree" />
        <p className={styles.desc}>This image highlights the creative concept stage, showing the rough layout and design planning for the project.</p>
      </div>

      <div className={styles.blogItem}>
        <img src="/images/2.png" alt="Blogs" />
        <p className={styles.desc}>This visual represents the refined design process, focusing on colors, typography, and balance.</p>
      </div>

      <div className={styles.blogItem}>
        <img src="/images/34.png" alt="Blogstwo" />
        <p className={styles.desc}>This final image showcases the completed version, polished and ready for presentation.</p>
      </div>
    </section>
  );
};

export default Blog;
