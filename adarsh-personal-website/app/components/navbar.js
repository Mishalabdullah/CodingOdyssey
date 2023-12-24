export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-fit bg-[#252525D1] p-3 m-6 text-lg text-white rounded-[20px] z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="hover:text-[#8FDF92]">
            Home
          </a>
          <a href="/works" className="hover:text-[#8FDF92]">
            Works
          </a>
          <a href="/about-me" className="hover:text-[#8FDF92]">
            About
          </a>
          <a href="/contact" className="hover:text-[#8FDF92]">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
