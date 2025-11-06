import './FooterBar.css'
import { SocialIcon } from 'react-social-icons'

const LINKS = [
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export default function FooterWithTailwind() {
  return (
    <footer className="bg-white w-full">
      <div className="border-t border-gray-200 mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo / Title */}
          <h5 className="text-2xl font-bold mb-6 text-gray-900">
            Get in touch
          </h5>

          {/* Links */}
          <div className="grid grid-cols-3 gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <li className="mb-3 font-medium text-gray-500">{title}</li>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="block py-1.5 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4">
          <p className="text-black-700 text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear}{" "}
            Katie Hill. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-gray-700">
            <div className="w-[28px] h-[28px]">
              <SocialIcon url="https://www.instagram.com/katiefrgr" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="w-[28px] h-[28px]">
              <SocialIcon url="https://www.linkedin.com/in/katie-hill-fullstack/" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="w-[28px] h-[28px]">
              <SocialIcon url="https://github.com/KatieHill-Fr-Gr" style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


