import Image from 'next/image'

import SparkleButton from '../sparkle-button'

const PrivacyPage = () => {
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
        <span className='text-center text-2xl font-bold'>Privacy Policy</span>
        <div className='mx-auto max-w-2xl p-4 text-justify'>
          <h2 className='text-xl font-semibold'>Introduction</h2>
          <p>
            Welcome to Samson2000 AI Bot. Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website.
          </p>

          <h2 className='text-xl font-semibold'>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul className='list-inside list-disc'>
            <li>Personal Data</li>
            <li>Derivative Data</li>
            <li>Financial Data</li>
          </ul>

          <h2 className='text-xl font-semibold'>Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul className='list-inside list-disc'>
            <li>Create and manage your account</li>
            <li>Email you regarding your account or order</li>
            <li>Enable user-to-user communications</li>
          </ul>

          <h2 className='text-xl font-semibold'>
            Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul className='list-inside list-disc'>
            <li>By Law or to Protect Rights</li>
            <li>Business Transfers</li>
            <li>Third-Party Service Providers</li>
          </ul>

          <h2 className='text-xl font-semibold'>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <p>Email: jon@themodernlogicgroup.com</p>
        </div>
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

export default PrivacyPage
