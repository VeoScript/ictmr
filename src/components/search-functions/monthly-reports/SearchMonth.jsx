import Link from 'next/link'
import { useState } from 'react'
import Scrollbar from 'react-smooth-scrollbar'

export default function SearchMonth({ months }) {
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

  const geLinks = months.map(({month, albumYear}, counter) => {
    return [
      month,
      albumYear,
      counter
    ]
  })

  const results = !searchTerm ? geLinks : geLinks.filter(menus =>
    menus[0].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <div className="flex flex-col w-full">
      <div className="searchbox flex flex-row items-center w-full max-w-full bg-light-panther rounded-full">
        <input
          className="w-full px-5 py-3 bg-light-panther rounded-full focus:outline-none"
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search Month"
        />
        <svg className="w-6 h-6 text-gray-400 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      {setIsOpen && (
        <>
          <button onClick={(e) => {setIsOpen(false); setSearchTerm(e.target.value="")}} type="button" className={`${isOpen ? 'z-20 block fixed inset-0 w-full h-full cursor-default focus:outline-none' : 'hidden'}`}></button>
          <div className={`z-40 w-full max-w-sm h-full ${isOpen ? 'relative' : 'hidden'}`}>
            <div className="absolute w-full h-auto overflow-hidden mt-2 rounded-xl bg-panther border-2 border-scarlet text-white z-10">
              <div className="flex flex-row w-full h-auto max-h-[15rem] overflow-y-auto bg-opacity-75">
                <Scrollbar
                  className="w-full"
                  damping={0.1}
                  thumbMinSize={20}
                >
                  <ul className="flex flex-col w-full">
                    {results.map(year_month => {
                      return (
                        <li className="flex flex-row items-center w-full border-b border-light-panther" key={year_month[2]}>
                          <Link href="/monthly-reports/[year]/[month]" as={`/monthly-reports/${year_month[1]}/${year_month[0]}`}>
                            <a className="flex flex-row items-center w-full px-3 py-2 transition ease-in-out duration-200 hover:bg-light-panther space-x-3">
                              <span className="font-normal text-lg text-scheme-pale">{year_month[0]}</span>
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </Scrollbar>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}