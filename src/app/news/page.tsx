import Navbar from '@/components/Navbar';

export default function News() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <div className="prose prose-lg max-w-none mb-16">
          {/* No upcoming events at this time. */}
        </div>
        <h1 className="text-4xl font-bold mb-8">Past Events</h1>
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              July 22, 2025
            </div>
            <div>
              Our position paper on <span className="italic">"Machine Translation in the era of Large Language Models: A Survey of Historical and Emerging Problems"</span> is accepted to appear at the special edition of the Information journal on Machine Translation. Special thanks to my co-authors and mentors Marcello Federico, Alexandra Birch, Philipp Koehn, Nizar Habash and Kyunghyun Cho for their valuable and insightful feedback and directions.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              July 5, 2025
            </div>
            <div>
              I was an invited speaker at the "Next-Gen Intelligence: Powered by Women" panel organized by IEEE Women in Engineering Azerbaijan.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              April 15, 2025
            </div>
            <div>
              Our paper <span className="italic">"TUMLU: A Unified and Native Language Understanding Benchmark for Turkic Languages"</span> is accepted to be published at ACL as a main conference paper. Congratulations to all authors and wishing it to be a useful new benchmark for LLM assessment in Turkic languages.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              April 11, 2025
            </div>
            <div>
              Keynote speech at the AI and Big Data Conference in Baku.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              February 25, 2025
            </div>
            <div>
              Our paper "Evaluating morphological compositional generalization in large language models" is accepted to appear at NAACL. The paper evaluates language understanding in LLMs in terms of morphological compositional generalization and collects evidence on significant fallbacks in understanding basic grammatical rules in multiple languages. Thanks to everyone for their hard and fine work in this original research contribution.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              November 16, 2024
            </div>
            <div>
              The 4th Workshop on Multilingual Representation Learning took place in collocation with The 2024 Conference on Empirical Methods in Natural Language Processing (EMNLP) in Miami, US. The program is available online on the <a href="https://sigtyp.github.io/ws2024-mrl.html" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">workshop website</a>.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              November 15, 2024
            </div>
            <div>
              I gave a tutorial on the Challenges of Machine Translation in Finance in the Age of Large Language Models at the 5th ACM International Conference on AI in Finance together with Arturo Oncevay, Charese Smiley and Joy Sain, JPMorganChase.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              August 15, 2024
            </div>
            <div>
              The 1st workshop of the ACL Special Interest Group on Turkic Languages (SIGTURK) took place in collocation with Annual Meeting of The Association for Computational Linguistics (ACL) in Bangkok, Thailand. The proceedings are available on the <a href="https://aclanthology.org/volumes/2024.sigturk-1/" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">ACL Anthology</a>.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-gray-600">
              June 4, 2024
            </div>
            <div>
              I gave an invited seminar at the United Nations Headquarters in New York on Machine Translation Technology for Low-resourced Languages and Language Varieties together with Kyunghyun Cho.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 