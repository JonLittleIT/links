import Image from 'next/image'

import SparkleButton from '../sparkle-button'

const Terms = () => {
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
        <span className='text-center text-2xl font-bold'>Terms of Service</span>
        <div className='mx-auto max-w-2xl p-4 text-justify'>
          <h2 className='text-xl font-semibold'>Introduction</h2>
          <p>
            Welcome to Samson2000 AI Bot. These Terms of Service
            (&quot;Terms&quot;) govern your use of our website located at
            samson2000.com (together or individually &quot;Service&quot;)
            operated by The Modern Logic Group.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains
            how we collect, safeguard and disclose information that results from
            your use of our web pages.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms then you do not
            have permission to access the Service.
          </p>

          <h2 className='text-xl font-semibold'>Communications</h2>
          <p>
            By using our Service, you agree to subscribe to newsletters,
            marketing or promotional materials and other information we may
            send. However, you may opt out of receiving any, or all, of these
            communications from us by following the unsubscribe link or by
            emailing at jon@themodernlogicgroup.com.
          </p>

          <h2 className='text-xl font-semibold'>Purchases</h2>
          <p>
            If you wish to purchase any product or service made available
            through the Service (&quot;Purchase&quot;), you may be asked to
            supply certain information relevant to your Purchase including,
            without limitation, your credit card number, the expiration date of
            your credit card, your billing address, and your shipping
            information.
          </p>

          <h2 className='text-xl font-semibold'>Content</h2>
          <p>
            Our Service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, videos, or other
            material (&quot;Content&quot;). You are responsible for the Content
            that you post on or through the Service, including its legality,
            reliability, and appropriateness.
          </p>

          <h2 className='text-xl font-semibold'>Prohibited Uses</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance
            with Terms. You agree not to use the Service:
          </p>
          <ul className='list-inside list-disc'>
            <li>
              In any way that violates any applicable national or international
              law or regulation.
            </li>
            <li>
              For the purpose of exploiting, harming, or attempting to exploit
              or harm minors in any way by exposing them to inappropriate
              content or otherwise.
            </li>
            <li>
              To transmit, or procure the sending of, any advertising or
              promotional material, including any &quot;junk mail&quot;,
              &quot;chain letters&quot;, &quot;spam&quot;, or any other similar
              solicitation.
            </li>
            <li>
              To impersonate or attempt to impersonate the Company, a Company
              employee, another user, or any other person or entity.
            </li>
            <li>
              In any way that infringes upon the rights of others, or in any way
              is illegal, threatening, fraudulent, or harmful, or in connection
              with any unlawful, illegal, fraudulent, or harmful purpose or
              activity.
            </li>
            <li>
              To engage in any other conduct that restricts or inhibits
              anyone&quot;s use or enjoyment of the Service, or which, as
              determined by us, may harm or offend the Company or users of the
              Service or expose them to liability.
            </li>
          </ul>
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

export default Terms
