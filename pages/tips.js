// pages/tips.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function JobSearchTipsPage() {
  return (
    <Layout 
      title="Jobbsökartips för studenter | StudentJobs"
      description="Tips och råd för studenter som söker jobb, praktik och deltidsarbete i Sverige"
    >
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Jobbsökartips för studenter</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Maximera dina chanser att hitta rätt jobb med våra tips och strategier
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* CV Builder Placeholder */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-4">CV-skapare</h2>
              <p className="mb-6">
                Skapa ett professionellt CV som hjälper dig att sticka ut från mängden. Vår CV-skapare är under utveckling och kommer snart att vara tillgänglig.
              </p>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <p className="text-primary-50">⚡ Kommer snart!</p>
                <ul className="mt-4 space-y-2 text-primary-50">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Professionella mallar
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Enkel att använda
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    ATS-optimerad
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kom igång</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Identifiera dina kompetenser och intressen</h3>
              <p className="mb-4">
                Innan du börjar söka jobb, ta dig tid att reflektera över dina färdigheter, intressen och karriärmål. Denna självutvärdering hjälper dig att fokusera din sökning på positioner som matchar dina styrkor och ambitioner.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gör en lista över dina tekniska och mjuka färdigheter</li>
                <li>Tänk på din akademiska bakgrund och kursprojekt</li>
                <li>Fundera på branscher och roller som intresserar dig</li>
                <li>Identifiera dina schemaläggningsbegränsningar som student</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Förbered ditt ansökningsmaterial</h3>
              <p className="mb-4">
                Med välförberett ansökningsmaterial kan du snabbt söka när du hittar lämpliga tjänster.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Skapa ett starkt, anpassat CV som lyfter fram relevant erfarenhet</li>
                <li>Utveckla ett personligt brev som mall som du kan anpassa</li>
                <li>Samla referenser från professorer, tidigare arbetsgivare eller mentorer</li>
                <li>Skaffa en professionell e-postadress och röstbrevlåda</li>
                <li>Se över dina sociala medieprofiler</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Effektiva sökstrategier</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Använd StudentJobs effektivt</h3>
              <p className="mb-4">
                Vår plattform erbjuder flera funktioner för att hjälpa dig hitta rätt studentjobb. Här är hur du får ut det mesta av dem:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Använd specifika nyckelord relaterade till ditt studieområde</li>
                <li>Filtrera efter plats för att hitta jobb nära ditt universitet eller hem</li>
                <li>Markera "Distansarbete" om du behöver flexibilitet</li>
                <li>Utforska våra snabbsökskategorier för studentspecifika möjligheter</li>
                <li>Spara intressanta jobb för att söka senare</li>
                <li>Aktivera jobbnotiser för att bli meddelad om nya möjligheter</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Utöka din sökning</h3>
              <p className="mb-4">
                Begränsa dig inte till bara ett sätt att söka. Kasta ut ett bredare nät med dessa strategier:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Använd olika termer: "praktik", "trainee", "assistent", "junior", "deltid"</li>
                <li>Sök efter positioner i relaterade områden som kan använda dina färdigheter</li>
                <li>Leta efter säsongsbaserade möjligheter (sommarjobb, helgarbete)</li>
                <li>Kolla universitetets jobbportaler och karriärcenter</li>
                <li>Delta i jobbmässor och nätverksevenemang</li>
                <li>Kontakta företag du är intresserad av direkt, även om de inte har utannonserade tjänster</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Studentspecifika söktermer</h3>
              <p className="mb-4">
                När du söker, prova dessa termer för att hitta studentvänliga positioner:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Link href="/search?q=deltid+student" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  deltid student
                </Link>
                <Link href="/search?q=sommarjobb" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  sommarjobb
                </Link>
                <Link href="/search?q=praktik" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  praktik
                </Link>
                <Link href="/search?q=extrajobb" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  extrajobb
                </Link>
                <Link href="/search?q=junior+trainee" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  junior trainee
                </Link>
                <Link href="/search?q=ingen+erfarenhet" className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded text-center">
                  ingen erfarenhet
                </Link>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Ansökningstips</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">Anpassa dina ansökningar</h3>
              <p className="mb-4">
                Ta dig tid att skräddarsy varje ansökan för att matcha de specifika jobbkraven:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Läs jobbeskrivningen noggrant och markera viktiga kompetenser och krav</li>
                <li>Justera ditt CV för att betona relevant erfarenhet och färdigheter</li>
                <li>Anpassa ditt personliga brev för att adressera specifika jobbkrav</li>
                <li>Använd nyckelord från jobbannonsen i din ansökan</li>
                <li>Undersök företaget och referera till specifik information i din ansökan</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Följ upp på rätt sätt</h3>
              <p className="mb-4">
                Efter att du skickat in din ansökan kan en genomtänkt uppföljning hjälpa dig att sticka ut:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vänta minst en vecka innan du följer upp</li>
                <li>Skicka ett artigt mail och fråga om din ansökans status</li>
                <li>Upprepa kort ditt intresse för tjänsten</li>
                <li>Respektera arbetsgivarens tid och process</li>
                <li>Om du inte får svar kan du följa upp en gång till efter ytterligare en vecka</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Balansera arbete och studier</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Hitta rätt balans</h3>
              <p className="mb-4">
                Att arbeta samtidigt som man studerar kan vara utmanande. Här är några tips för att hjälpa dig upprätthålla en hälsosam balans:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Var realistisk med hur många timmar du kan arbeta varje vecka</li>
                <li>Sök efter flexibla positioner som kan anpassas runt dina tentaperioder</li>
                <li>Överväg distansarbete för att spara restid</li>
                <li>Kommunicera tydligt med arbetsgivare om ditt akademiska schema</li>
                <li>Prioritera dina akademiska skyldigheter och hälsa</li>
                <li>Använd en kalender för att organisera ditt arbets- och studieschema</li>
                <li>Var inte rädd för att justera dina arbetstimmar om studierna påverkas negativt</li>
              </ul>
            </div>
          </section>
          
          <div className="mt-12 text-center">
            <Link 
              href="/search"
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Börja söka jobb
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}