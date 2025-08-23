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
        These images represent the evolution of the project — from the early creative concept, through refined design choices,
        to the polished final outcome. They illustrate the workflow and design process that shaped the overall vision.
      </p>
    </section>
  );
};

export default Blog;
