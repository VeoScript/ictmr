import Link from 'next/link'
import { useRouter } from 'next/router'
import { menu } from '~/static/links'

export default function SideBar({ profile }) {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full h-full overflow-y-auto bg-light-panther">
      <div className="flex flex-col justify-center items-center w-full h-20">
        <Link href="/">
          <a className="transition ease-in-out duration-300 transform hover:scale-90">
            <img className="w-8 h-8" src="/ictmr.png" alt="icon" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full space-y-5">
        {menu.map(({ icon, href }, i) => (
          <Link href={ href } key={i}>
            <a className={`${router.pathname == href ? 'bg-scarlet' : 'bg-light-panther'} flex flex-row justify-center w-1/2 px-5 py-2 rounded-md transition ease-in-out duration-300 transform hover:scale-90`}>
              <span>{ icon }</span>
            </a>
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center w-full h-20">
        <Link href="/profile">
          <a className="transition ease-in-out duration-300 transform hover:scale-90">
            <img className="w-8 h-8 object-cover rounded-full bg-cool-gray" src={ profile.avatar } alt="avatar" />
          </a>
        </Link>
      </div>
    </div>
  )
}