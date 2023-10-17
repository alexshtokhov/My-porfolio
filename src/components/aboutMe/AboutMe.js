import s from "./AboutMe.module.css"

const AboutMe = () => {
    return (
        <div>
        <div className={s.title}>
            <h2>About me</h2>
        </div>
            <div className={s.text}>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                    вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
                    на латинице с начала XVI века.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;