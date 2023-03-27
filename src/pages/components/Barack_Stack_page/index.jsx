import style from "../../../styles/Baracks_stack_page.module.css";
import back_arrow from "../../../../public/laptop_theme/back icon_desktop.png";
import logo from "../../../../public/laptop_theme/Desktop_logo.png";
import Image from "next/image";
import Yellow_bg from "../../../../public/laptop_theme/purple_with_light.png";
import Link from "next/link";
import twitter from "../../../../public/laptop_theme/twitter 1.png";
import telegram from "../../../../public/laptop_theme/telegram 1.png";
import book from "../../../../public/laptop_theme/book 1.png";
import discord from "../../../../public/laptop_theme/Discord 1.png";
import burger from "../../../../public/laptop_theme/Responsive_theme/hemburger_btn.png";
import { useState } from "react";

const Index = () => {
  const [hide, setHide] = useState(false);
  const handleToggle = () => {};
  return (
    <>
      <div className={style.Scarab_Stack_Page_container}>
        {/* Navbar_start */}
        <div className={style.Navbar}>
          <div className={style.navbar_left}>
            <button className={style._header_btn_back_button}>
              <Image
                className={style.arrow_png}
                src={back_arrow}
                alt='back_arrow'
              ></Image>
              <p>Back</p>
            </button>
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
            <div className={style.align_responsive_panel}>
              <div className={style.small_responsive_panel}>
                <p className={style.small_panel_heading}>SCARAB Price</p>
                <p className={style.small_panel_value}>$0.0000000611</p>
              </div>
              <div className={style.small_responsive_panel}>
                <p className={style.small_panel_value_black}>
                  Check ABCD mander
                </p>
              </div>
            </div>

            <div className={style.small_panel_align}>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>SCARAB Price</p>
                <p className={style.small_panel_value}>$0.0000000611</p>
              </div>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>APR</p>
                <p className={style.small_panel_value}>8.7%</p>
              </div>
              <div className={style.small_panel}>
                <p className={style.small_panel_heading}>
                  Total BARACS Stacked
                </p>
                <p className={style.small_panel_value}>24,750,746,073,238</p>
              </div>
            </div>
            <div className={style.small_panel_align_mid}>
              <div className={style.stack_page_panel_mid}>
                <div className={style.stack_page_panel_data}>
                  <p className={style.stack_page_panel_heading}>Stack SCARAB</p>
                  <div className={style.stack_page_balance_align}>
                    <p>Balance:</p>
                    <p>0</p>
                  </div>
                  <input className={style.input_tag} />
                  <div className={style.stack_page_balance}>
                    <div className={style.btn}>
                      <p>Approve</p>
                    </div>
                  </div>
                </div>
                {/* new */}
                <div className={style.stack_page_panel_data_mid}>
                  <div className={style.stack_page_balance_align}>
                    <p>uSCARAB</p>
                    <p>0</p>
                  </div>
                  <div className={style.input_with_maxBtn}>
                    <input className={style.input_tag_1} />
                    <button className={style.max_btn}>MAX</button>
                  </div>
                  <div className={style.stack_page_balance}>
                    <div className={style.btn}>
                      <p>Withdraw</p>
                    </div>
                  </div>
                </div>
                {/* /new2 */}
                <div className={style.stack_page_panel_data_footer}>
                  <div className={style.stack_page_balance_align}>
                    <p>Claimable SCARAB</p>
                    <p>0</p>
                  </div>

                  <div className={style.stack_page_balance}>
                    <div className={style.btn}>
                      <p>Claim</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.align_responsive_panel_1}>
              <div className={style.small_responsive_panel}>
                <p className={style.small_panel_heading}>APR</p>
                <p
                  className={`${style.small_panel_value} ${style.abcd_mander}`}
                >
                  6.96266055%
                </p>
              </div>
              <div className={style.small_responsive_panel}>
                <p className={style.small_panel_heading}>Opt-ln as</p>
                <p className={style.small_panel_value_black}>ABCD mander</p>
              </div>
            </div>
            <divh className={style.small_panel_align_right_side}>
              <div className={style.small_panel_1}>
                <p>
                  Check <span className={style.abcd_mander}>ABCD mander</span>
                </p>
              </div>
              <div className={style.small_panel_2}>
                <p>
                  Check <span className={style.abcd_mander}>ABCD mander</span>
                </p>
              </div>
            </divh>
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

export default Index;
