import Navbar from '@/components/Navbar';

export default function News() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
        <div className="prose prose-lg max-w-none mb-16">
          <p>No upcoming events to display at the moment.</p>
        </div>
        <h1 className="text-4xl font-bold mb-8">Past Events</h1>
        <div className="prose prose-lg max-w-none">
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