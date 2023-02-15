import { Fragment } from "react"
import ArcadeIcon from '../../assets/images/icon-arcade.svg'
import AdvancedIcon from '../../assets/images/icon-advanced.svg'
import ProIcon from '../../assets/images/icon-pro.svg'
import { setCurrentStep, updateData, Plans } from '../../redux/DataSlice.js';
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import style from './StepTwo.module.scss'
const StepTwo = () => {

    const currentData = useSelector((state) => state.formData.data);
    const dispatch = useDispatch();
    const [plan, setPlan] = useState(currentData.plan)
    const [isSwitch, setIsSwitch] = useState(currentData.isSwitch)

    const goBack = () => {
        dispatch(updateData({ ...currentData, plan, isSwitch }));
        dispatch(setCurrentStep(1))
    }

    const handleSubmit = () => {
        dispatch(updateData({ ...currentData, plan, isSwitch }));
        dispatch(setCurrentStep(3))
    }
    return (
        <Fragment>
            <h1 className='title'>Select your plan</h1>
            <p className='sub_title'>You have the option of monthly or yearle billing.</p>
            <form onSubmit={handleSubmit}>
                <div className={style.root}>
                    <div className={style.plan} data-selected={plan === Plans.Arcade ? 'true' : 'false'} onClick={() => setPlan(Plans.Arcade)}>
                        <img src={ArcadeIcon} alt='arcade-icon' />
                        <div className="planing">
                            <h1 className={style.title}>Arcade</h1>
                            <p className={style.price}>{isSwitch ? '$90/yr' : '$9/mo'}</p>
                            {isSwitch && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                    <div className={style.plan} data-selected={plan === Plans.Advanced ? 'true' : 'false'} onClick={() => setPlan(Plans.Advanced)}>
                        <img src={AdvancedIcon} alt='advanced-icon' />
                        <div className="planing">
                            <h1 className={style.title}>Advanced</h1>
                            <p className={style.price}>{isSwitch ? '$120/yr' : '$12/mo'}</p>
                            {isSwitch && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                    <div className={style.plan} data-selected={plan === Plans.Pro ? 'true' : 'false'} onClick={() => setPlan(Plans.Pro)}>
                        <img src={ProIcon} alt='pro-icon' />
                        <div className="planing">
                            <h1 className={style.title}>Pro</h1>
                            <p className={style.price}>{isSwitch ? '$150/yr' : '$15/mo'}</p>
                            {isSwitch && (
                                <b>2 months free</b>
                            )}
                        </div>
                    </div>
                </div >
                <div className={style.switch}>
                    <span style={{ color: isSwitch ? '#C5C5CF' : '#01295C' }}>Monthly</span>
                    <input
                        type='checkbox'
                        checked={isSwitch}
                    />
                    <label
                        htmlFor='switch'
                        className='switch-label'
                        onClick={() => setIsSwitch(!isSwitch)}
                    ></label>
                    <span style={{ color: isSwitch ? '#01295C' : '#C5C5CF' }}>Yearly</span>
                </div>
                <div className="buttons">
                    <button type='submit' className='button_back' onClick={goBack}>Go Back</button>
                    <button type='submit' className='button_next'>Next Step</button>
                </div>
            </form >
        </Fragment >
    )
}
export default StepTwo