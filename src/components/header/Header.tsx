import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Components
import { useCart } from '@context/shop';
import ShoppingCart from './ShoppingCart';
// Images
import IconHome from '../../../public/favicon.png';
import IconProduct from '@images/header/products.png';
import IconCategories from '@images/header/categories.png';
import IconPrice from '@images/header/price.png';
import IconAbout from '@images/header/about.png';
import IconShop from '@images/header/shop.png';
// Styles
import Style from '@styles/header.module.scss';

const Header = () => {
    const { count: cartCount } = useCart();

    return (
        <header>
            <div className={`${Style.containerNav} nav`}>
                <input type='checkbox' id='nav-check' />
                <div className={Style.navHeader}>
                    <div className={Style.navTitle}>
                        <picture>
                            <Image
                                src={IconHome}
                                alt='Icono Home'
                                layout={'fill'}
                            />
                        </picture>
                        Gamer <p>&nbsp;Shop</p>
                    </div>
                </div>
                <div className={`${Style.navBtn} navBtn`}>
                    <label htmlFor='nav-check'>
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <div className={`${Style.navLinks} navLinks`}>
                    <Link href='/products'>
                        <a>
                            <picture>
                                <Image
                                    src={IconProduct}
                                    alt='Icono Home'
                                    layout={'fill'}
                                />
                            </picture>
                            Products
                        </a>
                    </Link>
                    <Link href='/products'>
                        <a>
                            <picture>
                                <Image
                                    src={IconCategories}
                                    alt='Icono Home'
                                    layout={'fill'}
                                />
                            </picture>
                            Categories
                        </a>
                    </Link>
                    <Link href='/products'>
                        <a>
                            <picture>
                                <Image
                                    src={IconPrice}
                                    alt='Icono Home'
                                    layout={'fill'}
                                />
                            </picture>
                            Price List
                        </a>
                    </Link>
                    <Link href='/products'>
                        <a>
                            <picture>
                                <Image
                                    src={IconAbout}
                                    alt='Icono Home'
                                    layout={'fill'}
                                />
                            </picture>
                            About
                        </a>
                    </Link>
                    <Link href='/Cart'>
                        <a className={Style.shoppingCart}>
                            <picture>
                                <Image
                                    src={IconShop}
                                    alt='Icono Home'
                                    layout={'fill'}
                                />
                            </picture>
                            <ShoppingCart cartCount={cartCount}  />
                        </a>
                    </Link>
                </div>
            </div>
            <style jsx global>
			{`
				.nav > #nav-check {
                    display: none;
                }
                @media (max-width: 425px) {
                    .nav > #nav-check:checked ~ .navLinks {
                        width: 100% !important;
                    }
                }
                @media (max-width: 1024px) {
                    #nav-check:checked ~ .navBtn {
                        position: fixed;
                    }
                    #nav-check:checked ~ .navBtn > label > span {
                        border-top: 3px solid #ffffff;
                    }
                    #nav-check:checked ~ .navBtn > label > span:nth-of-type(1){
                        transform: rotate(45deg);
                        position: absolute;
                        top: 3.2rem;
                        left: 1rem;
                    }
                    #nav-check:checked ~ .navBtn > label > span:nth-of-type(2){
                        transform: rotate(-45deg);
                        position: absolute;
                        top: 3.2rem
                    }
                    #nav-check:checked ~ .navBtn > label > span:nth-of-type(3){
                        transform: rotate(-45deg);
                        position: absolute;
                        top: 3.2rem
                    }
                    .nav > #nav-check:not(:checked) ~ .navBtn {
                        position: absolute;
                    }
                    .nav > #nav-check:not(:checked) ~ .navLinks {
                        width: 0%;
                        opacity: 0;
                        right: -10rem;
                    }
                    .nav > #nav-check:checked ~ .navLinks {
                        width: 65%;
                        height: 100%;
                        right: 0rem;
                        overflow-y: auto;
                    }
                }
			`}
			</style>
        </header>
    )
}

export default Header;