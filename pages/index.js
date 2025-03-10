// pages/index.js
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import Link from 'next/link';
import { getStudentSearchStrategies } from '../lib/jobApi';

export default function Home() {
  // Get strategies but don't directly render them in JSX
  const searchStrategies = getStudentSearchStrategies();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gradient-to-br from-primary-600/95 via-primary-700/95 to-primary-800/95 relative overflow-hidden flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.05] -z-1"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Hitta ditt perfekta studentjobb
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-primary-50/90 animate-slide-up">
              Din framtid börjar här - Utforska tusentals studentvänliga jobb i Sverige
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-soft-lg animate-slide-up border border-white/20">
              <SearchForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Search Categories */}
      <section className="py-16 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gray-900">
            Populära Sökningar
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Hitta relevanta jobb med ett klick i våra kurerade jobbkategorier
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Quick search buttons */}
            <QuickSearchButton
              href={{
                pathname: '/search',
                query: { q: 'deltid' }
              }}
              icon="⏰"
              text="Deltidsjobb"
            />
            <QuickSearchButton
              href={{
                pathname: '/search',
                query: { q: 'praktik' }
              }}
              icon="🎓"
              text="Praktikplatser"
            />
            <QuickSearchButton
              href={{
                pathname: '/search',
                query: { q: 'sommarjobb' }
              }}
              icon="☀️"
              text="Sommarjobb"
            />
            <QuickSearchButton
              href={{
                pathname: '/search',
                query: { remote: 'true' }
              }}
              icon="🏠"
              text="Distansarbete"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function QuickSearchButton({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="group bg-white hover:bg-primary-50 border border-gray-100 rounded-xl p-6 text-center transition-all duration-200 hover:shadow-soft hover:-translate-y-1"
    >
      <span className="text-3xl mb-3 block">{icon}</span>
      <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
        {text}
      </span>
    </Link>
  );
}