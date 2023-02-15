import { createSlice } from '@reduxjs/toolkit';

export const Plans = {
    Arcade: 1,
    Advanced: 2,
    Pro: 3,
}

const DataSlice = createSlice({
    name: 'formData',
    initialState: {
        currentStep: 1,
        data: {
            name: '',
            email: '',
            phone: '',
            plan: Plans.Arcade,
            isSwitch: false,
            addons: {
                onlineService: false,
                largerStorage: false,
                customizableProfile: false,
            }
        }
    },
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        updateData: (state, action) => {
            state.data = { ...state.data, ...action.payload };
        },
    }

});

export const { setCurrentStep, updateData } = DataSlice.actions;

export default DataSlice.reducer;
