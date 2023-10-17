import laptop from "./Frame.png";
import HeaderInfo from "./HeaderInfo/HeaderInfo"
import s from "./MainHeader.module.css"
const MainHeader = () => {
    return (
        <div className={s.mainContent}>
            <div>
                <img src={laptop} className={s.laptop}/>
            </div>
            <div>
                <HeaderInfo/>
            </div>
        </div>
    );
}
export default MainHeader;