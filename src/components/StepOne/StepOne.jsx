import { setCurrentStep, updateData } from '../../redux/DataSlice.js';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Fragment } from 'react';
import style from './StepOne.module.scss';

const StepOne = () => {
    const currentData = useSelector((state) => state.formData.data);
    const dispatch = useDispatch();

    const phoneRegex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;

    const formik = useFormik({
        initialValues: {
            name: currentData.name,
            email: currentData.email,
            phone: currentData.phone,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required.').max(50, 'Name must be 50 characters or less.'),
            email: Yup.string().email('Invalid email address.').required('Email address is required.'),
            phone: Yup.string().matches(phoneRegex, 'Invalid phone number.').required('Phone number is required.'),
        }),
        onSubmit: (values) => {
            dispatch(updateData({
                ...currentData,
                name: values.name,
                email: values.email,
                phone: values.phone,
            }));
            dispatch(setCurrentStep(2));
        }
    });

    return (
        <Fragment>
            <h1 className='title'>Personal info</h1>
            <p className='sub_title'>Please provide your name, email address, and phone number.</p>
            <form onSubmit={formik.handleSubmit}>
                <div className={style.yourinfo}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <span>{formik.errors.name && formik.touched.name ? formik.errors.name : ''}</span>
                    </div>
                    <input
                        type='text'
                        name='name'
                        className={style.input}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        placeholder='e.g Stephen King'
                        data-error={formik.errors.name && formik.touched.name ? 'true' : 'false'}
                        onBlur={formik.handleBlur}
                    />
                    <div>
                        <label htmlFor="name">Email Address</label>
                        <span>{formik.errors.email && formik.touched.email ? formik.errors.email : ''}</span>
                    </div>
                    <input type="email"
                        name="email" className={style.input}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder='e.g. stephenking@lorem.com'
                        data-error={formik.errors.email && formik.touched.email ? 'true' : 'false'}
                        onBlur={formik.handleBlur}
                    />
                    <div>
                        <label htmlFor="name">Phone Number</label>
                        <span>{formik.errors.phone && formik.touched.phone ? formik.errors.phone : ''}</span>
                    </div>
                    <input type='tel'
                        name='phone'
                        className={style.input}
                        placeholder='89043896122'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        data-error={formik.errors.phone && formik.touched.phone ? 'true' : 'false'}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <button type='submit' className='button_next'>Next Step</button>
            </form >
        </Fragment>
    )
}
export default StepOne