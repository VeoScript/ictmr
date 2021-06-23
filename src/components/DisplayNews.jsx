import Link from 'next/link'
import Moment from 'react-moment'

export default function DisplayNews({ news }) {
  return (
    <>
      {news.results.map((({ section, title, abstract, url, byline, published_date, multimedia }, i) => {
        return (
          <div className="flex flex-col h-[28rem] bg-light-panther text-bright-white mt-10 rounded-xl hover:shadow-md" key={i}>
            <div className="relative">
              <div className="absolute w-full inset-0 -top-5 z-30">
                <div className="flex flex-row justify-center w-full">
                  <img className="w-10/12 h-48 rounded-lg bg-cool-gray object-cover" src={ multimedia[0].url } alt="note-image" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute w-full inset-0 top-44 mt-5 px-9 z-10">
                <div className="flex flex-col w-full space-y-2">
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col">
                      <span className="font-bold text-base">{ title }</span>
                      <span className="font-normal text-xs">{ byline }</span>
                      <span className="font-light text-xs text-cool-gray"><Moment date={ published_date } format='LL' /></span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full space-y-3">
                    <span className="font-normal text-sm line-clamp-2">
                      {!abstract ? 'No abstract available' : abstract}
                    </span>
                    <div className="flex flex-row w-full justify-between items-center">
                      <span className="w-[5rem] font-bold text-sm text-center capitalize bg-scarlet text-panther px-3 py-1 rounded-full">{ section }</span>
                      <span className="font-normal text-xs text-cerulean">
                        <Link href={url}>
                          <a target="_blank" className="flex flex-col w-full py-2">Read More</a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }))}
    </>
  )
}