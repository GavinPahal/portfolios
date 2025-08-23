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
      These images were created to realistically represent the blogs, 
      turning concepts into detailed visuals that capture the content, style, and overall feel of each post, helping viewers connect with the material in a tangible way."
      </p>
    </section>
  );
};

export default Blog;
