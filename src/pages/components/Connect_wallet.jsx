import Image from "next/image";
import style from "../../styles/Connect_wallet.module.css";
import close_btn from "../../../public/laptop_theme/X-icon.png";
import TWT from "../../../public/laptop_theme/TWT_wallet.png";
import Wallet from "../../../public/laptop_theme/W_wallet.png";
import metamask_wallet from "../../../public/laptop_theme/metamask_wallet.png";

const Connect_wallet = () => {
  return (
    <div className={style.Connect_wallet}>
      <div className={style.align_data}>
        <div className={style.wallet_heading}>
          <p>CONNECT A WALLET</p>
          <Image className={style.close_button} src={close_btn} alt='close' />
        </div>
        <div className={style.Top_wallet}>
          <div className={style.Aligh_Top_wallet}>
            <Image src={Wallet} alt='close' />
            <p>Wallet Connect</p>
          </div>
          <div className={style.Aligh_Top_wallet}>
            <Image src={metamask_wallet} alt='meta_mask' />
            <p>Metamask</p>
          </div>
        </div>
        <div className={style.bottom_wallet}>
          <div className={style.Aligh_Top_wallet}>
            <Image src={TWT} alt='twt' />
            <p>Metamask</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect_wallet;
