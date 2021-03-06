import { FC } from "react";
import { HiMail } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <section id="contact" className="space-y-12 px-8 md:px-24 md:mt-12">
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        Contact
      </h1>
      <div className="flex text-white py-8 md:py-20 items-center flex-col md:flex-row">
        <div
          className="flex flex-col items-center"
          style={{ flexBasis: "50%" }}
        >
          <div className="flex flex-col space-y-8">
            <h1 className="font-medium text-3xl md:text-5xl">
              Let's have a Chat.
            </h1>
            <p className="text-white-secondary text-xl md:text-2xl font-light md:w-2/3">
              Try to contact me on Discord, since i'll be more active on it.
            </p>
            <a
              href="mailto:coderisaddicted@gmail.com"
              className="bg-blue-600 rounded-full py-3 px-8 md:py-4 md:px-12 w-max text-lg md:text-xl !mt-20"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div
          className="flex flex-col items-start md:items-center mt-8 md:mt-0"
          style={{ flexBasis: "50%" }}
        >
          <ul className="text-white-secondary font-openSans font-bold space-y-5 md:text-2xl text-lg">
            <li>
              <a
                href="https://github.com/Yagnik-Patel-47"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaGithub size={30} color="#3b82f6" />
                <p>My Github</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:coderisaddicted@gmail.com"
                className="flex space-x-5 items-center hover:text-white"
              >
                <HiMail size={30} color="#3b82f6" />
                <p>coderisaddicted@gmail.com</p>
              </a>
            </li>
            <li>
              <a
                href="https://discordapp.com/users/777172247290052648/"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaDiscord size={30} color="#3b82f6" />
                <p>On Discord</p>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Yagnik__Patel_"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaTwitter size={30} color="#3b82f6" />
                <p>On Twitter</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/coding_freak._"
                className="flex space-x-5 items-center hover:text-white"
              >
                <FaInstagram size={30} color="#3b82f6" />
                <p>On Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
