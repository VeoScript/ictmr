import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Reports() {
  const router = useRouter()
  const { year, month } = router.query

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="py-5 font-light text-5xl">
        Year: <span className="font-bold text-5xl">{ year }</span>
      </div>
      <div className="py-5 font-light text-5xl">
        Month: <span className="font-bold text-5xl">{ month }</span>
      </div>
      <Link href="/monthly-reports/[year]/[month]/[reports]" as={`/monthly-reports/${year}/${month}/reports-args`}>
        <a className="py-5 font-light text-5xl">
          See reports from the month of { month }, { year }
        </a>
      </Link>
    </div>
  )
}