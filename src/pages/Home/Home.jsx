import imagen from '../../assets/bg-intro-mobile.png'
import imagepc from '../../assets/bg-intro-desktop.png'

const Home = () => {
    return (
        <section className='container relative bg-red-74 w-full p-5 text-white flex items-center justify-center flex-col max-w-full md:h-full lg:flex-row lg:h-screen lg:gap-4 2xl:scale-120'>
            <figure className=''>
                <img className='absolute top-0 left-0 w-full h-full object-cover md:hidden' src={imagen} alt="background imagen with any elements"/>
                <img className='absolute top-0 left-0 hidden md:block w-full h-full object-cover' src={imagepc} alt="Background image with any elements" />
            </figure>
            <article className='text-center my-10 pb-6 max-w-130 lg:text-left'>
                <h1 className='text-3xl font-semibold pt-8 mb-6 lg:text-5xl'>Learn to code by watching others</h1>
                <p className='px-1'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </article>
            <article className='z-10 flex flex-col items-center'>
                <div className='relative text-center bg-blue-49 p-4 mb-8 z-30 rounded-lg shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.15)] max-w-130'>
                    <p className='px-9 font-light text-grayisBlue-77'><span className='font-semibold text-white'>Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
                <form className='z-100 relative bg-white text-darkBlue-26 p-6 mb-11 rounded-lg shadow-[0px_8px_0px_0px_rgba(0,_0,_0,_0.15)] min-[425px]:mb-25 max-w-130 lg:mb-0'>
                    <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="text" name="" id="name" placeholder="First Name"/>
                    <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="text" name="" id="lastName" placeholder="Last Name"/>
                    <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="email" name="" id="email" placeholder="Email Address"/>
                    <input className='text-sm p-4 border border-gray-300 w-full rounded-md text-gray-700 mb-4' type="password" name="" id="password" placeholder="Password"/>
                    <button className='bg-green-51 w-full text-white py-4 rounded-md font-medium mb-4 cursor-pointer border-b-4 border-b-green-600' type="submit" value="">CLAIM YOUR FREE TRIAL</button>

                    <p className='text-xs text-center leading-6 text-grayisBlue-77'>By clicking the button, you are agreeing to our<a className='text-red-74 font-semibold' href="#">Terms and Services</a></p>
                </form>
            </article>
        </section>
    )
}

export { Home }