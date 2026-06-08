import { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, User } from 'lucide-react';
import Image from 'next/image';

export default function RecentBlogs() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const posts = [
    {
      title: "The 2026 Dubai Corporate Tax Rules & Exemptions Explained",
      category: "TAXES & REGULATORY",
      date: "May 28, 2026",
      readTime: "6 Min Read",
      image: "/assets/blog_tax_regulations.png",
      excerpt: "Deep dive into when a Free Zone enterprise qualifies for the prestigious 0% corporate tax rate and how to structuredly maintain non-qualifying income safely under 2026 OECD tax indices.",
      content: `### Understanding the 2026 UAE Corporate Tax Landscape

As of 2026, the UAE has fully integrated its 9% corporate tax framework on business profits. However, substantial exemptions remain active for companies established inside recognized Free Zone jurisdictions that maintain "Qualifying Income" status.

#### Key Prerequisites to Secure the 0% Tax Benefit:
1. **Maintain Adequate Substance**: Your enterprise must operate a physical or flexi desk, execute key decisions inside the zone, and incur reasonable local operating expenses.
2. **Avoid Retail Trade with Mainland**: If your Free Zone company trades directly with domestic UAE mainland consumers, those specific transactions are taxed at 9%, whereas international or inter-zone activities maintain the 0% benefit.
3. **Submit Annual Audited Accounts**: Failing to present accurate, GAAP-compliant financial summaries to registries instantly disqualifies the exemption status.

*Recommendation*: Consult with the legal counsel at Scale Partners to verify your corporate classification qualifies prior to file submission.`,
      author: "Advocate Tarik Al-Mehairi"
    },
    {
      title: "Mainland vs. Free Zone in 2026: An Honest Corporate Audit",
      category: "STRATEGIC ARBITRAGE",
      date: "May 15, 2026",
      readTime: "8 Min Read",
      image: "/assets/blog_mainland_freezone.png",
      excerpt: "An objective financial breakdown comparing the local bidding capabilities, office overhead requirements, and absolute real-world licensing costs of Dubai Mainland vs. Free Zones.",
      content: `### Making the Right Choice: Mainland vs. Free Zone

Choosing between Mainland and Free Zone is one of the most critical foundational structural decisions you will make. It dictates where you can trade, how you source clients, and your overall tax profile.

#### 1. Dubai Mainland (DET Registered)
* **Geographical Scope**: Trade anywhere in the UAE, participate in government tenders, and establish multiple physical retail branches easily.
* **Ownership**: 100% foreign ownership is fully permitted across 1,000+ commercial and professional activities.
* **Property Commitment**: Requires a physical office tenancy contract (Ejari) or access inside pre-approved premium co-working spaces.

#### 2. Free Zones (Meydan, IFZA, DMCC)
* **Geographical Scope**: Best for SaaS, web3, and cross-border consulting. Limited right to bid directly for local government onshore contracts without local distributors.
* **Fees**: Starting package structures are significantly cheaper (sometimes less than half of Mainland setup costs) and offer excellent digital remote management.
* **Property Commitment**: Shared virtual desk plans are fully approved for residency visa allocations.`,
      author: "Elena Rostova"
    },
    {
      title: "How to Fast-track a 10-Year UAE Golden Visa in 4 Hours",
      category: "EXECUTIVE RESIDENCY",
      date: "May 02, 2026",
      readTime: "5 Min Read",
      image: "/assets/blog_golden_visa.png",
      excerpt: "The ultimate direct walkthrough for active startup directors, specialized global tech talent, and high-net-worth real estate investors looking to secure executive status.",
      content: `### Accelerating Your UAE Golden Visa Process

The prestigious UAE Golden Visa grants high-net-worth individuals, active technology founders, and senior professionals self-sponsored 10-year physical residency in Dubai.

#### The Three Main Golden Visa Pathways in 2026:
* **The Pioneer Founder Track**: Secure a DET or Free Zone license with capitalization value exceeding AED 500,000, accompanied by a letter of endorsement from a certified audit firm.
* **The High-Income Director Track**: Present a verified employment contract with a monthly executive base salary of at least AED 30,000, verified by official bank statements and a certified university degree.
* **The Real Estate Track**: Acquire local physical residential property valued at AED 2,000,000 or greater, with title documents issued in full by the Dubai Land Department.

#### Fast-Track Medical Biometrics:
By utilizing Scale Partners' VIP administrative PRO channel, your medical fitness screening, blood markers check, and biometric fingerprint capturing are prioritized and cleared directly in under 4 hours, bypassing standard day-long public queues.`,
      author: "Faisal Al-Suwaidi"
    }
  ];

  return (
    <section id="recent_blogs" className="py-16 bg-[#FBFBFD] font-sans text-left border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-500 px-3 py-1 bg-zinc-50 rounded-full font-mono text-[9.5px] font-bold uppercase tracking-widest border border-gold-500/10">
              <BookOpen className="w-3.5 h-3.5 text-gold-500" />
              <span>KNOWLEDGE PORTAL</span>
            </span>
            <h2 className="text-[30px] sm:text-[36px] font-sans font-light text-zinc-900 tracking-tight leading-snug">
              Recent Blogs & Insights
            </h2>
            <p className="text-[14px] text-zinc-500">
              Expert articles, legislative audits, and tax strategy breakdowns authored by active Dubai corporate advisory specialists.
            </p>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full h-44 overflow-hidden border-b border-zinc-100">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider text-gold-500">
                  <span>{post.category}</span>
                  <span className="text-zinc-400 font-medium">{post.readTime}</span>
                </div>
                
                <h3 className="text-[16px] font-bold text-zinc-900 tracking-tight leading-snug hover:text-gold-500 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-[12.5px] text-zinc-500 leading-relaxed font-sans font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* Read button & date */}
              <div className="p-6 pt-0 border-t border-zinc-100 mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-[11px] text-zinc-400 font-sans">
                  <Calendar className="w-3.5 h-3.5 text-zinc-300" />
                  <span>{post.date}</span>
                </div>
                
                <button
                  onClick={() => setSelectedPost(idx)}
                  className="text-[12px] font-semibold text-gold-500 hover:text-[#0B2E16] flex items-center space-x-1 transition-colors hover:scale-102 cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT BLOGS LIGHT MODAL */}
        {selectedPost !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-200 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 bg-zinc-50 hover:bg-zinc-100 rounded-full text-zinc-500 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-[10px] font-mono text-gold-500 font-bold">
                  <span>{posts[selectedPost].category}</span>
                  <span>•</span>
                  <span>{posts[selectedPost].readTime}</span>
                </div>
                
                <h2 className="text-[20px] sm:text-[24px] font-bold text-zinc-900 tracking-tight leading-tight">
                  {posts[selectedPost].title}
                </h2>

                <div className="flex items-center space-x-3.5 text-[11.5px] text-zinc-400 font-sans border-b border-zinc-100 pb-4">
                  <div className="flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-zinc-350" />
                    <span className="font-medium text-zinc-700">{posts[selectedPost].author}</span>
                  </div>
                  <span>•</span>
                  <span>Published {posts[selectedPost].date}</span>
                </div>

                <div className="text-[13.5px] text-zinc-650 leading-relaxed font-sans space-y-4 whitespace-pre-line prose">
                  {posts[selectedPost].content}
                </div>

                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>© 2026 Scale Partners UAE</span>
                  <span>Sovereign Knowledge Transfer Verified</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
