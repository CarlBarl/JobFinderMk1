// pages/about.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout 
      title="Om StudentJobs | Hitta studentjobb i Sverige"
      description="Lär dig mer om StudentJobs, en plattform dedikerad till att hjälpa studenter hitta jobb, praktik och deltidsarbete i Sverige"
    >
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Om StudentJobs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Vi kopplar samman studenter med möjligheter i hela Sverige
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Vår mission</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                StudentJobs är dedikerad till att hjälpa studenter hitta meningsfulla arbetsmöjligheter som kompletterar deras studier och hjälper till att starta deras karriärer. Vi förstår de unika utmaningar som studenter möter när de ska balansera akademiska åtaganden med behovet av arbetslivserfarenhet.
              </p>
              <p className="mb-4">
                Vår plattform samlar jobbannonser från hela Sverige och gör det enkelt för studenter att upptäcka deltidstjänster, praktikplatser, sommarjobb och entry-level möjligheter som matchar deras kompetenser, intressen och scheman.
              </p>
              <p>
                Genom att erbjuda en specialiserad jobbsökarupplevelse anpassad för studenters behov, strävar vi efter att överbrygga klyftan mellan utbildning och arbetsliv, och hjälpa studenter få värdefull arbetslivserfarenhet under studietiden.
              </p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Hur det fungerar</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                StudentJobs använder Arbetsförmedlingens JobAd API för att få tillgång till jobbannonser från hela Sverige. Detta API ger en omfattande databas med arbetsmöjligheter från flera källor, inklusive:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Arbetsförmedlingen</li>
                <li>Större jobbportaler i Sverige</li>
                <li>Direktannonser från arbetsgivare</li>
              </ul>
              
              <p className="mb-4">
                Vi har byggt specialiserade sökverktyg och filter som hjälper studenter att snabbt hitta relevanta möjligheter. Vår plattform inkluderar:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Studentspecifika sökfilter (deltid, praktik, ingen erfarenhet krävs)</li>
                <li>Platsbaserad sökning</li>
                <li>Bransch- och områdesfilter</li>
                <li>Distansarbetesalternativ</li>
                <li>Hjälpsamma jobbsökartips och resurser</li>
              </ul>
              
              <p>
                När du hittar ett jobb du är intresserad av kopplar vi dig direkt till ansökningsprocessen genom den ursprungliga jobbannonsen. Vårt mål är att förenkla din jobbsökning, inte komplicera den med extra steg.
              </p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">API-information</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                Datan på StudentJobs drivs av JobAd API, en tjänst som tillhandahålls av Arbetsförmedlingen och JobTech Development.
              </p>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">API:ets huvudfunktioner:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Gratis att använda utan registrering</li>
                <li>Innehåller jobbannonser från flera källor i ett enhetligt API</li>
                <li>Uppdateras dagligen med nya annonser</li>
                <li>Använder maskininlärning för yrkesklassificering</li>
                <li>Implementerar det svenska klassificeringssystemet för yrken (SSYK)</li>
              </ul>
              
              <p className="mb-4">
                För utvecklare som är intresserade av att lära sig mer om JobAd API eller bygga egna applikationer med det, besök:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a 
                    href="https://jobtechdev.se/en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    JobTech Dev Platform
                  </a>
                </li>
                <li>
                  <a 
                    href="https://links.api.jobtechdev.se" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    JobAd API Documentation
                  </a>
                </li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Kontakta oss</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="mb-4">
                Vi värdesätter din feedback och förslag för att förbättra StudentJobs. Om du har frågor, stöter på problem eller vill dela idéer, kontakta oss:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-medium">E-post:</p>
                <p className="mb-3">support@studentjobs-example.se</p>
                
                <p className="font-medium">Följ oss:</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="text-pink-600 hover:text-pink-800">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="text-blue-800 hover:text-blue-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Tillbaka till startsidan
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}