import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert'
import { Particles } from '../components/Particles'

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    })

  const [isLoading, setIsLoading] = useState(false)

  const [alert, setAlert] = useState({
    isShown: false,
    type: null,
    message: null
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await emailjs.send('service_nk8fb9k', 'template_mhic5ho', {
        from_name: formData.name,
        to_name: 'Asdrubal',
        from_email: formData.email,
        to_email: 'asdrubal.aldana15@gmail.com',
        message: formData.message
      }, 'ZbjYaTPIc-h9rRfI_')
      setIsLoading(false)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      setAlert({ isShown: true, type: 'success', message: 'Email has been sent.' })
      console.log(alert)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      setAlert({ isShown: true, type: 'danger', message: 'Please, try again' })
    } finally {
      setTimeout(() => {
        setAlert({ isShown: false, type: null, message: null })
      }, 2000)
    }

    // service_nk8fb9k
    // template_mhic5ho
  }

  return (
    <section className='relative flex items-center c-space section-spacing' id='contact'>
      <Particles
        className='absolute inset-0 z-0'
        quantity={100}
        ease={80}
        color='#ffffff'
        refresh
      />

      {
            alert.isShown && <Alert type={alert.type} message={alert.message} />
        }
      <div className='flex flex-col items-center justify-center max-w-md mx-auto border p-5 border-white/10 rounded-2xl bg-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Let's Talk!</h2>
          <p className='font-normal text-neutral-400'>Whatever your digital needs, I'm ready to help. Whether you're planning a complete website build, need assistance with updates and maintenance on your current site, or even just bringing that long-held idea to life.</p>
        </div>
        <form className='w-full' onSubmit={onSubmit}>
          <div className='mb-5'>
            <label className='field-label' htmlFor='name'>Full Name</label>
            <input type='text' id='name' name='name' className='field-input field-input-focus' placeholder='John Doe' value={formData.name} onChange={handleChange} required autoComplete='name' />
          </div>

          <div className='mb-5'>
            <label className='field-label' htmlFor='name'>Email</label>
            <input type='text' id='email' name='email' className='field-input field-input-focus' placeholder='johndoe@email.com' value={formData.email} onChange={handleChange} required autoComplete='email' />
          </div>

          <div className='mb-5'>
            <label className='field-label' htmlFor='message'>Message</label>
            <textarea id='message' name='message' className='field-input field-input-focus' placeholder='Share your thoughts...' value={formData.message} onChange={handleChange} required autoComplete='message' rows='4' />
          </div>

          <button type='submit' className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation'>{isLoading ? 'Sending...' : 'Send'}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
