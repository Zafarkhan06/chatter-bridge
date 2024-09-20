import Link from "next/link";

function Card() {
  return (
    <div>
      <div className="bg-[#bada55] flex  items-stretch justify-start gap-3 p-4 rounded-lg ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
        </div>
        <div className="flex flex-col justify-around gap-10">
          <div className="flex flex-col justify-between">
            <div className="font-semibold">Cloud services</div>
            <div>
              Explore our range of robust cloud services for scalable and secure
              business solutions.
            </div>
          </div>
          <Link className="font-semibold" href={""}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
