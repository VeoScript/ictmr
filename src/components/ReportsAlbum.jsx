import Link from 'next/link'

export default function ReportsAlbum() {
  return (
    <Link href="/monthly-reports/[year]" as={`/monthly-reports/2021`}>
      <a className="flex flex-col w-full py-5">
        <div className="flex flex-col h-[23rem] bg-light-panther text-bright-white rounded-xl transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md">
          <div className="relative">
            <div className="absolute w-full inset-0 -top-5 z-30">
              <div className="flex flex-row justify-center w-full">
                <img className="w-10/12 h-48 rounded-lg bg-cool-gray object-cover" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/4/16/1429170969918/36991a6c-5f5d-4784-bb72-406eb9b81133-1020x612.jpeg?width=1010&quality=85&auto=format&fit=max&s=1f64073009ee1e6581598783878cfce7" alt="note-image" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-full inset-0 top-44 mt-5 px-6 z-10">
              <div className="flex flex-col w-full space-y-2 px-3">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col w-full">
                    <span className="font-bold text-xl">Report Title</span>
                    <span className="font-light text-xs text-cool-gray">Date here...</span>
                  </div>
                  <div className="flex flex-row justify-end w-full">
                    <span className="font-bold text-sm bg-cerulean text-panther px-3 py-1 rounded-full">2021</span>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-3">
                  <span className="font-normal text-base line-clamp-2">
                    Descriptions will display here...
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
}