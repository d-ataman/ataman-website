import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-64 h-80 overflow-hidden relative md:mt-8 md:-translate-y-4">
            <Image
              src="/images/profile.jpg"
              alt="Duygu Ataman"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <div className="prose prose-lg text-justify">
              <p className="mb-4">
                I am an electrical engineer and computer scientist with over a decade of research experience in developing efficient and accessible deep learning methodologies for language modeling. I am currently an incoming assistant professor at Middle East Technical University, Graduate School of Informatics. Previously, I was an assistant professor and faculty fellow at New York University, Courant Institute of Mathematical Sciences and a post-doctoral researcher at the University of Zürich, Institute for Computational Linguistics. I completed my Ph.D. on neural sequence modeling and machine translation at the University of Trento, and I was also a visiting post-graduate research student at the School of Informatics, University of Edinburgh. I hold a bachelor's degree in electrical and electronics engineering from Middle East Technical University and a master's degree in electrical engineering from the University of Leuven.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="prose prose-lg max-w-none text-justify">
            <p className="mb-4">
              My research focuses on building low-cost, efficient and reliable artificial intelligence systems for safe and reliable deployment in next-generation of applications in education and media. I am especially interested in designing efficient and generalizable deep learning algorithms for developing computational models of language generation, reasoning and assistance. In addition to designing novel methodologies for computational modeling, I also actively work on developing evaluation benchmarks and measures that can assess the applicability of systems across modalities (e.g. vision to text), languages, or different types of inference tasks. I am grateful that my research has been supported by research awards from Microsoft and Google. I am also a recipient of the 2025 TÜBİTAK 2232-A International Fellowship for Outstanding Researchers.
            </p>
            <p>
              More details on my research can be found on my <a href="https://scholar.google.it/citations?user=nFEUTOIAAAAJ&hl=en" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-invert max-w-none text-justify">
            <h2 className="text-2xl font-bold mb-6">Important update:</h2>
            <p className="mb-4">
              I have fully funded PhD and MSc positions available at my new research group to study inter-disciplinary topics around deep learning methods for language modeling. I am especially interested in students with multi-disciplinary backgrounds, including electrical/computer engineering, computer science, mathematics, physics, philosophy, linguistics, and related fields in humanities. Excellent programming and English communication skills are required, previous research experience and publications are preferred. Students enrolled in PhD programs at other departments at Middle East Technical University as well as other universities in Turkey or abroad, and students interested in collaborations with me in the form of visiting positions or internships are also welcome to inquire.
            </p>
            <p className="mb-4">
              If you are considering starting a PhD you can also contact me to obtain more information on the graduate programs and how to join my group. More details on the graduate programs at the Departments of Information Systems and Cognitive Sciences can be found at the <a href="https://ii.metu.edu.tr" className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">institute website</a>.
            </p>
            <p>
              If you are interested in working with me please feel free to inquire with your CV and a brief research statement through <a href="mailto:contact@duyguataman.com" className="text-blue-400 hover:text-blue-300">e-mail</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
