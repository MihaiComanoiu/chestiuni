import Header from './components/Header';
import Footer from './components/Footer';
import PhotoGrid from './components/PhotoGrid';
import SEO from './components/SEO';
import { photos } from './data/photos';

function App() {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-white">
        <Header />

        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Capturing Life's Moments
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visual stories that capture emotion, light, and life through the lens
            </p>
          </section>

          <PhotoGrid photos={photos} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
