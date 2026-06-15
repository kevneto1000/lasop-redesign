import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#040B18] border-t border-white/10">

      <div className="container-width py-20">

        {/* Top Section */}
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.webp"
                alt="LASOP"
                width={45}
                height={45}
              />

              <h2 className="text-2xl font-bold text-white">
                LASOP
              </h2>
            </div>

            <p className="text-slate-400 leading-8">
              Practical technology, business and vocational
              training designed to prepare students for
              real opportunities.
            </p>

            <p className="text-blue-400 font-medium mt-4">
              Learn. Study. Work.
            </p>

          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Programs
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="/courses/full-stack-ai"
                  className="hover:text-blue-400 transition"
                >
                  Full Stack Development & AI
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/data-science"
                  className="hover:text-blue-400 transition"
                >
                  Data Science
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/cyber-security"
                  className="hover:text-blue-400 transition"
                >
                  Cyber Security
                </Link>
              </li>

              <li>
                <Link
                  href="/courses/ai-engineering"
                  className="hover:text-blue-400 transition"
                >
                  AI Engineering
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/webinar" className="hover:text-blue-400 transition">
                  Webinar
                </Link>
              </li>

              <li>
                <Link href="/calendar" className="hover:text-blue-400 transition">
                  Calendar
                </Link>
              </li>

              <li>
                <Link href="/faqs" className="hover:text-blue-400 transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FiPhone className="text-blue-400 mt-1" />
                <span className="text-slate-400">
                  +234 702 571 3326
                </span>
              </div>

              <div className="flex gap-3">
                <FiMail className="text-blue-400 mt-1" />
                <span className="text-slate-400">
                  www.lasop.net
                </span>
              </div>

              <div className="flex gap-3">
                <FiMapPin className="text-blue-400 mt-1" />
                <span className="text-slate-400">
                  Lagos, Nigeria
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          {/* Socials */}
          <div className="flex gap-4">

            <a
              href="https://www.instagram.com/lagosschoolofprogramming/"
              target="_blank"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition"
            >
              <FiInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/lasopdotnet/posts/?feedView=all"
              target="_blank"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition"
            >
              <FiLinkedin />
            </a>

          </div>

          <p className="text-slate-500 text-sm text-center">
            © 2026 LASOP. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}