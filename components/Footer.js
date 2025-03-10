// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">StudentJobs</h3>
            <p className="text-gray-300">
              Hitta det perfekta studentjobbet, praktikplatsen eller deltidstjänsten i Sverige.
              Data tillhandahålls av Arbetsförmedlingens API.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/search?q=praktik" className="hover:text-white">Praktikplatser</Link></li>
              <li><Link href="/search?q=sommarjobb" className="hover:text-white">Sommarjobb</Link></li>
              <li><Link href="/search?q=deltid" className="hover:text-white">Deltidsjobb</Link></li>
              <li><Link href="/search?q=junior" className="hover:text-white">Juniorpositioner</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resurser</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white">Om oss</Link></li>
              <li><Link href="/tips" className="hover:text-white">Jobbsökartips</Link></li>
              <li><a href="https://jobtechdev.se/en" className="hover:text-white" target="_blank" rel="noopener noreferrer">JobTech Dev</a></li>
              <li><a href="https://arbetsformedlingen.se/" className="hover:text-white" target="_blank" rel="noopener noreferrer">Arbetsförmedlingen</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; {currentYear} StudentJobs. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}