import React from 'react'

const LoginPage = () => {
    return (
        <section className='bg-gray-50 min-h-[90vh] flex items-center justify-center'>
            <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
                <div className='md:w-1/2 px-8 md:px-16'>
                    <h2 className='font-bold text-2xl'>Pokemon</h2>
                    <p className='text-s mt-4 text-[#002D73]'>Welcome to the</p>
                    <p className='text-s mt-4 text-[#002D74]'>Pokemon Guide Site.</p>
                    <p className='text-s mt-4 text-[#002D74]'>Please Sign In.</p>
                </div>

                <div className='md:block hidden w-1/2'>
                    <img
                        alt="login"
                        className='rounded-2xl'
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default LoginPage