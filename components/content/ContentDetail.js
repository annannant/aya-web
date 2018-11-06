import { Component } from 'react'
import Link from 'next/link'
import ContentHeader from './ContentHeader';

export default class ContentDetail extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <ContentHeader />
        <div className="page-blog-details pt--80 pb--45 bg--white">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-12">
                <div className="blog-details content">
                  <article className="blog-post-details">
                    <div className="post-thumbnail">
                      <img src="/static/assets/images/portfolio/big-img/1.jpg" alt="portfolio images" />
                    </div>
                    <div className="post_wrapper">
                      <div className="post_header">
                        <h2>All you need right here</h2>
                        <ul className="post_author">
                          <li>Posts by : <a href="#">Hastech</a></li>
                          <li className="post-separator">/</li>
                          <li>Mar 10 2018</li>
                        </ul>
                      </div>
                      <div className="post_content">
                        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p>
                      </div>
                      <ul className="blog_meta">
                        {/* <li><a href="#">3 comments</a></li>
                        <li> / </li> */}
                        <li>Tags:<span>fashion</span> <span>t-shirt</span> <span>white</span></li>
                      </ul>
                      <ul className="social__net--4 d-flex justify-content-start">
                        <li><a href="#"><i className="zmdi zmdi-rss" /></a></li>
                        <li><a href="#"><i className="zmdi zmdi-linkedin" /></a></li>
                        <li><a href="#"><i className="zmdi zmdi-vimeo" /></a></li>
                        <li><a href="#"><i className="zmdi zmdi-tumblr" /></a></li>
                        <li><a href="#"><i className="zmdi zmdi-google-plus" /></a></li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-3 col-12 md-mt-40 sm-mt-40">
                <div className="wn__sidebar">
                  {/* Start Single Widget */}
                  <aside className="widget search_widget">
                    <h3 className="widget-title">Search</h3>
                    <form action="#">
                      <div className="form-input">
                        <input type="text" placeholder="Search..." />
                        <button><i className="fa fa-search" /></button>
                      </div>
                    </form>
                  </aside>
                  {/* End Single Widget */}
                  {/* Start Single Widget */}
                  <aside className="widget recent_widget">
                    <h3 className="widget-title">Recent</h3>
                    <div className="recent-posts">
                      <ul>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html"><img src="/static/assets/images/blog/sm-img/1.jpg" alt="blog images" /></a>
                            </div>
                            <div className="content">
                              <h4><a href="blog-details.html">Blog image post</a></h4>
                              <p>	March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html"><img src="/static/assets/images/blog/sm-img/2.jpg" alt="blog images" /></a>
                            </div>
                            <div className="content">
                              <h4><a href="blog-details.html">Post with Gallery</a></h4>
                              <p>	March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html"><img src="/static/assets/images/blog/sm-img/3.jpg" alt="blog images" /></a>
                            </div>
                            <div className="content">
                              <h4><a href="blog-details.html">Post with Video</a></h4>
                              <p>	March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html"><img src="/static/assets/images/blog/sm-img/4.jpg" alt="blog images" /></a>
                            </div>
                            <div className="content">
                              <h4><a href="blog-details.html">Maecenas ultricies</a></h4>
                              <p>	March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-wrapper d-flex">
                            <div className="thumb">
                              <a href="blog-details.html"><img src="/static/assets/images/blog/sm-img/5.jpg" alt="blog images" /></a>
                            </div>
                            <div className="content">
                              <h4><a href="blog-details.html">Blog image post</a></h4>
                              <p>	March 10, 2015</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </aside>
                  {/* End Single Widget */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

