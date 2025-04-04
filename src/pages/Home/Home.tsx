import PageLayout from "../../components/PageLayout";
import "./Home.css";

function Home() {
  return (
    <PageLayout title="Home">
      <div className="flex flex-col">
        <div className="home-row-regular h-fit flex items-center justify-center py-32 bg-gray-200 shadow-2xl">
          <div className="home-wrapper">
            <img
              src="/images/home/logo.webp"
              alt="Logo JCS"
              className="image"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-24">
            <h1 className="text-5xl/20 text-center font-bold font-oswald">
              Una{" "}
              <span className="pt-0.5 pb-2 px-3 bg-black rounded-4xl text-white">
                famiglia
              </span>{" "}
              prima ancora di una palestra
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                <p>
                  <strong>Judo Club Sassuolo</strong> è questo e molto altro.
                  <br />
                  Che tu sia un esperto judoka o qualcuno alle prime armi,
                  possiamo garantirti soltanto il massimo dai nostri{" "}
                  <strong>istruttori professionisti</strong> e qualificati.
                </p>
              </div>
              <a
                href="/maestri"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                I maestri
              </a>
            </div>
          </div>
        </div>
        <div className="home-row-reversed h-fit flex items-center justify-center py-32">
          <div className="home-wrapper">
            <img
              src="/images/home/rossella.jpg"
              alt="Lezione"
              className="image"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-24">
            <h1 className="text-5xl/20 text-center text-green-900 font-bold font-oswald">
              Tutti{" "}
              <span className="pt-0.5 pb-2 px-3 bg-green-900 rounded-3xl text-white">
                insieme
              </span>{" "}
              per migliorare
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                <p>
                  Il Judo è uno sport individuale, tuttavia è fondamentale{" "}
                  <strong>collaborare</strong> per beneficiare al 100% degli
                  allenamenti. Noi questo lo sappiamo bene e per questo motivo,
                  da noi non sarai mai lasciato <strong>indietro</strong>!
                </p>
              </div>
              <a
                href="/corsi"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                I nostri corsi
              </a>
            </div>
          </div>
        </div>
        <div className="home-row-regular h-fit flex items-center justify-center py-32 bg-emerald-600/50 shadow-2xl">
          <div className="home-wrapper">
            <img
              src="/images/home/oldpic.jpg"
              alt="Immagine Vecchia"
              className="image"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-24">
            <h1 className="text-5xl/20 text-center font-bold font-oswald">
              Il nostro lavoro dal{" "}
              <span className="pt-0.5 pb-2 px-3 bg-black rounded-4xl text-white">
                1988
              </span>
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <p className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                <p>
                  Il nostro team, capitanato dal maestro{" "}
                  <strong>Giancarlo Casolari</strong>, è una realtà ormai da
                  molti anni. Gli studi del maestro Casolari, coadiuvati alle
                  abilità e alla <strong>professionalità</strong> dei suoi
                  assistenti, hanno reso, negli anni, Judo Club Sassuolo un
                  punto di riferimento per agonisti, amatori e bambini di{" "}
                  <strong>ogni età</strong>.
                </p>
              </p>
              <a
                href="/storia"
                className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
              >
                La nostra storia
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Home;
