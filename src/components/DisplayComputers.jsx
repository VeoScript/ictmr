import Link from 'next/link'

export default function DisplayComputers({ computers }) {
  return (
    <div className="flex flex-col items-center w-full px-10 py-10 mt-8">
      <div className="flex flex-row justify-start items-center text-left text-cool-gray w-full px-10 py-5 max-w-full space-x-5 bg-light-panther rounded-full">
        <div className="head w-2/12">Hostname</div>
        <div className="head w-3/12">Holder</div>
        <div className="head w-5/12">Computer Description</div>
        <div className="head w-3/12">Office Assign</div>
        <div className="head w-3/12 text-center">IP Address</div>
      </div>
      {computers.map(({ id, computer_name, computer_owner, computer_ip, computer_description, office_assign }, i) => {
        return (
          <Link href="/computers/[id]" as={`/computers/${id}`} key={i}>
            <a className="flex flex-row justify-center items-center text-start text-sm w-full max-w-full mt-2 px-10 py-5 space-x-5 bg-light-panther rounded-full transition ease-in-out duration-300 hover:shadow-lg">
              <div className="head w-2/12">{ computer_name }</div>
              <div className="head w-3/12">{ computer_owner }</div>
              <div className="head w-5/12">{ computer_description }</div>
              <div className="head w-3/12">{ office_assign }</div>
              <div className="head w-3/12 text-center text-cool-gray">{ computer_ip }</div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}