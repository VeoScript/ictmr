import Link from 'next/link'

export default function DisplayMonth({ months }) {

  const check = months.map((month) => {
    return {
      month
    }
  })

  return (
    <div className="w-full max-w-full h-full px-5 py-5 rounded-xl bg-light-panther">
      <div className={check[0] ? 'hidden' : 'flex flex-row items-center justify-center w-full h-full'}>
        <h1 className="font-bold text-5xl opacity-30">No record found.</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-full">
        {months.map((({albumYear, month}, i) => {
          return (
            <Link href="/monthly-reports/[year]/[month]" as={`/monthly-reports/${albumYear}/${month}`} key={i}>
              <a className="flex flex-col w-full h-[7rem] px-10 py-5 rounded-xl bg-panther transition ease-in-out duration-300 transform hover:scale-95 hover:shadow-md">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col w-full space-y-1">
                    <h1 className="font-bold text-3xl capitalize">{ month }</h1>
                    <span className="font-light text-sm text-cool-gray">See my entries in this month</span>
                  </div>
                  <ArrowIcon />
                </div>
              </a>
            </Link>
            )
        }))}
      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg className="w-10 h-10 text-bright-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
    </svg>
  )
}