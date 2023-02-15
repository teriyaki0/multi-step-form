import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setCurrentStep, updateData } from '../../redux/DataSlice.js';
import style from './StepThree.module.scss'
const StepThree = () => {
    const currentData = useSelector((state) => state.formData.data)
    const dispatch = useDispatch();
    const [onlineService, setOnlineService] = useState(currentData.addons.onlineService);
    const [largerStorage, setLargerStorage] = useState(currentData.addons.largerStorage);
    const [customizableProfile, setCustomizableProfile] = useState(currentData.addons.customizableProfile);
    const goBack = () => {
        dispatch(setCurrentStep(2))
        dispatch(updateData({ ...currentData, addons: { onlineService, largerStorage, customizableProfile } }));
    }
    const handleSubmit = () => {
        dispatch(updateData({ ...currentData, addons: { onlineService, largerStorage, customizableProfile } }));
        dispatch(setCurrentStep(4))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='title'>Pick add-ons</h1>
            <p className='sub_title'>Add-ons help enhance your gaming experience.</p>
            <div className={style.root}>
                <div className={style.plan} onClick={() => setOnlineService(!onlineService)} data-selected={onlineService}>
                    <label className={style.b_contain}>
                        <input type="checkbox" checked={onlineService} />
                        <div className={style.b_input}></div>
                    </label>
                    <div className={style.info}>
                        <h1 className={style.title}>Online Service</h1>
                        <p className={style.price}>Access to multiplayer games</p>
                    </div>
                    <h1 className={style.price}>{currentData.isSwitch ? '+$10/yr' : '+$1/mo'}</h1>
                </div>
                <div className={style.plan} onClick={() => setLargerStorage(!largerStorage)} data-selected={largerStorage}>
                    <label className={style.b_contain} >
                        <input type="checkbox" checked={largerStorage} />
                        <div className={style.b_input}></div>
                    </label>
                    <div className={style.info}>
                        <h1 className={style.title}>Larger Storage</h1>
                        <p className={style.price}>Extra 1TB of cloud save</p>
                    </div>
                    <h1 className={style.price}>{currentData.isSwitch ? '+$20/yr' : '+$2/mo'}</h1>
                </div>
                <div className={style.plan} onClick={() => setCustomizableProfile(!customizableProfile)} data-selected={customizableProfile}>
                    <label className={style.b_contain}>
                        <input type="checkbox" checked={customizableProfile} />
                        <div className={style.b_input}></div>
                    </label>
                    <div className={style.info}>
                        <h1 className={style.title}>Customizable Profile</h1>
                        <p className={style.price}>Custom theme on your profile</p>
                    </div>
                    <h1 className={style.price}>{currentData.isSwitch ? '+$20/yr' : '+$2/mo'}</h1>
                </div>
            </div>

            <div className="buttons">
                <button type='submit' className='button_back' onClick={goBack}>Go Back</button>
                <button type='submit' className='button_next'>Next Step</button>
            </div>
        </form>
    )
}
export default StepThree