import style from './Finish.module.scss'
import thankIcon from '../../assets/images/icon-thank-you.svg'
const Finish = () => {
    return (
        <div className={style.root}>
            <div className={style.card}>
                <img src={thankIcon} alt='icon' />
                <h1 className={style.title}>Thank You!</h1>
                <p className={style.sub_title}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}
export default Finish