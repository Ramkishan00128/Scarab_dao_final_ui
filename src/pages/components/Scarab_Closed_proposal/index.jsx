import style from "../../../styles/closed_proposals.module.css";
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
const Index = () => {
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
              <p className={style.stack_page_panel_heading}>Closed Proposals</p>
              {/* <div className={style.Align_detailPage_detail}> */}
              <div className={style.detailpage_gap}>
                <div className={style.proposal_heading}>
                  <p className={style.details_page_underLine}>Proposal 155:</p>
                  <p className={style.details_page_underLine}>(Lorem Ispum)</p>
                </div>
                <div className={style.align_progress_1}>
                  <div className={style.progress_bar_container}>
                    <p className={style.appove_progress_level_1}>Approve</p>
                    <p className={style.appove_progress_level_2}>90%</p>
                    <div className={style.progress_bar_approve}></div>
                  </div>

                  <p className={style.result_exclude}>Result:Executed</p>
                </div>
                <div className={style.align_progress_2}>
                  <div className={style.progress_bar_container}>
                    <p className={style.appove_progress_level_1}>Reject</p>
                    <p className={style.appove_progress_level_2}>10%</p>
                    <div className={style.progress_bar_reject}></div>
                  </div>
                  <p className={style.result_exclude_1}>Result:Executed</p>
                  <p>Ended:0</p>
                </div>

                <div className={style.closed_footer_value}>
                  <p>Approved : 67,135,155,164.124</p>
                  <div className={style.Total_value}>
                    <p>Rejected : 5,354,112,827.764</p>
                    <p>Total Votes : 72.498.267</p>
                  </div>
                </div>
              </div>
              <hr className={style.h_bar} />
              {/* </div> */}
              <div className={style.detailpage_gap_1}>
                <div className={style.proposal_heading}>
                  <p className={style.details_page_underLine}>Proposal 155:</p>
                  <p className={style.details_page_underLine}>(Lorem Ispum)</p>
                </div>
                <div className={style.align_progress_1}>
                  <div className={style.progress_bar_container}>
                    <p className={style.appove_progress_level_1}>Approve</p>
                    <p className={style.appove_progress_level_2}>90%</p>
                    <div className={style.progress_bar_approve}></div>
                  </div>

                  <p>Result:Executed</p>
                </div>
                <div className={style.align_progress_2}>
                  <div className={style.progress_bar_container}>
                    <p className={style.appove_progress_level_1}>Reject</p>
                    <p className={style.appove_progress_level_2}>10%</p>
                    <div className={style.progress_bar_reject}></div>
                  </div>
                  <p>Ended:0</p>
                </div>

                <div className={style.closed_footer_value}>
                  <p>Approved : 67,135,155,164.124</p>
                  <div className={style.Total_value}>
                    <p>Rejected : 5,354,112,827.764</p>
                    <p>Total Votes : 72.498.267</p>
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

export default Index;
