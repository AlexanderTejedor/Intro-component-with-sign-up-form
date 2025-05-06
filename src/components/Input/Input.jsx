import errorIcon from '../../assets/icon-error.svg'

const Input = (props) => {
    return (
        <div className='relative'>
            <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-2' type={props.type} id={props.id} placeholder={props.placeholder}/>
            <img className='absolute top-3.5 right-4' src={errorIcon} alt="Error Icon"/>
            <p className='mb-4 text-right text-xs text-red-74 italic'> {props.textError}</p>
        </div>
    )
}

export { Input }