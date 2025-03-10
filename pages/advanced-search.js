// pages/advanced-search.js
import Layout from '../components/Layout';
import AdvancedSearchForm from '../components/AdvancedSearchForm';

export default function AdvancedSearchPage() {
  return (
    <Layout 
      title="Avancerad Jobbsökning | StudentJobs"
      description="Hitta specialiserade jobbmöjligheter för studenter med våra avancerade sökverktyg"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Avancerad Jobbsökning</h1>
          <p className="text-gray-600 mb-8 text-center">
            Använd våra specialiserade sökverktyg för att hitta det perfekta studentjobbet
          </p>
          
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <AdvancedSearchForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}