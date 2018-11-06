import { Component } from 'react';

class MainMenuMobile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row d-none">
          <div className="col-lg-12 d-none">
            <nav className="mobilemenu__nav">
              <ul className="meninmenu">
                <li><a href="index.html">Home M</a>
                  <ul>
                    <li><a href="index.html">Home Style Default</a></li>
                    <li><a href="index-2.html">Home Style Two</a></li>
                    <li><a href="index-box.html">Home Box Style</a></li>
                  </ul>
                </li>
                <li><a href="#">Pages</a>
                  <ul>
                    <li><a href="about.html">About Page</a></li>
                    <li><a href="portfolio.html">Portfolio</a>
                      <ul>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="portfolio-three-column.html">Portfolio 3 Column</a></li>
                        <li><a href="portfolio-details.html">Portfolio Details</a></li>
                      </ul>
                    </li>
                    <li><a href="my-account.html">My Account</a></li>
                    <li><a href="cart.html">Cart Page</a></li>
                    <li><a href="checkout.html">Checkout Page</a></li>
                    <li><a href="wishlist.html">Wishlist Page</a></li>
                    <li><a href="error404.html">404 Page</a></li>
                    <li><a href="faq.html">Faq Page</a></li>
                    <li><a href="team.html">Team Page</a></li>
                  </ul>
                </li>
                <li><a href="shop-grid.html">Shop</a>
                  <ul>
                    <li><a href="shop-grid.html">Shop Grid</a></li>
                    <li><a href="shop-list.html">Shop List</a></li>
                    <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                    <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                    <li><a href="shop-no-sidebar.html">Shop No sidebar</a></li>
                    <li><a href="single-product.html">Single Product</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog Page</a></li>
                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenuMobile;