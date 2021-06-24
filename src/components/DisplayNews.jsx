import Link from 'next/link'
import Moment from 'react-moment'

export default function DisplayNews({ news }) {
  return (
    <>
      {news.articles.map((({ source, author, title, url, urlToImage, publishedAt, content }, i) => {
        return (
          <Link href={url}>
            <a target="_blank" className="flex flex-col h-[27rem] bg-light-panther text-bright-white mt-10 rounded-xl transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md" key={i}>
              <div className="relative">
                <div className="absolute w-full inset-0 -top-5 z-30">
                  <div className="flex flex-row justify-center w-full">
                    <img className="w-10/12 h-48 rounded-lg bg-cool-gray object-cover" src={ !urlToImage ? 'https://blog.remitly.com/wp-content/uploads/2018/06/philippines-1195394_1920.jpg' : urlToImage } alt="news-image" />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute w-full inset-0 top-44 mt-5 px-9 z-10">
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-col">
                        <span className="font-semibold text-base">{ title }</span>
                        <span className="font-light text-xs text-cool-gray"><Moment date={ publishedAt } format='LL' /></span>
                      </div>
                    </div>
                    <div className="flex flex-col w-full space-y-3">
                      <span className="font-light text-sm line-clamp-2">
                        {!content ? 'No content available' : content}
                      </span>
                      <div className="flex flex-col w-full items-center pt-1 space-y-1">
                        <span className="font-normal text-xs text-cerulean uppercase">{ author }</span>
                        <span className="font-bold text-xs text-cool-gray">{ source.name }</span>
                      </div>
                      <hr className="opacity-10" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      }))}
    </>
  )
}