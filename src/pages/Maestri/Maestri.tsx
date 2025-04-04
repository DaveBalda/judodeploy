import PageLayout from "../../components/PageLayout";
import MoreInfo from "./MoreInfo";
import "./Maestri.css";

function Maestri() {
  return (
    <PageLayout title="Maestri">
      <div className="flex flex-col">
        <div className="flex flex-col gap-32 py-24 bg-gray-200 shadow-2xl">
          <div className="h-fit maestri-row-regular items-center justify-center">
            <div className="maestri-wrapper">
              <img
                src="/images/maestri/giancarlo.png"
                alt="Giancarlo Casolari"
                className="maestri-image"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-24 lg:px-20">
              <div className="flex flex-col items-center gap-3">
                <h1 className="font-bold font-oswald">Giancarlo Casolari</h1>
                <h3 className="font-oswald text-green-700">5° DAN</h3>
              </div>
              <div className="flex flex-col gap-10 items-center">
                <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                  <p>
                    Il maestro Casolari porta con se un'esperienza{" "}
                    <strong>ultradecennale</strong> nell'ambito delle arti
                    marziali e della difesa personale, con un focus specifico
                    sul Judo, studiato sotto tutti i suoi aspetti:{" "}
                    <strong>tecnico</strong>, <strong>artistico</strong> e{" "}
                    <strong>pedagogico</strong>.
                    <br />
                    L'
                    <strong>
                      Accademia Nazionale Italiana Judo e Karate
                    </strong>{" "}
                    rilascia a Giancarlo, nel 1981, il brevetto da aspirante
                    istruttore, rendendolo a tutti gli effetti il primo
                    sassolese ad acquisire il <strong>grado di cintura</strong>{" "}
                    nera in un arte marziale
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MoreInfo>
            <div className="maestri-moreinfo flex flex-col items-center gap-14">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1981 - 1982
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo risponde al bando emesso dalla{" "}
                  <strong>
                    Federazione Italiana Lotta Pesi Judo (F.I.L.P.J.)
                  </strong>{" "}
                  per la formazione di 25 nuovi aspiranti istruttori sul
                  territirio nazionale; superato brillantemente l'esame di
                  ammissione diventa subito allievo scelto dell'
                  <strong>Accademia Nazionale Italiana Judo e Karate</strong> ed
                  il 5 Agosto, con il massimo dei voti, gli viene rilasciato il
                  brevetto di aspirante istruttore, diventando così il primo
                  sassolese ad aquisire il grado di cintura nera in un' arte
                  marziale.
                </p>
                <p className="text-center text-lg font-gidole">
                  Sempre quest'anno, consegue anche il diploma di insegnante di
                  Educazione Fisica presso <strong>l'I.S.E.F.</strong> di
                  Bologna. Nel 1982 verrà poi promosso a{" "}
                  <strong>istruttore di Judo 2° dan</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1987
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo frequenta il corso multimediale del C.O.N.I. e
                  diventa istruttore dei centri{" "}
                  <strong>C.O.N.I. di avviamento allo sport</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1994
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo si specializza nell'insegnamento agli{" "}
                  <strong>alunni con disabilità</strong> frequentando il corso
                  polivalente di specializzazione presso il Provveditorato agli
                  Studi di Modena.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  1999 - 2002
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo consegue il grado di cintura nera{" "}
                  <strong>3° dan</strong>.
                </p>
                <p className="text-center text-lg font-gidole">
                  Solo 3 anni dopo, nel 2002, conseguirà poi il grado di cintura
                  nera <strong>4° dan</strong> e il{" "}
                  <strong>titolo di maestro</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2003 - 2004
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo si specializza nel{" "}
                  <strong>metodo globale di autodifesa (M.G.A.)</strong> e ne
                  diventa il responsabile per la provincia di Modena.
                </p>
                <p className="text-center text-lg font-gidole">
                  Nel 2004 consegue poi la cintura nera del{" "}
                  <strong>Ju-Jitsu</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2010
                </h1>
                <p className="text-center text-lg font-gidole">
                  Giancarlo consegue il <strong>5° dan</strong> di cintura nera.
                </p>
              </div>
            </div>
          </MoreInfo>
        </div>
        <div className="flex flex-col gap-32 py-24">
          <div className="h-fit maestri-row-reversed flex flex-row-reverse gap-32 items-center justify-center">
            <div className="maestri-wrapper">
              <img
                src="/images/maestri/daniele.jpeg"
                width="350px"
                alt="Daniele Di Martino"
                className="maestri-image"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-24 lg:px-20">
              <div className="flex flex-col items-center gap-3">
                <h1 className="font-bold font-oswald">Daniele Di Martino</h1>
                <h3 className="font-oswald text-green-700">3° DAN</h3>
              </div>
              <div className="flex flex-col gap-10 items-center">
                <div className="text-xl/9 text-center font-gidole flex flex-col gap-2 items-center">
                  <p>
                    Daniele non ha tardato a mostrare le sue abilità,
                    conseguendo la <strong>cintura nera</strong> a soli 16 anni.
                    Successivamente, ha dedicato gran parte del suo tempo e
                    delle sue risorse alla <strong>formazione personale</strong>
                    , specialmente nell'ambito pedagogico delle scienze motorie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <MoreInfo>
            <div className="maestri-moreinfo flex flex-col items-center gap-14">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2008 -2011
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele consegue il titolo di cintura nera{" "}
                  <strong>1° dan</strong>.
                </p>
                <p className="text-center text-lg font-gidole">
                  Nel 2011, conseguirà poi il titolo successivo, diventando
                  cintura nera <strong>2° dan</strong>. Sempre lo stesso anno,
                  diventa educatore professionale presso le scuole statali e
                  centri estivi comunali.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2014
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele ottiene la <strong>laurea triennale</strong> in
                  scienze motorie.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2015
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele inizia la sua carriera di{" "}
                  <strong>docente di scienze motorie</strong> presso le scuole
                  secondarie di secondo grado.
                </p>
                <p className="text-center text-lg font-gidole">
                  Alla fine dello stesso anno, consegue il titolo di cintura
                  nera <strong>3° dan</strong>.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2016
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele ottiene la <strong>laurea magistrale</strong> in
                  Scienze e Tecniche delle Attività Motorie sportive e adattate.
                </p>
                <p className="text-center text-lg font-gidole">
                  Sempre lo stesso anno, partecipa al corso per{" "}
                  <strong>personal trainer</strong> della Federazaione Italiana
                  Pesistica.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2019 - 2020
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele ottiene un <strong>Master di primo livello</strong>{" "}
                  sulle metodologie socio-pedagogiche negli insegnamenti di
                  educazione motoria.
                </p>
                <p className="text-center text-lg font-gidole">
                  L'anno dopo, ottiene un{" "}
                  <strong>Master di primo livello</strong> sui bisogni educativi
                  speciali. Si specializzerà, qualche anno dopo, anche sulle
                  attività didattiche per alunni <strong>con disabilità</strong>
                  .
                </p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-2xl font-bold font-oswald text-green-700">
                  2025
                </h1>
                <p className="text-center text-lg font-gidole">
                  Daniele possiede un <strong>Master di livello due</strong> in
                  "Il Ruolo del Dirigente Scolastico".
                </p>
              </div>
            </div>
          </MoreInfo>
        </div>
      </div>
    </PageLayout>
  );
}

export default Maestri;
