import style from './SideBar.module.scss'
import { useSelector } from "react-redux";
const SideBar = () => {
    const currentStep = useSelector((state) => state.formData.currentStep);
    return (
        <div className={style.root}>
            <div className={style.step}>
                <div className={style.count} data-active={1 === currentStep ? 'true' : 'false'} >
                    <span>1</span>
                </div>
                <div className={style.title}>
                    <span>step 1</span>
                    <h2>Your info</h2>
                </div>

            </div>
            <div className={style.step}>
                <div className={style.count} data-active={2 === currentStep ? 'true' : 'false'}>
                    <span>2</span>
                </div>
                <div className={style.title}>
                    <span>step 2</span>
                    <h2>Select Plan</h2>
                </div>
            </div>
            <div className={style.step}>
                <div className={style.count} data-active={3 === currentStep ? 'true' : 'false'}>
                    <span>3</span>
                </div>
                <div className={style.title}>
                    <span>step 3</span>
                    <h2>Add-ons</h2>
                </div>
            </div>
            <div className={style.step}>
                <div className={style.count} data-active={4 === currentStep ? 'true' : '' || 5 === currentStep ? 'true' : 'false'}>
                    <span>4</span>
                </div>
                <div className={style.title}>
                    <span>step 4</span>
                    <h2>summary</h2>
                </div>
            </div>
        </div >
    )
}
export default SideBar