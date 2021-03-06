import { useRouter } from 'next/router'
import AddReport from '~/components/modals/monthly-reports/AddReport'
import GeneratePDF from '~/components/GeneratePDF'
import Scrollbar from 'react-smooth-scrollbar'

export default function DisplayReports({ getReports, getYear, getMonth }) {

  const check = getReports.map((id) => {
    return {
      id
    }
  })

  const router = useRouter()
  return (
    <div className="flex flex-col w-full h-full px-4 overflow-hidden">
      <div className="cards flex flex-col w-full max-w-full h-full max-h-[30rem] overflow-hidden rounded-xl bg-light-panther">
        <div className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-center items-center w-full px-5 py-5">
            <div className="flex flex-col items-start w-full max-w-md">
              <h1 className="font-semibold text-lg">Tasks you have completed</h1>
              <h1 className="font-light text-xs text-cool-gray">Complete your task to avoid resentment</h1>
            </div>
            <div className="flex flex-row justify-end items-end w-full max-w-full space-x-2">
              <AddReport year={ getYear } month={ getMonth } />
              <GeneratePDF reports={ getReports } year={ getYear } month={ getMonth } />
              <button
                type="button"
                onClick={() => router.back()}
                className="flex flex-row items-center justify-center px-1 py-3 space-x-2 w-full max-w-[11rem] bg-panther rounded-full text-base transition ease-in-out duration-200 transform hover:scale-95 focus:outline-none"
              >
                <BackIcon />
                <span>Return</span>
              </button>
            </div>
          </div>
          <div className={`mt-16 ${check[0] ? 'hidden' : 'flex flex-row items-center justify-center w-full h-full'}`}>
            <h1 className="font-bold text-5xl opacity-30">No tasks so far.</h1>
          </div>
          <Scrollbar
            damping={0.1}
            thumbMinSize={20}
          >
            <div className="flex flex-col w-full h-full overflow-y-auto px-5 py-3 space-y-2">
              {getReports.map((({ requesting_person, reported_issue, resolution_made, date_reported, date_resolved }, i) => {
                return (
                  <div className="flex flex-row items-center justify-between w-full px-5 py-3 rounded-xl transition ease-in-out duration-300 hover:shadow-lg cursor-default bg-panther" key={i}>
                    <div className="flex flex-col items-start w-full max-w-sm">
                      <h1 className="font-normal text-base">{ requesting_person }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Requesting Person</h1>
                    </div>
                    <div className="flex flex-col items-start w-full max-w-lg mr-2">
                      <h1 className="font-normal text-sm">{ reported_issue }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Reported Issue</h1>
                    </div>
                    <div className="flex flex-col items-start w-full max-w-lg">
                      <h1 className="font-normal text-sm">{ resolution_made }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Resolution Made</h1>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-xs">
                      <h1 className="font-normal text-base">{ date_reported }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Date Reported</h1>
                    </div>
                    <div className="flex flex-col items-end w-full max-w-xs">
                      <h1 className="font-normal text-base">{ date_resolved }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Date Resolved</h1>
                    </div>
                  </div>
                )
              }))}
            </div>
          </Scrollbar>
        </div>
      </div>
    </div>
  )
}

function BackIcon() {
  return (
    <svg className="w-6 h-6 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  )
}