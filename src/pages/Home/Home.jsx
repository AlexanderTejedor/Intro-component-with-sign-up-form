import imagen from '../../assets/bg-intro-mobile.png'

const Home = () => {
    return (
        <section className='container bg-red-74 w-full p-5 text-white'>
            <figure className='w-full'>
                <img className='absolute -top-1 left-0 w-sm' src={imagen} alt="background imagen wiht any elements"/>
            </figure>
            <article className='text-center my-10'>
                <h1 className='text-3xl font-semibold pt-8 mb-6'>Learn to code by watching others</h1>
                <p className='px-1'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </article>
            <article className='z-10'>
                <div className='relative text-center bg-blue-49 p-4 mb-5 z-30 rounded-lg shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.15)]'>
                    <p className='px-9 font-light text-grayisBlue-77'><span className='font-semibold text-white'>Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
                <form className='z-100 relative bg-white text-darkBlue-26 p-6 rounded-lg shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.15)]'>
                    <input className='text-sm p-3 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="text" name="" id="name" placeholder="First Name"/>
                    <input className='text-sm p-3 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="text" name="" id="lastName" placeholder="Last Name"/>
                    <input className='text-sm p-3 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="email" name="" id="email" placeholder="Email Address"/>
                    <input className='text-sm p-3 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="password" name="" id="password" placeholder="Password"/>
                    <button type="submit" value="">CLAIM YOUR FREE TRIAL</button>

                    <p>By clicking the button, you are agreeing to our<a href="">Terms and Services</a></p>
                </form>
            </article>
        </section>
    )
}

export { Home }