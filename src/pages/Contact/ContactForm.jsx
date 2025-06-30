import group from '../../assets/svgs/Group 68.svg'

export default function ContactForm() {
  return (
    <div className=" p-6 rounded-2xl bg-black text-white font-sans">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm text-green-400 font-light"
          >
            Enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-1 text-gray-300 placeholder-gray-500"
            autoComplete="name"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-1 text-gray-500 placeholder-gray-500"
            autoComplete="email"
          />
        </div>

        <div>
          <textarea
            name="project"
            rows="3"
            placeholder="Describe your project"
            className="w-full bg-transparent border-b border-gray-700 focus:border-green-500 outline-none py-1 text-gray-500 placeholder-gray-500 resize-none"
          ></textarea>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="submit"
            className="flex items-center space-x-2 border border-white rounded-3xl px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Send"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
            <span>Send</span>
          </button>
          <span className="text-gray-400 font-light">or</span>
          <button
            type="button"
            className="flex items-center space-x-2 border border-white rounded-3xl px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Contact me"
          >
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 4H20V16H4z" />
              <path d="M22 6L12 13L2 6" />
            </svg>
            <span>Contact me</span>
          </button>
        </div>
      </form>

      <div className="flex items-center  mt-6 text-gray-400 text-sm font-light">
        <p className='text-lg mr-4'>@williamrey</p>
        
          <img src={group} alt="" />
        
      </div>
    </div>
  );
}

// 
          
          