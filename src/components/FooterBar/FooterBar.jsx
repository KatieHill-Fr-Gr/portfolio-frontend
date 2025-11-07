import './FooterBar.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'


const currentYear = new Date().getFullYear();

export default function FooterWithTailwind() {
  return (
    <footer className="bg-white w-full">
      <div className="border-t border-gray-200 mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-2xl font-bold mb-6 text-gray-900">
              short blurb about me like an elevator pitch just two lines or something
            </h5>
          </div>

          {/* Contact Details */}
          <div className="text-right">
            <h6 className="text-lg font-semibold text-gray-900 mb-4 text-left">Contact</h6>
            <ul className="w-full text-gray-600">
              <li className="flex items-center gap-1 w-full py-2">
                <span>Email: </span>
                <a
                  href="mailto:khill.fr.gr@gmail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  khill.fr.gr@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1 w-full py-2">
                <span>Phone: </span>
                <a
                  href="tel:+447847924407"
                  className="hover:text-gray-900 transition-colors"
                >
                  +44 7847 924407
                </a>
              </li>
              <li className="flex items-center gap-1 w-full py-2">
                <span>Location: </span>
                <span>London, UK</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-right">
            <h6 className="text-lg font-semibold text-gray-900 mb-4 text-left">Pages</h6>
            <ul className="divide-y divide-gray-200 w-full">
              <li>
                <Link
                  to="/projects"
                  className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>Projects</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>About</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <span>Articles</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
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


