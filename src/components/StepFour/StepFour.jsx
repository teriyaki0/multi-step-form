import { Fragment } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentStep, Plans } from "../../redux/DataSlice"
import Cost from "./Cost"
import style from './StepFour.module.scss'
const StepFour = () => {
    const cost = Cost()
    const currentData = useSelector((state) => state.formData.data)
    const dispatch = useDispatch();
    const obj = Object.keys(Plans)
    const goBack = () => {
        dispatch(setCurrentStep(3))
    }
    const handleSubmit = () => {
        dispatch(setCurrentStep(5))
    }

    const mode = currentData.isSwitch ? 'yr' : 'mo';
    const addonSelected = currentData.addons.onlineService || currentData.addons.largerStorage || currentData.addons.customizableProfile
    return (
        <Fragment>
            <h1 className='title'>Finishing up</h1>
            <p className='sub_title'>Double-check everything looks OK before confirming.</p>
            <div className={style.root}>
                <div className={style.content}>
                    <div className={style.plan}>
                        <div className={style.title}>{`${obj[currentData.plan - 1]}`} ({currentData.isSwitch ? 'Yearly' : 'Monthly'})</div>
                        <span className={style.change} onClick={() => dispatch(setCurrentStep(2))}>Change</span>
                    </div>
                    <b className={style.price}>${cost.planCost}/{mode}</b>
                </div>
                {
                    addonSelected && (
                        <Fragment>
                            <hr />
                            {currentData.addons.onlineService && (
                                <div className={style.content}>
                                    <div className={style.addons}>
                                        <span className={style.change}>Online Service</span>
                                    </div>
                                    <div className={style.price}>+${cost.addonsCost.onlineServiceCost}/{mode}</div>
                                </div>
                            )}
                            {currentData.addons.largerStorage && (
                                <div className={style.content}>
                                    <div className={style.addons}>
                                        <span className={style.change}>Larger Storage</span>
                                    </div>
                                    <div className={style.price}>+${cost.addonsCost.largerStorageCost}/{mode}</div>
                                </div>
                            )}
                            {currentData.addons.customizableProfile && (
                                <div className={style.content}>
                                    <div className={style.addons}>
                                        <span className={style.change}>Customizable Profile</span>
                                    </div>
                                    <div className={style.price}>+${cost.addonsCost.customizableProfileCost}/{mode}</div>
                                </div>
                            )}
                        </Fragment>
                    )
                }
            </div >
            <div className={style.total}>
                <span className={style.change}>Total (per {currentData.isSwitch ? 'year' : 'month'})</span>
                <div className={style.price}>${cost.TotalCost}/{mode}</div>
            </div>
            <div className="buttons">
                <button type='submit' className='button_back' onClick={goBack}>Go Back</button>
                <button type='submit' className='button_next confirm' onClick={handleSubmit}>Confirm</button>
            </div>
        </Fragment >
    )
}
export default StepFour