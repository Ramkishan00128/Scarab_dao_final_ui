import Image from "next/image";
import Link from "next/link";

import style from "../../../styles/Home_page.module.css";
import logo from "../../../../public/laptop_theme/Desktop_logo.png";
import green_color from "../../../../public/laptop_theme/green_color.png";
import blue_color from "../../../../public/laptop_theme/blue_color.png";
import red_color from "../../../../public/laptop_theme/red_color.png";
import scarab_with_light_1 from "../../../../public/laptop_theme/Scarab_1_with_light.png";
import scarab_with_light_2 from "../../../../public/laptop_theme/scarab-2_with_light.png";
import scarab_with_light_3 from "../../../../public/laptop_theme/scarab-3_with_light.png";
import twitter from "../../../../public/laptop_theme/twitter 1.png";
import telegram from "../../../../public/laptop_theme/telegram 1.png";
import book from "../../../../public/laptop_theme/book 1.png";
import discord from "../../../../public/laptop_theme/Discord 1.png";
import upArrow from "../../../../public/laptop_theme/arrow 1.png";
import burger from "../../../../public/laptop_theme/Responsive_theme/hemburger_btn.png";
import Arrow_left from "../../../../public/laptop_theme/Responsive_theme/arrow_left.png";
import Arrow_right from "../../../../public/laptop_theme/Responsive_theme/arrow_right.png";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";

const Home_page = () => {
  const [hide, setHide] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [green_color, red_color, blue_color];
  const Scarab_images = [
    scarab_with_light_1,
    scarab_with_light_2,
    scarab_with_light_3,
  ];
  const datatext = [
    "INVESTING IN REVOLUTION",
    "FIGHT AGAINST CENTRALIZATION",
    "FIGHT AGAINST CENTRALIZATION",
  ];
  const datatext_desktop = [
    "INVESTING IN REVOLUTION",
    "FIGHT AGAINST CENTRALIZATION",
    "Full DISTRIBUTION",
  ];

  const nextImage = () => {
    if (slideIndex === 0 || slideIndex === 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };
  const previousImage = () => {
    if (slideIndex === 2 || slideIndex === 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(2);
    }
  };

  const handleToggle = () => {};
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex, images.length]);
  return (
    <>
      <div className={style.Home_Page_container}>
        {/* header_Start */}
        <div className={style.Navbar}>
          <div className={style.navbar_left}>
            <button className={style._header_btn}>
              <p>stack and Vote</p>
              <p>SCARAB</p>
            </button>

            <a href='#'>Lorem Ispum</a>
            <a href='#'>Lorem Ispum</a>
          </div>
          <Image className={style.header_logo} src={logo} alt='logo' />
          <div className={style.navbar_right}>
            <a href='#'>Lorem Ispum</a>
            <a href='#'>Lorem Ispum</a>

            <button className={style._header_btn}>
              <p>stack and Vote {""}</p>
              <p>BARACS</p>
            </button>
          </div>
        </div>
        <p className={style.desktop_left_heading}>
          {datatext_desktop[slideIndex]}
        </p>
        {/* header_End */}
        {/* Desktop_mid_scarab_Start */}
        <div className={style.green_bg_container}>
          <div className={style.green_bg_align}>
            <Image
              className={style.green_bg_theme}
              src={images[slideIndex]}
              alt={`Slide ${slideIndex}`}
            />
          </div>
          <Image
            className={style.scarab_with_light_1}
            src={Scarab_images[slideIndex]}
            alt='green_bg'
          />
          <div className={style.desktop_footer_mid}>
            <Image className={style.upArrow} src={upArrow} alt='Uparrow' />
            <p>BECOME PART OF SCARAB DAO</p>
            <div className={style.footer_circle}>
              <span
                className={`${style.circle} ${
                  slideIndex === 0 ? style.circle_fill : ""
                }`}
              ></span>
              <span
                className={`${style.circle} ${
                  slideIndex === 1 ? style.circle_fill : ""
                }`}
              ></span>
              <span
                className={`${style.circle} ${
                  slideIndex === 2 ? style.circle_fill : ""
                }`}
              ></span>
            </div>
          </div>
        </div>
        {/* Desktop_mid_scarab_End */}
        <div className={style.desktop_statue_1}></div>
        <div className={style.desktop_statue_2}></div>
        {/* Desktop_right_panel_start */}
        <div className={style.desktop_HomePage_panel}>
          <div className={style.desktop_home_panel_and_button}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit asperiores ullam laborum dicta facilis doloremque
              reiciendis tempo voluptates temporibus nam vitae corporis rem
              rerum obcaecati et.
            </p>
            <div className={style.desktop_btn}>Lorem Ispum</div>
          </div>
        </div>
        {/* Desktop_right_panel_End */}
        {/* Desktop_footer_start */}

        <div className={style.desktop_footer_right_icon}>
          <Link href='https://twitter.com/'>
            <Image
              className={style.footer_png}
              src={twitter}
              alt='twitter_png'
            />
          </Link>
          <Link href='https://discord.com/'>
            <Image className={style.footer_png} src={discord} alt='discord' />
          </Link>
          <Link href={"https://web.telegram.org/"}>
            <Image className={style.footer_png} src={telegram} alt='telegram' />
          </Link>
          <Link href='https://web.telegram.org/'>
            <Image className={style.footer_png} src={book} alt='book' />
          </Link>
        </div>

        {/* Desktop_footer_end */}

        {/* Mobile_responsive_start */}

        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          exit={{ x: "-100%" }}
          className={`${style.drawer} ${hide && style.hide}`}
        >
          <ul className={style.nav_list}>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
            <li>lorem Ispum</li>
          </ul>
          <button className={style.drawer_btn}>Stack and Vote SCARAB</button>
          <button className={style.drawer_btn}>Stack and Vote BARACS</button>
        </motion.div>

        <div className={style.mobile_logo}>
          <Image className={style.header_logo} src={logo} alt='logo' />
          <Image
            onClick={() => handleToggle(setHide(!hide))}
            className={style.burger}
            src={burger}
            alt='logo'
          />
        </div>
        <div className={style.arrow}>
          <Image
            onClick={() => previousImage()}
            src={Arrow_left}
            alt='leftArrow'
          />
          <Image
            onClick={() => nextImage()}
            src={Arrow_right}
            alt='rightArrow'
          />
        </div>
        <div className={style.panel_container}>
          <div className={style.panel_text}>
            <h2>{datatext[slideIndex]}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisi elit. Laborum ex
              enim corrupti tempo tempore officiis aliquam rerum distinctio
              praesentium modi qui , odit sint provident aliquid sapiente!
            </p>
            <div className={style.button_container}>
              <div className={style.btn_png}>
                <p className={style.btn_text}>Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile_responsive_end */}
      </div>
    </>
  );
};

export default Home_page;
