import PageLayout from "../../components/PageLayout";
import "./Corsi.css";

function Corsi() {
  return (
    <PageLayout title="Corsi">
      <div className="flex flex-col">
        <div className="h-fit flex flex-col gap-10 items-center py-24 lg:px-40 bg-gray-200 shadow-2xl">
          <h1 className="text-5xl text-center font-bold font-oswald pt-2 pb-3.5 px-4 bg-green-900 rounded-3xl text-white">
            Elementari
          </h1>
          <hr className="w-full border-gray-300" />
          <div className="corsi-row items-center">
            <div className="corsi-wrapper">
              <img
                src="/images/corsi/bimbimedals.jpeg"
                alt="Corso Elementari"
                className="corsi-image"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-20 text-center px-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Giorni e Orari
                </h1>
                <p className="text-xl font-oswald">
                  Il corso si terrà il <strong>lunedì</strong> e il{" "}
                  <strong>mercoledì</strong> dalle ore <strong>17:00</strong>{" "}
                  alle ore <strong>18:00</strong>
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Informazioni sul corso
                </h1>
                <p className="text-xl font-oswald">
                  Il corso insegnerà ai bambini dapprima le{" "}
                  <strong>basi del Judo</strong>, poi le tecniche più avanzate,
                  riadattando il tutto all'<strong>età dell'iscritto</strong>.
                  Il tutto verrà effettuato in un ambiente controllato e
                  professionale.
                  <br />
                  <br />
                  <em>Anche i bambini di 4-5 anni sono i benvenuti!</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit flex flex-col gap-10 items-center py-24 lg:px-40 shadow-2xl">
          <h1 className="text-5xl text-center font-bold font-oswald pt-2 pb-3.5 px-4 bg-green-900 rounded-3xl text-white">
            Avanzati
          </h1>
          <hr className="w-full border-gray-300" />
          <div className="corsi-row items-center">
            <div className="corsi-wrapper">
              <img
                src="/images/corsi/bimbi.jpeg"
                alt="Corso Avanzati"
                className="corsi-image"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-20 text-center px-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Giorni e Orari
                </h1>
                <p className="text-xl font-oswald">
                  Il corso si terrà il <strong>lunedì</strong>, il{" "}
                  <strong>mercoledì</strong> e il <strong>venerdì</strong> dalle
                  ore <strong>18:30</strong> alle ore <strong>19:30</strong>
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Informazioni sul corso
                </h1>
                <p className="text-xl font-oswald">
                  Il corso è adatto per coloro che frequentano già le scuole
                  medie e permette di <strong>approfondire</strong>{" "}
                  ulteriormente la conoscenza della disciplina, integrando anche
                  tecniche più elaborate e un{" "}
                  <strong>allenamento fisico</strong> più intenso, sempre però
                  proporzionato alle abilità fisiche dell'iscritto.
                  <br />
                  <br />
                  <em>Nessuno viene lasciato indietro!</em>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit flex flex-col gap-10 items-center py-24 lg:px-40 bg-emerald-300/40 shadow-2xl">
          <h1 className="text-5xl text-center font-bold font-oswald pt-2 pb-3.5 px-4 bg-green-900 rounded-3xl text-white">
            Adulti
          </h1>
          <hr className="w-full border-emerald-300/60" />
          <div className="corsi-row items-center">
            <div className="corsi-wrapper">
              <img
                src="/images/corsi/gruppograndi.jpeg"
                alt="Corso Adulti"
                className="corsi-image"
              />
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-20 text-center px-10">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Giorni e Orari
                </h1>
                <p className="text-xl font-oswald">
                  Il corso si terrà il <strong>lunedì</strong>, il{" "}
                  <strong>mercoledì</strong> e il <strong>venerdì</strong> dalle
                  ore <strong>19:30</strong> alle ore <strong>20:30</strong>
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl font-bold font-oswald">
                  Informazioni sul corso
                </h1>
                <p className="text-xl font-oswald">
                  Il corso è adatto a tutti coloro che vogliono praticare il
                  Judo a livello <strong>amatoriale</strong> o{" "}
                  <strong>agonistico</strong>. Verranno praticate tecniche di
                  livello base, tecnico di livello medio e tecniche difficili,
                  tenendo ovviamente conto del livello del singolo atleta. Sarà
                  possibile anche <strong>mettersi alla prova</strong> e
                  partecipare a competizioni da tutta Italia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Corsi;
