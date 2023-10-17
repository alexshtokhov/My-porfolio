import './Header.css';
import Menu from "./Menu/Menu";
import MainHeader from "./MainHeader/MainHeader";

const Header = () => {
    return (
        <header className="App-header">
            <div className='header'>
                <div className='logo'>
                    ALEX SHTOKHOV
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
