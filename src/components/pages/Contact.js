import React from "react";

function Contact() {

    // const [values, setvalues] = useState({
    //   name: "",
    //   email: "",
    //   message: ""
    // })

    // const set = name => {
    //   return ({ target: { value } }) => {
    //     setValues(oldValues => ({...oldValues, [name]: value }));
    //   }
    // };

  return (
    <div className="shadow-lg border yellow-border font-light border-solid rounded-sm py-12 px-8 mb-8 blkBackground">
      <h1 className="text-2xl md:text-4xl yellow-text mb-3 text-center">
        Contact Me
      </h1>
      <h3 className="text-lg yellow-text mb-3 text-center">
        JonFKelly@gmail.com || 469-556-6054
      </h3>
      <form className="body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-base text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    id="name"
                    na="name"
                    className="w-full bg-gray-100 rounded border red-border-sm focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-base text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border blue-border-sm focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-base text-white"
                  >
                    Message
                  </label>
                  <textarea
                  required
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border yellow-border-sm focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  id="submitBtn"
                  className="send-button flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
