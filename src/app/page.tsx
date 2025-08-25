import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
          <div className="w-56 h-72 overflow-hidden relative md:mt-0 md:-translate-y-4">
            <Image
              src="/images/profile.jpg"
              alt="Duygu Ataman"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 -mt-4">
            <div className="prose prose-lg text-justify">
              <p className="mb-4">
                I am an assistant professor and principal investigator at the Graduate School of Informatics, Middle East Technical University, where I conduct my research on developing efficient, safe and accessible AI systems. Previously, I was an assistant professor and faculty fellow at New York University, Courant Institute of Mathematical Sciences and a post-doctoral researcher at the University of Zürich, Institute for Computational Linguistics. I completed my Ph.D. on neural sequence modeling for applications in machine translation at the University of Trento, and I was also a visiting post-graduate research student at the School of Informatics, University of Edinburgh. In my master's degree in electrical engineering at the University of Leuven I developed analysis techniques with EEG for studying speech perception in the human brain. I hold a bachelor's degree in electrical and electronics engineering from Middle East Technical University.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="prose prose-lg text-justify">
            <p className="mb-4">
              I am interested in a wide range of topics around self-supervised learning, representation theory, computational modeling of language, reasoning and the theory of mind. I have also contributed significantly to the assessment and development of generalizable and efficient language modeling architectures in order to make language technology accessible across the world, including economically disadvantaged locations where under-represented or under-resourced languages are spoken. In 2021 I have founded the ACL Special Interest Group on Turkic Languages, and since 2020 I co-organize the Multilingual Representation Learning Workshop at EMNLP. I am grateful that my research has been supported by research awards from Microsoft and Google. I am also a recipient of the 2025 TÜBİTAK 2232-A International Fellowship for Outstanding Researchers.
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
              I have fully funded PhD and MSc positions available at my research group to study inter-disciplinary topics around accessible and interpretable AI, including developing new and efficient methods for optimization, compression, tokenization, self-supervised, multi-modal and multi-task learning methods for language models, and learning computational models for reasoning, world representations, theory of mind and related applications at the intersection of AI and cognitive sciences. Students enrolled in PhD programs at other departments at Middle East Technical University as well as other universities in Turkey or abroad, and students interested in collaborations with me in the form of visiting positions or internships are also welcome to inquire.
            </p>
            <p className="mb-4">
              If you are considering starting a PhD you can also contact me to obtain more information on the graduate programs and how to join my group. More details on the graduate programs at the Department of Cognitive Sciences can be found at the institute website.
            </p>
            <p>
              If you are interested in working with me please feel free to inquire with your CV and a brief research statement through <a href="mailto:dataman@metu.edu.tr" className="text-blue-400 hover:text-blue-300">e-mail</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pt-12 pb-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-justify">
            <h2 className="text-2xl font-bold mb-6">Teaching</h2>
            <ul>
              <li>Fall 2025-2026 Machine Learning, Middle East Technical University</li>
              <li>2023-2024 Foundations of Machine Learning, New York University</li>
              <li>2021-2022 Introduction to Computer Science, New York University</li>
              <li>2020-2021 Creation and Annotation of Linguistic Resources, University of Zurich</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-justify">
            <h2 className="text-2xl font-bold mb-6">Students</h2>
            <ul>
              <li>Ibrahim Ethem Deveci, PhD, Middle East Technical University</li>
              <li>Burcu Alakus, PhD, Middle East Technical University</li>
              <li>Ilteris Bozkurt, PhD, Middle East Technical University</li>
              <li>Ali Eren Cetintas, PhD, Middle East Technical University</li>
              <li>Burak Tutar, MSc, Middle East Technical University</li>
              <li>Kavsar Huseynova, Visiting student, Baku Higher Oil School</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
