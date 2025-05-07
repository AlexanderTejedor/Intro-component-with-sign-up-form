import { useForm } from 'react-hook-form'
import errorIcon from '../../assets/icon-error.svg'

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })
    return (
        <form onSubmit={onSubmit} className='z-100 relative bg-white text-darkBlue-26 p-6 mb-11 rounded-lg shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.15)] min-[425px]:mb-25 max-w-130 lg:mb-0'>
            <div className='relative'>
                <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-2' {...register('name')} type='text' id='name' placeholder='First Name' />
                <img className='absolute top-3.5 right-4' src={errorIcon} alt="Error Icon" />
                <p className='mb-4 text-right text-xs text-red-74 italic'>First Name cannot be empty</p>
            </div>
            <div className='relative'>
                <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-2' {...register('lastName')} type='text' id='lastName' placeholder='Last Name' />
                <img className='absolute top-3.5 right-4' src={errorIcon} alt="Error Icon" />
                <p className='mb-4 text-right text-xs text-red-74 italic'>Last Name cannot be empty</p>
            </div>
            <div className='relative'>
                <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-2' {...register('email')} type='email' id='email' placeholder='Email Address' />
                <img className='absolute top-3.5 right-4' src={errorIcon} alt="Error Icon" />
                <p className='mb-4 text-right text-xs text-red-74 italic'>Looks like this is not an Email</p>
            </div>
            <div className='relative'>
                <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-2' {...register('password')} type='password' id='password' placeholder='Password' />
                <img className='absolute top-3.5 right-4' src={errorIcon} alt="Error Icon" />
                <p className='mb-4 text-right text-xs text-red-74 italic'>Password cannot be empty</p>
            </div>
            <button className='bg-green-51 w-full text-white py-4 rounded-md font-medium mb-4 cursor-pointer border-b-4 border-b-green-600' type="submit" value="">CLAIM YOUR FREE TRIAL</button>

            <p className='text-xs text-center leading-6 text-grayisBlue-77'>By clicking the button, you are agreeing to our<a className='text-red-74 font-semibold' href="#">Terms and Services</a></p>
        </form>
    )
}

export { Form }