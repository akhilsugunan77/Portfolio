export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gray-900 flex  justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/5362199e-62b8-4de0-91fe-e33a5fa54afb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="mt-4 text-gray-500">
            //Submit a form below or email me - akhilsugunan77@gmail.com
          </p>
        </div>
        <input
          className="bg-blue-200 p-2 "
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className="bg-blue-200 my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-blue-200 p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-4 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
}
