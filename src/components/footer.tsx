const Footer = () => {
  return (
    <footer className='mb-8 mt-16 flex justify-center'>
      <div className='text-center'>
        &copy; {new Date().getFullYear()} Samson2000
        <div className='mt-2'>
          <a href='/privacy' className='text-blue-500 hover:underline mr-4'>
            Privacy Policy
          </a>
          <a href='/terms' className='text-blue-500 hover:underline'>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
