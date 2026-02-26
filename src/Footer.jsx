import { FaGithub, FaRocket } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-3 px-2 text-center transition-colors duration-300 ${
        darkMode ? "bg-[rgb(16,25,46)] text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      
      
    </footer>
  );
};

export default Footer;
