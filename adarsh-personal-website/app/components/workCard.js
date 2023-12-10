export default function WorkCard({
  heading,
  subHeading,
  description,
  link,
  linkText = "",
  imageURL = "",
}) {
  return (
    <div>
      <div className="bg-[#2525258C] md:text-3xl  text-xl text[#9C9C9C] bg-opacity-40 relative rounded-[52px] m-2 h-full md:w-11/12  p-10">
        <a href={link}>
          {heading}
          <div className="text-[#86868B]">
            {subHeading}
            <p className="text-[#F5F5F7]">Overview</p>
            <p>{description}</p>
          </div>
        </a>
        <button className="bg-[#8FDF92] text-[#1D1D1F] w-full mt-4 p-2  rounded-[10px]">
          {linkText}
        </button>
      </div>
    </div>
  );
}
