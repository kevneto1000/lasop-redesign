"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const courses = [
  {
    title: "Full-stack Web Software Development & AI",
    duration: "6 Months",
    fee: "₦450K",
    path: "/courses/full-stack-ai",
  },
  {
    title: "Data Science with Python & R",
    duration: "5 Months",
    fee: "₦450K",
    path: "/courses/data-science",
  },
  {
    title: "AI Automation",
    duration: "2 Months",
    fee: "₦250K",
    path: "/courses/ai-automation",
  },
  {
    title: "Business Startup & Growth to ₦50M",
    duration: "6 Months",
    fee: "₦450K",
    path: "/courses/business-growth",
  },
  {
    title: "Computer & Mobile Phone Repair",
    duration: "6 Months",
    fee: "₦550K",
    path: "/courses/phone-repair",
  },
  {
    title: "Car Diagnosis & Programming",
    duration: "2 Months",
    fee: "₦250K",
    path: "/courses/car-diagnosis",
  },
  {
    title: "Artificial Intelligence Engineering",
    duration: "4 Months",
    fee: "₦450K",
    path: "/courses/ai-engineering",
  },
  {
    title: "Cyber Security",
    duration: "5 Months",
    fee: "₦450K",
    path: "/courses/cyber-security",
  },
  {
    title: "Project Management & Business Development",
    duration: "2 Months",
    fee: "₦250K",
    path: "/courses/project-management",
  },
  {
    title: "Automobile Rewire & Electricals",
    duration: "6 Months",
    fee: "₦450K",
    path: "/courses/automobile-electricals",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#071224]/95 via-[#0B1730]/95 to-[#0A1A38]/95 backdrop-blur-xl border-b border-blue-900/40 shadow-[0_8px_32px_rgba(0,0,0,0.18)]">
      <div className="container-width h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.webp" alt="LASOP Logo" width={45} height={45} />

          <h1 className="text-2xl font-bold text-[#8BB8FF] tracking-wide">LASOP</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Courses */}
          <div className="relative">
            <div className="group">
              {/* Trigger */}
              <button className="h-20 flex items-center gap-1 font-medium text-slate-200 hover:text-[#60A5FA] transition duration-300">
                Courses
                <FiChevronDown className="group-hover:rotate-180 transition duration-300" />
              </button>

              {/* Dropdown */}
              <div className="
                    absolute left-1/2 top-full
                    -translate-x-1/2
                    pt-1
                    opacity-0 invisible
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    transition-all duration-300
                "
              >
                {/* Actual Card */}
                <div className="
                        w-[850px]
                        bg-gradient-to-br
                        from-blue-50
                        to-blue-100
                        border border-blue-200
                        rounded-md
                        shadow-2xl shadow-blue-200/40
                        p-4
                    "
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-[#004ac6]">
                      Explore LASOP Programs
                    </h2>
                  </div>

                  {/* Courses Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {courses.map((course) => (
                      <Link
                        key={course.title}
                        href={course.path}
                        className="
                            group/item
                            bg-white/70
                            border border-blue-100
                            rounded-md
                            p-2
                            hover:bg-[#004ac6]
                            hover:shadow-lg
                            transition duration-300
                        "
                      >
                        <h3 className="font-semibold text-slate-800 group-hover/item:text-white transition">
                          {course.title}
                        </h3>
                      </Link>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-blue-200 mt-6 pt-5 flex items-center justify-between">
                    <p className="text-sm text-slate-600">
                      Find the perfect career path for you.
                    </p>

                    <Link
                      href="/courses"
                      className="font-semibold text-[#004ac6] hover:underline"
                    >
                      View All Courses →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/webinar" className="text-slate-200 hover:text-[#60A5FA] transition duration-300">
            Webinar
          </Link>

          <Link href="/calendar" className="text-slate-200 hover:text-[#60A5FA] transition duration-300">
            Calendar
          </Link>

          <Link href="/about" className="text-slate-200 hover:text-[#60A5FA] transition duration-300">
            About
          </Link>

          <Link href="/faqs" className="text-slate-200 hover:text-[#60A5FA] transition duration-300">
            FAQs
          </Link>

          <Link href="/contact" className="text-slate-200 hover:text-[#60A5FA] transition duration-300">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <button
          className=" hidden lg:flex items-center justify-center bg-[#0057E7] text-white px-5 py-2 rounded-lg font-semibold  shadow-[0_10px_30px_rgba(0,87,231,0.35)] hover:bg-[#0A66FF] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer"
        >
          Enroll Now
        </button>

        {/* Mobile */}
        <button className="lg:hidden text-3xl">☰</button>
      </div>
    </header>
  );
}
