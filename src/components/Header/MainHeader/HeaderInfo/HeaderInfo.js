import WriteMeBTN from "./WriteMeBTN/WriteMeBTN";
import s from "./HeaderInfo.module.css"
const HeaderInfo = () => {
    return (
        <div className={s.headerInfoBlock}>
            <div>
                <h1>Web development</h1>
            </div>
            <div className={s.text}>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
            </div>
            <div>
                <WriteMeBTN/>
            </div>
        </div>
    );
};
export default HeaderInfo;