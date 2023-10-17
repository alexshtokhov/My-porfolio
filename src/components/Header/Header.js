import './Header.module.css';
import Menu from "./Menu/Menu";
import MainHeader from "./MainHeader/MainHeader";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.appHeader}>
            <div className={s.header}>
                <div className={s.logo}>
                    AS
                </div>
                <div>
                    <Menu/>
                </div>
            </div>
            <div>
                <MainHeader/>
            </div>
        </header>

    );
}
export default Header;
