import Link from 'next/link'
import Moment from 'react-moment'

export default function DisplayYear({ albums }) {
  return (
    <>
      {albums.map(album => (
        <Link href="/monthly-reports/[year]" as={`/monthly-reports/2021`}>
          <a className="flex flex-col w-full py-5">
            <div className="flex flex-col h-[21rem] bg-light-panther text-bright-white rounded-xl transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md">
              <div className="relative">
                <div className="absolute w-full inset-0 -top-5 z-30">
                  <div className="flex flex-row justify-center w-full">
                    <img className="w-10/12 h-48 rounded-lg bg-cool-gray object-cover" src={ album.avatar } alt="note-image" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute w-full inset-0 top-44 mt-5 px-6 z-10">
                  <div className="flex flex-col w-full space-y-2 px-3">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-col w-full">
                        <span className="font-bold text-xl">{ album.title }</span>
                        <span className="font-light text-xs text-cool-gray"><Moment date={ album.date } format='LL' /></span>
                      </div>
                      <div className="flex flex-row items-center justify-end w-full">
                        <span className="font-bold text-sm bg-cerulean text-light-panther px-3 py-1 rounded-full">{ album.year }</span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full space-y-3">
                      <span className="font-normal text-sm line-clamp-2">{ album.description }</span>
                      <span className="font-normal text-xs text-cerulean">Read More...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </>
  )
}