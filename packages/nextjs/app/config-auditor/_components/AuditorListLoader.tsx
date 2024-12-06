import { NextPage } from "next"

interface AuditorListLoaderProps {
  items: number;
}

const AuditorListLoader: NextPage<AuditorListLoaderProps> = ({items}) => {
  return (
    <div className="flex flex-col mt-5 px-2 w-full gap-2">
    {Array.from({ length: items }, (_, index) => (
      <span key={index} className="skeleton h-14" />
    ))}
  </div>
  )
}

export default AuditorListLoader;