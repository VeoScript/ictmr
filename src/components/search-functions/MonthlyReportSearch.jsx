import Link from 'next/link'
import { useState } from 'react'
import { menu } from '~/static/links'

export default function DashboardSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState("")

  const handleChange = event => {
    setSearchTerm(event.target.value)
    if(!event.target.value){
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  }

  const geLinks = menu.map(({name, icon, href}, counter) => {
    return [
      name,
      icon,
      href,
      counter
    ]
  })

  const results = !searchTerm ? geLinks : geLinks.filter(menus =>
    menus[0].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div className="flex flex-col items-center w-full">
      <div className="searchbox flex flex-row items-center w-full max-w-sm mt-5 bg-light-panther rounded-full">
        <input
          className="w-full px-5 py-3 bg-light-panther rounded-full focus:outline-none"
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Year"
        />
        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      {setIsOpen && (
        <>
          <button onClick={(e) => {setIsOpen(false); setSearchTerm(e.target.value="")}} type="button" className={`${isOpen ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
          <div className={`z-40 w-full max-w-sm h-full ${isOpen ? 'relative' : 'hidden'}`}>
            <div className="absolute w-full h-auto max-h-80 overflow-y-auto mt-2 rounded-xl bg-panther border-2 border-scarlet text-white z-10">
              <div className="flex flex-row w-full bg-opacity-75">
                <ul className="flex flex-col w-full">
                  {results.map(menus => {
                    return (
                      <li className="flex flex-row items-center w-full border-b border-light-panther" key={menus[3]}>
                        <Link href={`${menus[2]}`}>
                          <a className="flex flex-row items-center w-full px-3 py-2 transition ease-in-out duration-200 hover:bg-light-panther space-x-3">
                            <span className="px-3 py-2 rounded-md bg-scarlet">{ menus[1] }</span>
                            <span className="font-normal text-lg text-scheme-pale">{menus[0]}</span>
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}