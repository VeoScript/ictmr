import ComputerIcon from '~/components/icons/ComputerIcon'
import NotebookIcon from '~/components/icons/NotebookIcon'
import DowntimeIcon from '~/components/icons/DowntimeIcon'

export default function Dashboard({ reports, getMonth, getYear }) {
  return (
    <div className="flex flex-col w-full h-full px-10 py-10">
      <div className="flex flex-row justify-center w-full px-4 space-x-3">
        <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
          <div className="relative w-full h-24">
            <div className="flex flex-col w-full px-5 py-5">
              <h1 className="font-semibold text-lg">Computer Monitoring</h1>
              <h1 className="font-light text-xs text-cool-gray">How many computers as of now?</h1>
            </div>
            <div className="flex flex-col justify-center w-full px-16 py-3">
              <h1 className="font-bold text-7xl text-scarlet">22</h1>
            </div>
            <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
              <ComputerIcon />
            </div>
          </div>
        </div>
        <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
          <div className="relative w-full h-24">
            <div className="flex flex-col w-full px-5 py-5">
              <h1 className="font-semibold text-lg">Notes</h1>
              <h1 className="font-light text-xs text-cool-gray">How many notes do you have?</h1>
            </div>
            <div className="flex flex-col justify-center w-full px-16 py-3">
              <h1 className="font-bold text-7xl text-scarlet">5</h1>
            </div>
            <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
              <NotebookIcon />
            </div>
          </div>
        </div>
        <div className="cards flex flex-col w-full max-w-sm h-48 rounded-xl bg-light-panther">
          <div className="relative w-full h-24">
            <div className="flex flex-col w-full px-5 py-5">
              <h1 className="font-semibold text-lg">Internet Downtime</h1>
              <h1 className="font-light text-xs text-cool-gray">How many downtimes this day?</h1>
            </div>
            <div className="flex flex-col justify-center w-full px-16 py-3">
              <h1 className="font-bold text-7xl text-scarlet">3</h1>
            </div>
            <div className="absolute h-0 bottom-0 right-5 bg-cerulean">
              <DowntimeIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full px-4 py-3">
        <div className="cards flex flex-col w-full max-w-full h-[28rem] overflow-y-auto rounded-xl bg-light-panther">
          <div className="flex flex-col w-full h-24">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-col w-full px-5 py-5">
                <h1 className="font-semibold text-lg">Tasks you have completed</h1>
                <h1 className="font-light text-xs text-cool-gray">Complete your task to avoid resentment</h1>
              </div>
              <div className="flex flex-col items-end w-full px-5 py-5">
                <h1 className="font-semibold text-xl">{ getMonth }&nbsp;{ getYear }</h1>
              </div>
            </div>
            <div className={`mt-24 ${!reports.length == 0 ? 'hidden' : 'flex flex-row items-center justify-center w-full h-full'}`}>
              <h1 className="font-bold text-5xl opacity-30">No tasks so far.</h1>
            </div>
            <div className="flex flex-col w-full px-5 space-y-2">
              {reports.map(({requesting_person, reported_issue, resolution_made, date_reported, date_resolved}, i) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}