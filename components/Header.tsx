'use client'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import useAuthModal from '@/hooks/useAuthModal'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {

const authModal = useAuthModal()

  const router = useRouter()

  const handleLogout = () => {}
  return (
    <div
      className={twMerge(
        `
      h-fit
      bg-gradient-to-b
      from-emerald-800
      p-6
    `,
        className
      )}
    >
      <div
        className="
      mb-4
      flex
      w-full
      items-center
      justify-between
    "
      >
        <div
          className="
          hidden
          items-center
          gap-x-2
          md:flex
        "
        >
          <button
            onClick={() => router.back()}
            className="
          flex
          items-center
          justify-center
          rounded-full
          bg-black
          transition
          hover:opacity-75
          "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
          flex
          items-center
          justify-center
          rounded-full
          bg-black
          transition
          hover:opacity-75
          "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button
            className="
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            p-2
            transition
            hover:opacity-75
            "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
            flex
            items-center
            justify-center
            rounded-full
            bg-white
            p-2
            transition
            hover:opacity-75
            "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div
          className="
        flex
        items-center
        justify-between
        gap-x-4
        "
        >
          <>
            <div>
              <Button onClick={authModal.onOpen} className='
                bg-transparent
                text-neutral-300
                font-medium
              '>
                Inscrever-se
              </Button>
            </div>
            <div>
              <Button onClick={authModal.onOpen} className='
              bg-white
              px-6
              py-2
              '>
                Entrar
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
