import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/data/seo";
import { articles, categories, articleHref, idFor } from "@/data/articles";

export default function BlogArticle({ article }) {
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="main-wrapper">
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog/" },
            { name: article.shortTitle, path: articleHref(article) },
          ]),
        ]}
      />
      <Header />

      <section className="page-header">
        <div className="page-header-bg">
          <img src={article.image} alt="" />
        </div>
        <div className="container">
          <div className="page-header-inner">
            <h1 className="page-header-article-title">{article.title}</h1>
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="/">Home</a></li>
              <li><span>/</span></li>
              <li><a href="/blog/">Blog</a></li>
              <li><span>/</span></li>
              <li>{article.shortTitle}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="blog-content-wrapper">
                <div className="blog-main-content">
                  <div className="blog-hero-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="blog-meta-stats">
                    <span className="meta-item">
                      <i className="fa-solid fa-folder-open"></i>
                      {article.category}
                    </span>
                    <span className="meta-item">
                      <i className="fa-regular fa-clock"></i>
                      {article.readTime}
                    </span>
                  </div>
                  <div className="article-intro">
                    <p>{article.intro}</p>
                  </div>
                  <div className="article-body">
                    {article.sections.map((s) => (
                      <div key={s.heading}>
                        <h2 id={idFor(s.heading)}>{s.heading}</h2>
                        {s.paras.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                        {s.list && (
                          <ul className="content-list">
                            {s.list.map((li) => (
                              <li key={li}>{li}</li>
                            ))}
                          </ul>
                        )}
                        {s.callout && (
                          <div className="info-box-1">
                            <div className="info-icon">
                              <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <div className="info-content">
                              <h3>{s.callout.title}</h3>
                              <p>{s.callout.text}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    <p>
                      <em>
                        This article is general health information and is not a substitute for a
                        personal consultation. If you have symptoms, please see a doctor.
                      </em>
                    </p>
                  </div>
                </div>
              </div>

              <div className="article-meta">
                <div className="tags-box">
                  <span className="tags-title">Tags:</span>
                  {article.tags.map((t) => (
                    <a href="/blog/" className="tag-link" key={t}>{t}</a>
                  ))}
                </div>
                <div className="share-box">
                  <span className="share-title">Share:</span>
                  <div className="social-links">
                    <a href="https://www.facebook.com/" className="social-link"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/" className="social-link"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/" className="social-link"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://x.com/" className="social-link"><i className="fa-brands fa-x-twitter"></i></a>
                  </div>
                </div>
              </div>

              <div className="comment-list">
                <div className="comment-group-title">
                  <h2>Comments</h2>
                </div>
                <div className="single-comment-item">
                  <div className="leave-comment">
                    <div className="row">
                      <div className="col-lg-12 col-md-10 col-sm-12 col-12">
                        <h2>Leave a comment</h2>
                        <p>You must sign in to make or comment on a post</p>
                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="col-12">
                              <textarea placeholder="Comment..."></textarea>
                            </div>
                            <div className="col-12">
                              <button type="button" className="btn btn-primary">Post Comment</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12">
              <aside className="blog-sidebar">
                <div className="row g-4">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="sidebar-widget toc-widget">
                      <h3 className="widget-title">Table of Contents</h3>
                      <nav className="toc-nav">
                        {article.sections.map((s, i) => (
                          <a href={`#${idFor(s.heading)}`} className="toc-link" key={s.heading}>
                            {i + 1}. {s.heading}
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-6 col-12">
                    <div className="sidebar-widget related-widget">
                      <h3 className="widget-title">Related Articles</h3>
                      <div className="related-articles">
                        {related.map((a) => (
                          <article className="related-article d-flex gap-3" key={a.slug}>
                            <div className="related-thumb">
                              <a href={articleHref(a)}><img src={a.image} alt="" /></a>
                            </div>
                            <div className="related-content">
                              <h2><a href={articleHref(a)}>{a.title}</a></h2>
                              <span>{a.category}</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-6 col-12">
                    <div className="sidebar-widget categories-widget">
                      <h3 className="widget-title">Categories</h3>
                      <ul className="categories-list list-unstyled mb-0">
                        {categories.map((c) => (
                          <li key={c}><a href="/blog/">{c}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
