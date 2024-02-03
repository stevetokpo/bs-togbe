import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
            <div className="tagline bg-slate-900">
                <div className="container relative">                
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h6 className="text-white font-medium">Refer a friend & get $50 in credits each 🎉</h6>
                        </div>
                    </div>
                </div>
            </div>

        <nav id="topnav" className="defaultscroll is-sticky tagline-height">
            <div className="container relative">
                <Link className="logo" href="index.html">
                    <div>
                        <Image
                            src="/images/logo.png"
                            className="h-[22px] inline-block dark:hidden"
                            alt=""
                            width={64}
                            height={64}
                        />
                        <Image
                            src="/images/logo.png"
                            className="h-[22px] hidden dark:inline-block"
                            alt=""
                            width={64}
                            height={64}
                        />
                    </div>
                </Link>

                <div className="menu-extras">
                    <div className="menu-item">
                        <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
                
                <ul className="buy-button list-none mb-0">
                    <li className="dropdown inline-block relative pe-1">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle align-middle inline-flex" type="button">
                            <i data-feather="search" className="size-5"></i>
                        </button>
                        <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden" onClick="event.stopPropagation();">
                            <div className="relative">
                                <i data-feather="search" className="absolute size-4 top-[9px] end-3"></i>
                                <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none" name="s" id="searchItem" placeholder="Search..." />
                            </div>
                        </div>
                    </li>

                    <li className="dropdown inline-block relative ps-0.5">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white" type="button">
                            <i data-feather="shopping-cart" className="h-4 w-4"></i>
                        </button>
                        
                        <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden" onClick="event.stopPropagation();">
                            <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                <li>
                                    <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                        <span className="flex items-center">
                                            <Image
                                                src="/images/trendy-shirt.jpg"
                                                className="rounded shadow dark:shadow-gray-800 w-9"
                                                alt=""
                                                width={100}
                                                height={100}
                                            />
                                            <span className="ms-3">
                                                <span className="block font-semibold">T-shirt (M)</span>
                                                <span className="block text-sm text-slate-400">$320 X 2</span>
                                            </span>
                                        </span>

                                        <span className="font-semibold">$640</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                        <span className="flex items-center">
                                            <Image
                                                src="/images/luxurious-bag2.jpg"
                                                className="rounded shadow dark:shadow-gray-800 w-9"
                                                alt=""
                                                width={100}
                                                height={100}
                                            />
                                            <span className="ms-3">
                                                <span className="block font-semibold">Bag</span>
                                                <span className="block text-sm text-slate-400">$50 X 5</span>
                                            </span>
                                        </span>

                                        <span className="font-semibold">$250</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center justify-between py-1.5 px-4">
                                        <span className="flex items-center">
                                            <Image
                                                src="/images/apple-smart-watch.jpg"
                                                className="rounded shadow dark:shadow-gray-800 w-9"
                                                alt=""
                                                width={100}
                                                height={100}
                                            />
                                            <span className="ms-3">
                                                <span className="block font-semibold">Watch (Men)</span>
                                                <span className="block text-sm text-slate-400">$800 X 1</span>
                                            </span>
                                        </span>

                                        <span className="font-semibold">$800</span>
                                    </Link>
                                </li>

                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                <li className="flex items-center justify-between py-1.5 px-4">
                                    <h6 className="font-semibold mb-0">Total($):</h6>
                                    <h6 className="font-semibold mb-0">$1690</h6>
                                </li>

                                <li className="py-1.5 px-4">
                                    <span className="text-center block">
                                        <Link href="javascript:void(0)" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white">View Cart</Link>
                                        <Link href="javascript:void(0)" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white">Checkout</Link>
                                    </span>
                                    <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="inline-block ps-0.5">
                        <Link href="javascript:void(0)" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white">
                            <i data-feather="heart" className="h-4 w-4"></i>
                        </Link>
                    </li>
            
                    <li className="dropdown inline-block relative ps-0.5">
                        <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                            <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white">
                                <Image
                                    src="/images/16.jpg"
                                    className="rounded-full"
                                    alt=""
                                    width={100}
                                    height={100}
                                />
                            </span>
                        </button>
                        <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                            <ul className="py-2 text-start">
                                <li>
                                    <p className="text-slate-400 pt-2 px-4">Welcome Jesus!</p>
                                </li>
                                <li>
                                    <p className="flex items-center font-medium py-2 px-4"><i data-feather="dollar-sign" className="h-4 w-4 me-2"></i> Balance: <span className="text-orange-500 ms-2">$ 245.10</span></p>
                                </li>
                                <li>
                                    <Link href="user-account.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><i data-feather="user" className="h-4 w-4 me-2"></i>Account</Link>
                                </li>
                                <li>
                                    <Link href="helpcenter.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><i data-feather="help-circle" className="h-4 w-4 me-2"></i>Helpcenter</Link>
                                </li>
                                <li>
                                    <Link href="user-setting.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><i data-feather="settings" className="h-4 w-4 me-2"></i>Settings</Link>
                                </li>
                                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                <li>
                                    <Link href="login.html" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"><i data-feather="log-out" className="h-4 w-4 me-2"></i>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div id="navigation">
                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                            <Link href="javascript:void(0)">Hero</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="index.html" className="sub-menu-item">Fashion One</Link></li>
                                <li><Link href="index-fashion-two.html" className="sub-menu-item">Fashion Two</Link></li>
                                <li><Link href="index-fashion-three.html" className="sub-menu-item">Fashion Three</Link></li>
                                <li><Link href="index-fashion-four.html" className="sub-menu-item">Fashion Four</Link></li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="javascript:void(0)">Products</Link><span className="menu-arrow"></span>

                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Product Features</li>
                                        <li><Link href="#!" className="sub-menu-item">Bundle - Upsell</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Hot Stock</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Sticky Add To Cart</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Notify Me (Out Of Stock)</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Ask An Expert</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Variant Image Grouped</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Wishlist</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Trust Badge</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Delivery Information</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Product Features</li>
                                        <li><Link href="#!" className="sub-menu-item">Sold In Last</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Color Comparison</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product Swatches</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product Select Options</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Pre-Order</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product 3D, AR Models</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Terms And Conditions Checkbox</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Variant Metafield Description</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Variant Metafield Property</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Product Features</li>
                                        <li><Link href="#!" className="sub-menu-item">Product Video</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Size Chart</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Dynamic Checkout</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product Countdown</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Custom Content</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Custom Options</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product Combo</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Product Complementary</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Auto Discount</Link></li>
                                    </ul>
                                </li>
                        
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Product Features</li>
                                        <li><Link href="#!" className="sub-menu-item">Custom Product Tabs</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Vertical Product Tab</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Horizontal Product Tab</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Social Share</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Related Products</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Recently Viewed Products</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Custom Label</Link></li>
                                        <li><Link href="#!" className="sub-menu-item">Local Pick Up</Link></li>
                                    </ul>
                                </li>
                        
                                <li>
                                    <ul>
                                        <li className="megamenu-head">
                                            <Image
                                                src="/images/cta.png"
                                                alt=""
                                                width={100}
                                                height={100}
                                            />
                                        </li>

                                        <li className="text-center"><Link href="#!" className="py-2 px-5 inline-block font-medium tracking-wide align-middle duration-500 text-base text-center bg-orange-500/10 text-orange-500 rounded-md me-2 mt-2"><i className="mdi mdi-cart-outline"></i> Shop Now</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item"><Link href="javascript:void(0)"> Shop </Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item">
                                    <Link href="javascript:void(0)"> Shop Grid </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="shop-grid.html" className="sub-menu-item">Shop Grid</Link></li>
                                        <li><Link href="shop-grid-left-sidebar.html" className="sub-menu-item">Grid Left Sidebar</Link></li>
                                        <li><Link href="shop-grid-right-sidebar.html" className="sub-menu-item">Grid Right Sidebar</Link></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link href="javascript:void(0)"> Shop List </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="shop-list.html" className="sub-menu-item">Shop List</Link></li>
                                        <li><Link href="shop-list-left-sidebar.html" className="sub-menu-item">List Left Sidebar</Link></li>
                                        <li><Link href="shop-list-right-sidebar.html" className="sub-menu-item">List Right Sidebar</Link></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item">
                                    <Link href="javascript:void(0)"> Shop Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="product-detail-one.html" className="sub-menu-item">Product Detail One</Link></li>
                                        <li><Link href="product-detail-two.html" className="sub-menu-item">Product Detail Two</Link></li>
                                        <li><Link href="product-detail-three.html" className="sub-menu-item">Product Detail Three</Link></li>
                                    </ul>  
                                </li>
                                <li><Link href="shop-cart.html" className="sub-menu-item">Shop Cart</Link></li>
                                <li><Link href="shop-checkout.html" className="sub-menu-item">Checkout</Link></li>
                                <li><Link href="our-store.html" className="sub-menu-item">Our Store</Link></li>
                                <li><Link href="brands.html" className="sub-menu-item">Brands</Link></li>
                                <li><Link href="compare-product.html" className="sub-menu-item">Compare Product</Link></li>
                                <li><Link href="recently-viewed-product.html" className="sub-menu-item">Recently Viewed Products</Link></li>
                            </ul>
                        </li>
                
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="javascript:void(0)">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="aboutus.html" className="sub-menu-item">About Us</Link></li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> My Account</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="user-account.html" className="sub-menu-item">User Account</Link></li>
                                        <li><Link href="user-billing.html" className="sub-menu-item">Billing</Link></li>
                                        <li><Link href="user-payment.html" className="sub-menu-item">Payment</Link></li>
                                        <li><Link href="user-invoice.html" className="sub-menu-item">Invoice</Link></li>
                                        <li><Link href="user-social.html" className="sub-menu-item">Social</Link></li>
                                        <li><Link href="user-notification.html" className="sub-menu-item">Notification</Link></li>
                                        <li><Link href="user-setting.html" className="sub-menu-item">Setting</Link></li>
                                    </ul> 
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Email Template </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="email-confirmation.html" className="sub-menu-item"> Confirmation</Link></li>
                                        <li><Link href="email-cart.html" className="sub-menu-item"> Cart</Link></li>
                                        <li><Link href="email-offers.html" className="sub-menu-item"> Offers</Link></li>
                                        <li><Link href="email-order-success.html" className="sub-menu-item"> Order Success</Link></li>
                                        <li><Link href="email-gift-voucher.html" className="sub-menu-item"> Gift Voucher</Link></li>
                                        <li><Link href="email-reset-password.html" className="sub-menu-item"> Reset Password</Link></li>
                                        <li><Link href="email-item-review.html" className="sub-menu-item"> Item Review</Link></li>
                                    </ul> 
                                </li>
                        
                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="blogs.html" className="sub-menu-item"> Blogs</Link></li>
                                        <li><Link href="blog-detail.html" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>

                                <li><Link href="career.html" className="sub-menu-item">Career </Link></li>
                        
                                <li className="has-submenu parent-menu-item">
                                    <Link href="javascript:void(0)"> Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="helpcenter.html" className="sub-menu-item">Overview</Link></li>
                                        <li><Link href="helpcenter-faqs.html" className="sub-menu-item">FAQs</Link></li>
                                        <li><Link href="helpcenter-guides.html" className="sub-menu-item">Guides</Link></li>
                                        <li><Link href="helpcenter-support.html" className="sub-menu-item">Support</Link></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="login.html" className="sub-menu-item"> Login</Link></li>
                                        <li><Link href="signup.html" className="sub-menu-item"> Signup</Link></li>
                                        <li><Link href="forgot-password.html" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li><Link href="lock-screen.html" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul> 
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="terms.html" className="sub-menu-item">Terms of Services</Link></li>
                                        <li><Link href="privacy.html" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>  
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Special </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="comingsoon.html" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li><Link href="maintenance.html" className="sub-menu-item"> Maintenance</Link></li>
                                        <li><Link href="error.html" className="sub-menu-item"> 404!</Link></li>
                                    </ul> 
                                </li>

                                <li className="has-submenu parent-menu-item"><Link href="javascript:void(0)"> Multi Level Menu</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link href="javascript:void(0)" className="sub-menu-item">Level 1.0</Link></li>
                                        <li className="has-submenu child-menu-item"><Link href="javascript:void(0)"> Level 2.0 </Link><span className="submenu-arrow"></span>
                                            <ul className="submenu">
                                                <li><Link href="javascript:void(0)" className="sub-menu-item">Level 2.1</Link></li>
                                                <li><Link href="javascript:void(0)" className="sub-menu-item">Level 2.2</Link></li>
                                            </ul>  
                                        </li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                
                        <li><Link href="sale.html" className="sub-menu-item">Sale</Link></li>

                        <li><Link href="contact.html" className="sub-menu-item">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}