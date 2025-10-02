/* eslint-disable @stylistic/jsx-closing-tag-location */
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const CopyEmailButton = () => {
  const [isCopied, setIsCopied] = useState(false)
  const email = 'asdrubal.aldana12@gmail.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }
  return (
    <motion.button
      className=' relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
      onClick={copyToClipboard}
    >
      <AnimatePresence mode='wait'>

        {
        isCopied
          ? (<motion.p
              className='flex items-center justify-center gap-2'
              key='copied'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
             >
            <img
              src='assets/copy-done.svg' className='w-5' alt='Copy Icon'

            />
            Email copied!
          </motion.p>)
          : (<motion.p
              className='flex items-center justify-center gap-2'
              key='copy'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: 'easeInOut' }}
             >
            <img
              src='assets/copy.svg' className='w-5' alt='Copy Icon'

            />
            Copy Email Address
          </motion.p>)
    }
      </AnimatePresence>
    </motion.button>
  )
}

export default CopyEmailButton
