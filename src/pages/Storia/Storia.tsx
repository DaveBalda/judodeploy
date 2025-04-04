import PageLayout from "../../components/PageLayout";

function Storia() {
  return (
    <PageLayout title="Storia">
      <div className="flex flex-col">
        <div className="h-fit flex flex-row gap-20 items-center py-32 px-52 bg-emerald-600/50 shadow-2xl">
          <img
            src="/images/storia/oldpic3.jpg"
            width="700px"
            height="auto"
            alt="Giancarlo e Daniele"
            className="rounded-2xl"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl font-bold font-oswald">
              Il Judo Club Sassuolo
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl font-gidole flex flex-col gap-2 items-center">
                <p>
                  Affiliato alla{" "}
                  <strong>
                    Federazione Italiana Judo Lotta Karate Arti Marziali
                  </strong>
                  ,
                </p>
                <p>Judo Club Sassuolo nasce nel settembre 1988.</p>
                <p>
                  Viene fondato dal Prof. Giancarlo Casolari che, assieme ai
                  suoi più giovani.
                </p>
                <p>
                  allievi ed ai genitori di questi decide di costituire una
                  società sportiva il cui scopo non fosse il
                </p>
                <p>
                  solo raggiungimento di <strong>risultati agonistici</strong>{" "}
                  ma curasse, prima di tutto,
                </p>
                <p>
                  l'educazione fisica e l'aspetto{" "}
                  <strong>psico-pedagogico</strong> della disciplina.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit my-10 py-24 flex flex-row gap-20 items-center justify-center px-52">
          <img
            src="/images/storia/oldpic1.jpg"
            className="w-[auto] h-[350px] rounded-3xl"
            alt="Corso Vecchio"
          />
          <img
            src="/images/storia/oldpic2.jpg"
            className="w-[auto] h-[350px] rounded-3xl"
            alt="Corso Storico"
          />
        </div>
        <div className="h-fit flex flex-row-reverse gap-20 items-center py-32 px-52 bg-gray-200 shadow-2xl">
          <img
            src="/images/storia/medagliabimbi.jpeg"
            width="600px"
            height="auto"
            alt="Bimbi con Medaglie"
            className="rounded-2xl"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl font-bold font-oswald">
              Formiamo dei campioni
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl font-gidole flex px-20 flex-col gap-2 items-center">
                <p className="text-center">
                  Nel 1991, grazie al lavoro svolto con i bambini, il Judo Club
                  Sassuolo viene riconosciuto{" "}
                  <strong>centro C.O.N.I. di avviamento allo sport</strong>. Dal
                  lontano 1988 ormai di anni ne sono passati parecchi e molti di
                  quei ragazzini e ragazzine che intrapresero il programma di
                  psicomotricità sono ora <strong>affermati campioni</strong> e
                  collaborano nell'insegnamento con il professor Casolari,
                  cercando di trasmettere alle giovani leve prima gli aspetti
                  educativi e successivamente quelli tecnici del judo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit my-10 py-24 flex flex-row gap-20 items-center justify-center px-52">
          <img
            src="/images/storia/corsofiero.jpeg"
            className="w-[auto] h-[400px] rounded-3xl"
            alt="Corso Ragazzi"
          />
          <img
            src="/images/storia/banner.jpeg"
            className="w-[auto] h-[400px] rounded-3xl"
            alt="Banner"
          />
        </div>
        <div className="h-fit flex flex-row gap-20 items-center py-32 px-52 bg-emerald-600/50 shadow-2xl">
          <img
            src="/images/storia/piegamenti.jpeg"
            width="600px"
            height="auto"
            alt="Bimbi con Medaglie"
            className="rounded-2xl"
          />
          <div className="flex flex-col w-full items-center justify-center gap-24">
            <h1 className="text-5xl font-bold font-oswald">
              Essere forti, per essere utili
            </h1>
            <div className="flex flex-col gap-10 items-center">
              <div className="text-xl font-gidole flex px-20 flex-col gap-10 items-center">
                <p className="text-center">
                  Nel gennaio 2004 viene istituito presso la palestra{" "}
                  <strong>"ex Monari"</strong> il primo corso di M.G.A. (Metodo
                  Globale di Autodifesa). Dal settembre 2004, per sottolineare
                  ancora di più l'aspetto educativo dell'associazione sportiva,
                  viene fatta un'ulteriore affiliazione, quella all'
                  <strong>AISE</strong> (Associazione Italiana Sport Educativi),
                  ente che si ripromette di perseguire esclusivamente ideali
                  educativi secondo il motto{" "}
                  <strong>"essere forti per essere utili"</strong> ed intende
                  stipulare convenzioni con ASL, Scuole Comuni e chiunque altro
                  pensa di aver bisogno di noi attraverso lo sport educativo.
                </p>
                <a
                  href="https://educajudo.it"
                  target="_blank"
                  className="font-gidole bg-red-500 hover:bg-red-600 px-8 py-6 text-xl rounded-lg text-white"
                >
                  Visita educajudo.it
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Storia;
