import Image from 'next/image'

import SparkleButton from '../sparkle-button'

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pb-10 pt-24'>
        <Image
          src='/samson2000.jpg'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>Samson2000</h1>
        <p className='text-[#a1a1a1]'>Telegram AI Chat Bot</p>
      </div>
      <div className='flex flex-col gap-4 py-3'>
        <span className='text-center'>Oops! Something went wrong.</span>
        <div className='flex items-center justify-center gap-6'>
          <SparkleButton className='mb-6'>
            <a href='/' className={SparkleButton.ClassName}>
              <SparkleButton.Spark />
              <SparkleButton.Backdrop />
              <SparkleButton.Text>Go to Home</SparkleButton.Text>
            </a>
          </SparkleButton>
        </div>
      </div>
    </>
  )
}

export default HomePage
