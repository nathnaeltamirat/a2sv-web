import Image from "next/image";


const NotFound = () => {
  return (
    <div className="mx-auto w-6/12 my-auto">
        <h1 className="text-center text-3xl font-bold my-4">Not Found</h1>
        <Image src="/404.png" alt="404 image" width={600} height={600} />
    </div>
  )
}

export default NotFound;