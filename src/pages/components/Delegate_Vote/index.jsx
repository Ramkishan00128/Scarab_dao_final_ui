import style from "../../../styles/Delegate_Vote.module.css";
import back_arrow from "../../../../public/laptop_theme/back icon_desktop.png";
import logo from "../../../../public/laptop_theme/Desktop_logo.png";
import Image from "next/image";
import purple_bg from "../../../../public/laptop_theme/purple_Color.png";
import Link from "next/link";
import twitter from "../../../../public/laptop_theme/twitter 1.png";
import telegram from "../../../../public/laptop_theme/telegram 1.png";
import book from "../../../../public/laptop_theme/book 1.png";
import discord from "../../../../public/laptop_theme/Discord 1.png";
import burger from "../../../../public/laptop_theme/Responsive_theme/hemburger_btn.png";
import { useState } from "react";
const index = () => {
  const [hide, setHide] = useState(false);
  const handleToggle = () => {};
  return (
    <>
      <div className={style.Scarab_pending_container}>
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
              src={purple_bg}
              alt={"purple"}
            />
          </div>
          {/* yellow_bg_end */}
          <div className={style.submit_panel}>
            <div className={style.stack_page_panel_data}>
              <p className={style.stack_page_panel_heading}>Delegate Vote</p>
              <div>
                <div className={style.proposal_panel_data_input_align}>
                  <div className={style.stack_page_balance_align}>
                    <p>
                      Before you can vote, you must assign your voting rights to
                      either yourself, or you can assign it to a third party.
                      Enter the Ethereum address of wallet to receive the voting
                      rights
                    </p>
                  </div>
                  <input className={style.input_tag} />
                  <div className={style.stack_page_balance}>
                    <div className={style.btn}>
                      <p>Delegate</p>
                    </div>
                  </div>
                  <div className={style.stack_page_balance_align}>
                    <p>
                      If you would like to delegate without paying the gas fee,
                      you can delegate by Signature instead. Once signed, please
                      note that your delegation will not be complete untill
                      someone has submitted the batch with ths submit button
                    </p>
                    <div className={style.stack_page_balance}>
                      <div className={style.midpanel_footer_btn}>
                        <div className={`${style.btn} ${style.btn_gap}`}>
                          <p>Delegate by Sign</p>
                        </div>
                        <div className={`${style.btn} ${style.btn_gap}`}>
                          <p>Submit 29 Delegate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop_mid_scarab_End */}
        <div className={style.desktop_statue_1}></div>
        <div className={style.desktop_statue_2}></div>
        {/* Desktop_right_panel_start */}
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
