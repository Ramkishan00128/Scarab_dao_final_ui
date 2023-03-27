import Image from "next/image";
import React, { useState } from "react";
import style from "../../../styles/Scarab_page.module.css";
import logo from "../../../../public/laptop_theme/Desktop_logo.png";
import Yellow_bg from "../../../../public/laptop_theme/yellow_color.png";
import twitter from "../../../../public/laptop_theme/twitter 1.png";
import telegram from "../../../../public/laptop_theme/telegram 1.png";
import book from "../../../../public/laptop_theme/book 1.png";
import discord from "../../../../public/laptop_theme/Discord 1.png";
import Link from "next/link";
import burger from "../../../../public/laptop_theme/Responsive_theme/hemburger_btn.png";

const index = () => {
  const [hide, setHide] = useState(false);
  const handleToggle = () => {};
  return (
    <>
      <div className={style.Stack_Page_container}>
        {/* Navbar_start */}
        <div className={style.Navbar}>
          <div className={style.navbar_left}>
            <a href='#'>Stack SCARAB</a>
          </div>
          <Image className={style.header_logo} src={logo} alt='logo' />
          <div className={style.navbar_right}>
            <a href='#'>Proposals</a>

            <button className={style._header_btn}>
              <p>Connect wallet</p>
            </button>
          </div>
        </div>
        {/* Navbar_end */}
        {/* yellow_bg_start */}
        <div className={style.yellow_bg_container}>
          <div className={style.yellow_bg_align}>
            <Image
              className={style.yellow_bg_theme}
              src={Yellow_bg}
              alt={"yellow"}
            />
          </div>
          {/* yellow_bg_end */}
          {/* small_mid_panel_start */}
          <div className={style.scarab_page_small_panel}>
            <div className={style.small_panel_align}>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>SCARAB Price</p>
                <p className={style.small_panel_value}>$0.0000000611</p>
              </div>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>Treasury Balance</p>
                <p className={style.small_panel_value}>69.427 ETH</p>
              </div>
            </div>
            <div className={style.small_panel_align}>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>Marketcap</p>
                <p className={style.small_panel_value}>$5,000,000</p>
              </div>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>Total Funds Sent</p>
                <p className={style.small_panel_value}>67.48 ETH</p>
              </div>
            </div>
            <div className={style.small_panel_align}>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>Total Value Locked</p>
                <p className={style.small_panel_value}>Coming Soon</p>
              </div>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>SCARAB Burned</p>
                <p className={style.small_panel_value}>26,360,067,437,366</p>
              </div>
            </div>
          </div>
        </div>
        {/* small_mid_panal_end */}

        <div className={style.desktop_statue_1}></div>
        <div className={style.desktop_statue_2}></div>
        {/* footer_start */}
        <div className={style.footer}>
          <div className={style.footer_png_container}>
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
              <Image
                className={style.footer_png}
                src={telegram}
                alt='telegram'
              />
            </Link>
            <Link href='https://web.telegram.org/'>
              <Image className={style.footer_png} src={book} alt='book' />
            </Link>
          </div>
        </div>
        {/* footer_end */}

        {/* mobile_responsive_start */}
        <div className={style.mobile_logo}>
          <Image className={style.header_logo} src={logo} alt='logo' />{" "}
          <button className={style._header_btn_mobile}>
            <p>Connect wallet</p>
          </button>
          <Image
            onClick={() => handleToggle(setHide(!hide))}
            className={style.burger}
            src={burger}
            alt='logo'
          />
        </div>
        {/* hemburger_menu_start */}
        <div className={hide == true ? style.burger_menu : style.hide_menu}>
          <div className={style.menu_item}>
            <Link href='/'>
              <p>Stake</p>
            </Link>

            <Link href='/'>
              <p>Acts of BARACS</p>
            </Link>
          </div>
        </div>
        {/* hemburger_menu_end */}
        <div className={style.footer_btn_align}>
          <button className={style.footer_button}>Stack and Vote BARACS</button>
        </div>
        {/* mobile_responsive_end */}
      </div>
    </>
  );
};

export default index;
