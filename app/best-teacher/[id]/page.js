import Header from "@/components/Header";
import Image from "next/image";

export default function TeacherDetail({ params }) {
  const teachers = [
    {
      id: "T001",
      name: "Ahmed Ali",
      course: "Web and App Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T002",
      name: "Sara Khan",
      course: "App Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T003",
      name: "Usman Raza",
      course: "Web Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T004",
      name: "Fatima Malik",
      course: "Python Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T005",
      name: "Hassan Mirza",
      course: "Machine Learning",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T006",
      name: "Ayesha Noor",
      course: "Data Science",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T007",
      name: "Bilal Shah",
      course: "Cybersecurity",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T008",
      name: "Zainab Farooq",
      course: "AI for Beginners",
      image: "https://via.placeholder.com/150",
    },
    {
      id: "T009",
      name: "Kamran Zafar",
      course: "Blockchain Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T010",
      name: "Nadia Qureshi",
      course: "Cloud Computing",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T011",
      name: "Raza Khan",
      course: "React.js Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T012",
      name: "Sana Ahmed",
      course: "Vue.js Essentials",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T013",
      name: "Waqas Ali",
      course: "Angular Development",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T014",
      name: "Amna Tariq",
      course: "Java Programming",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T015",
      name: "Ali Raza",
      course: "C++ Programming",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T016",
      name: "Maira Khan",
      course: "Swift for iOS",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T017",
      name: "Hira Ali",
      course: "UI/UX Design",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T018",
      name: "Kashan Malik",
      course: "Digital Marketing",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T019",
      name: "Noman Siddiqui",
      course: "Big Data Analytics",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
    {
      id: "T020",
      name: "Iqra Qamar",
      course: "Ethical Hacking",
      image:
        "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=-F_sZl6saA5wNg2OTdO3zcHZ3aQ2ml9Ru-PXGcUDdHg=",
    },
  ];
  const detail = teachers.filter((data) => data.id == params.id);
  console.log(detail);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-24">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            {detail.map((data) => {
              return (
                <div key={data.id} className="lg:w-4/5 mx-auto flex flex-wrap">
                  <Image
                    height={400}
                    width={400}
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    alt={data.name}
                    src={data.image}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      {data.course}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {data.name}
                    </h1>
                    <p className="leading-relaxed">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam indxgo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean shorts
                      keytar banjo tattooed umami cardigan.
                    </p>
                  </div>
                  ;
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
