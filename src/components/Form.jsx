import SideBar from "./SideBar/SideBar"
import StepOne from "./StepOne/StepOne"
import StepTwo from "./StepTwo/StepTwo"
import StepThree from "./StepThree/StepThree"
import StepFour from "./StepFour/StepFour"
import Finish from "./Finish/Finish"

import style from './styles/Form.module.scss'
import { useSelector } from "react-redux"
const Form = () => {
    const currentStep = useSelector((state) => state.formData.currentStep)
    return (
        <div className={style.root}>
            <SideBar />
            <div className={style.container}>
                <div className={style.wrapper}>
                    {1 === currentStep ? <StepOne /> : ''}
                    {2 === currentStep ? <StepTwo /> : ''}
                    {3 === currentStep ? <StepThree /> : ''}
                    {4 === currentStep ? <StepFour /> : ''}
                    {5 === currentStep ? <Finish /> : ''}
                </div>
            </div>
        </div>
    )
}
export default Form