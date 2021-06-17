import Scrollbar from 'react-smooth-scrollbar'
import Moment from 'react-moment'

export default function DisplayNetworks({ networks, downtime, countDowntime, networkStatus }) {
  return (
    <div className="flex flex-col items-center w-full px-10 py-10 pb-20 space-y-5">
      <div className="flex flex-row w-full space-x-5">
        <div className="flex flex-col w-full max-w-full">
          <div className="flex flex-col w-full h-full px-5 py-5 bg-light-panther text-bright-white rounded-xl">
            <div className="head flex flex-row justify-between items-center w-full">
              <span className="font-bold text-xl">Network Information</span>
            </div>
            <div className="flex flex-col w-full mt-5 space-y-3">
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Main Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_main }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_main }</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Backup Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_backup }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_backup }</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-3 space-y-3">
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Staff House Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_staffhouse }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_staffhouse }</span>
                </div>
              </div>
              <div className="flex flex-row items-center w-full space-x-2">
                <div className="flex flex-row items-center justify-between w-full px-6 py-3 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">Office Internet</span><span className="font-normal text-xl text-bright-white">{ networks[0].internet_office }</span>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-6 py-3.5 rounded-full bg-panther text-bright-white space-x-2">
                  <span className="font-light text-sm text-cool-gray">IP Address</span><span className="font-light text-base text-cool-gray">{ networks[0].ip_office }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-sm">
          <div className="flex flex-col w-full h-full px-5 py-5 bg-light-panther text-bright-white rounded-xl">
            <div className="head flex flex-row justify-between items-center w-full">
              <span className="font-bold text-xl">Internet Monitoring</span>
            </div>
            <div className="flex flex-col w-full mt-5 space-y-3">
              <div className="flex flex-row items-center justify-between w-full px-10 py-3 rounded-full bg-panther text-bright-white space-x-2">
                <span className="font-light text-sm text-cool-gray">Downtime</span><span className="font-bold text-2xl text-scarlet">{ countDowntime._all }</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-lg text-cerulean">{ networks[0].internet_staffhouse }</span>
                <span className="font-light text-sm text-cool-gray">Staffhouse Internet</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-lg text-cerulean">{ networks[0].internet_office }</span>
                <span className="font-light text-sm text-cool-gray">Office Internet</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-normal text-base text-bright-white">{ networkStatus }</span>
                <span className="font-light text-sm text-cool-gray">Network Status</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full max-h-[30rem] px-5 py-5 bg-light-panther text-bright-white rounded-xl">
        <div className="head flex flex-row justify-between items-center w-full">
          <span className="font-bold text-xl">Downtime Report</span>
        </div>
        <Scrollbar
            damping={0.1}
            thumbMinSize={20}
          >
            <div className={`${!downtime.length == 0 ? 'hidden' : 'flex flex-row justify-center items-center mt-3 w-full h-full'}`}>
              <h1 className="font-bold text-4xl opacity-30">No internet downtime so far.</h1>
            </div>
            <div className="flex flex-col w-full h-full overflow-y-auto py-3 mt-3 space-y-2">
              {downtime.map((({ isp, description, create_at }, i) => {
                return (
                  <div className="flex flex-row items-center justify-between w-full px-5 py-3 rounded-xl transition ease-in-out duration-300 hover:shadow-lg cursor-default bg-panther" key={i}>
                    <div className="flex flex-col items-start w-full max-w-sm">
                      <h1 className="font-normal text-base">{ isp }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Internet Service Provider</h1>
                    </div>
                    <div className="flex flex-col items-start w-full max-w-lg mr-2">
                      <h1 className="font-normal text-sm">{ description }</h1>
                      <h1 className="font-light text-xs text-cool-gray">Details and Reasons</h1>
                    </div>
                    <div className="flex flex-col items-start w-full max-w-lg">
                      <h1 className="font-normal text-sm"><Moment date={ create_at } format='LLLL' /></h1>
                      <h1 className="font-light text-xs text-cool-gray">Date & Time</h1>
                    </div>
                  </div>
                )
              }))}
            </div>
          </Scrollbar>
      </div>
    </div>
  )
}