import { useSelector } from "react-redux"
import { Plans } from "../../redux/DataSlice"

const Cost = () => {
    const currentData = useSelector((state) => state.formData.data)
    const planCost = () => {
        let cost;
        switch (currentData.plan) {
            case Plans.Arcade:
                cost = currentData.isSwitch ? 90 : 9;
                break;
            case Plans.Advanced:
                cost = currentData.isSwitch ? 120 : 12;
                break;
            case Plans.Pro:
                cost = currentData.isSwitch ? 150 : 15;
                break;
            default:
                cost = 'ERROR';
        }
        return cost
    }
    const addonsCost = () => {
        let onlineServiceCost = currentData.isSwitch ? 10 : 1;
        let largerStorageCost = currentData.isSwitch ? 20 : 2;
        let customizableProfileCost = currentData.isSwitch ? 20 : 2;
        return {
            onlineServiceCost: onlineServiceCost,
            largerStorageCost: largerStorageCost,
            customizableProfileCost: customizableProfileCost
        }
    }
    const TotalCost = () => {
        let cost = 0;
        switch (currentData.plan) {
            case Plans.Arcade:
                cost += currentData.isSwitch ? 90 : 9;
                break;
            case Plans.Advanced:
                cost += currentData.isSwitch ? 120 : 12;
                break;
            case Plans.Pro:
                cost += currentData.isSwitch ? 150 : 15;
                break;
            default:
                cost = 'ERROR';
        }
        if (currentData.addons.onlineService) {
            cost += currentData.isSwitch ? 10 : 1;
        }
        if (currentData.addons.largerStorage) {
            cost += currentData.isSwitch ? 20 : 2;
        }
        if (currentData.addons.customizableProfile) {
            cost += currentData.isSwitch ? 20 : 2;
        }
        return cost;
    }
    return {
        planCost: planCost(),
        addonsCost: addonsCost(),
        TotalCost: TotalCost()
    }
}
export default Cost