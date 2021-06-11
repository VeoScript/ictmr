import { useRouter } from 'next/router'

export default function Reports() {
  const router = useRouter()
  const { year, month, reports } = router.query

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="py-5 font-light text-5xl">
        Year: <span className="font-bold text-5xl">{ year }</span>
      </div>
      <div className="py-5 font-light text-5xl">
        Month: <span className="font-bold text-5xl">{ month }</span>
      </div>
      <div className="py-5 font-light text-5xl">
        Reports: <span className="font-bold text-5xl">{ reports }</span>
      </div>
    </div>
  )
}