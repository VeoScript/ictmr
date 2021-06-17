import Link from 'next/link'
import Moment from 'react-moment'
import ReactMarkdown from 'react-markdown'

export default function DisplayYear({ notes }) {
  return (
    <>
      {notes.map((({ image, title, slug, note, date, tag }, i) => {
        return (
          <Link href="/notes/[slug]" as={`/notes/${slug}`} key={i}>
            <a className="flex flex-col w-full py-5">
              <div className="flex flex-col h-[23rem] bg-light-panther text-bright-white rounded-xl transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md">
                <div className="relative">
                  <div className="absolute w-full inset-0 -top-5 z-30">
                    <div className="flex flex-row justify-center w-full">
                      <img className="w-10/12 h-48 rounded-lg bg-cool-gray object-cover" src={ image } alt="note-image" />
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute w-full inset-0 top-44 mt-5 px-6 z-10">
                    <div className="flex flex-col w-full space-y-2 px-3">
                      <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col">
                          <span className="font-bold text-xl">{ title }</span>
                          <span className="font-light text-xs text-cool-gray"><Moment date={ date } format='LL' /></span>
                        </div>
                        <div className="flex flex-row items-start justify-end">
                          <span className="font-bold text-sm bg-scarlet text-panther px-3 py-1 rounded-full">{ tag }</span>
                        </div>
                      </div>
                      <div className="flex flex-col w-full space-y-3">
                        <span className="font-normal text-sm line-clamp-2">
                          <ReactMarkdown>{!note ? 'No content available' : note}</ReactMarkdown> 
                        </span>
                        <span className="font-normal text-xs text-scarlet">Read More...</span>
                      </div>
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