import { useRouter } from 'next/router'

export default function Month() {
  const router = useRouter()
  const { year, month, reports } = router.query

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="py-5 font-light text-5xl">
        Reports from the month and year of &nbsp;
        <span className="font-bold">{ month }</span>,&nbsp;
        <span className="font-bold">{ year }</span> :
        <span className="font-bold text-5xl">{ reports }</span>
      </div>
    </div>
  )
}

