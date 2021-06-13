import { useRouter } from 'next/router'

export default function DisplayReports({ getReports }) {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full px-4">
      <div className="cards flex flex-col w-full max-w-full h-[28rem] overflow-y-auto rounded-xl bg-light-panther">
        <div className="flex flex-col w-full h-24">
          <div className="flex flex-row justify-center items-center w-full px-5 py-5">
            <div className="flex flex-col items-start w-full">
              <h1 className="font-semibold text-lg">Tasks you have completed</h1>
              <h1 className="font-light text-xs text-cool-gray">Complete your task to avoid resentment</h1>
            </div>
            <div className="flex flex-row justify-end items-end w-full space-x-2">
              <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-44 bg-cerulean rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
                >
                <DownloadIcon />
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-44 bg-panther rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
              >
                <BackIcon />
                <span>Return</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full px-5 space-y-2">
            {getReports.map(report => (
              <div className="flex flex-row items-center justify-between w-full px-5 py-3 rounded-xl transition ease-in-out duration-300 hover:shadow-lg cursor-default bg-panther">
                <div className="flex flex-col items-start w-full max-w-sm">
                  <h1 className="font-normal text-base">{ report.requesting_person }</h1>
                  <h1 className="font-light text-xs text-cool-gray">Requesting Person</h1>
                </div>
                <div className="flex flex-col items-start w-full max-w-lg">
                  <h1 className="font-normal text-base">{ report.reported_issue }</h1>
                  <h1 className="font-light text-xs text-cool-gray">Reported Issue</h1>
                </div>
                <div className="flex flex-col items-start w-full max-w-lg">
                  <h1 className="font-normal text-base">{ report.resolution_made }</h1>
                  <h1 className="font-light text-xs text-cool-gray">Resolution Made</h1>
                </div>
                <div className="flex flex-col items-end w-full max-w-xs">
                  <h1 className="font-normal text-base">{ report.date_reported }</h1>
                  <h1 className="font-light text-xs text-cool-gray">Date Reported</h1>
                </div>
                <div className="flex flex-col items-end w-full max-w-xs">
                  <h1 className="font-normal text-base">{ report.date_resolved }</h1>
                  <h1 className="font-light text-xs text-cool-gray">Date Resolved</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
  )
}

function BackIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  )
}