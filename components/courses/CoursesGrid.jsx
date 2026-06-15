import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

export default function CoursesGrid() {
  return (
    <section className="bg-[#071224] pb-24">
      <div className="container-width">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
            />
          ))}

        </div>

      </div>
    </section>
  );
}