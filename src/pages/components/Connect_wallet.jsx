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
        <div>
          <p>CONNECT A WALLET</p>
          <Image src={close_btn} alt='close' />
        </div>
        <div>
          <div>
            <Image src={Wallet} alt='close' />
            <p>Wallet Connect</p>
          </div>
          <div>
            <Image src={metamask_wallet} alt='meta_mask' />
            <p>Metamask</p>
          </div>
        </div>
        <div>
          <div>
            <Image src={Twt} />
            <p>Metamask</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect_wallet;
