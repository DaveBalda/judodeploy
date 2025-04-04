import { IoIosMail } from "react-icons/io";
import PageLayout from "../../components/PageLayout";
import { CiInstagram } from "react-icons/ci";
import "./Contatti.css";

function Contatti() {
  return (
    <PageLayout title="Contatti">
      <div className="flex flex-col">
        <div className="contatti-upper h-fit flex flex-col gap-32 items-center py-24 bg-gray-200 shadow-2xl">
          <h1 className="text-5xl text-center font-bold font-oswald">
            Informazioni di contatto
          </h1>
          <div className="icons-large items-center gap-20">
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-2xl text-center font-bold font-oswald">
                Giancarlo Casolari
              </h3>
              <p className="text-xl font-gidole">
                <strong>Cellulare: </strong>3334268884
                <br />
                <strong>Mail: </strong>judoclubsassuolo@gmail.com
                <br />
              </p>
            </div>
            <div className="border-l border-black h-[150px]" />
            <div className="flex flex-col gap-3 items-center">
              <a href="mailto:judoclubsassuolo@gmail.com" target="_blank">
                <IoIosMail
                  className="text-green-700"
                  size={120}
                  title="Invia una mail"
                />
              </a>
            </div>
            <div className="border-l border-black h-[150px]" />
            <div className="flex flex-col gap-3 items-center">
              <a href="https://www.instagram.com/judosassuolo/" target="_blank">
                <CiInstagram
                  className="text-green-700"
                  size={110}
                  title="Apri Instagram"
                />
              </a>
            </div>
          </div>
          <div className="icons-small items-center gap-10">
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-2xl text-center font-bold font-oswald">
                Giancarlo Casolari
              </h3>
              <p className="text-xl font-gidole">
                <strong>Cellulare: </strong>3334268884
                <br />
                <strong>Mail: </strong>judoclubsassuolo@gmail.com
                <br />
              </p>
            </div>
            <div className="flex flex-row items-center gap-10">
              <div className="flex flex-col gap-3 items-center">
                <a href="mailto:judoclubsassuolo@gmail.com" target="_blank">
                  <IoIosMail
                    className="text-green-700"
                    size={80}
                    title="Invia una mail"
                  />
                </a>
              </div>
              <div className="border-l border-black h-[100px]" />
              <div className="flex flex-col gap-3 items-center">
                <a
                  href="https://www.instagram.com/judosassuolo/"
                  target="_blank"
                >
                  <CiInstagram
                    className="text-green-700"
                    size={80}
                    title="Apri Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit flex flex-col gap-24 items-center py-24">
          <div className="contatti-lower items-center font-gidole w-full">
            <form className="contatti-form flex flex-col gap-5 items-center bg-emerald-600/70 w-full rounded-2xl border-2 text-lg">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-oswald text-2xl" htmlFor="name">
                  Nome e cognome
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Inserisci il tuo nome..."
                  required
                  className="rounded-md border bg-gray-200 border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-oswald text-2xl" htmlFor="name">
                  Email
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Inserisci la tua mail..."
                  required
                  className="rounded-md border bg-gray-200 border-black px-3 py-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-oswald text-2xl" htmlFor="name">
                  Cosa ti serve sapere?
                </label>
                <textarea
                  name="message"
                  placeholder="Descrivi la tua richiesta..."
                  required
                  className="rounded-md border bg-gray-200 border-black px-3 py-3  w-full min-h-[200px]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:cursor-pointer"
              >
                Invia
              </button>
            </form>
            <div className="contatti-map w-full border-2 overflow-hidden rounded-2xl flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.293827186829!2d10.767513212173885!3d44.52961599518701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ffcee698a7301%3A0x7ed2b1a9d5f0828e!2sJudo%20Club%20Sassuolo!5e0!3m2!1sit!2sit!4v1743603425642!5m2!1sit!2sit"
                width="650"
                height="620"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Contatti;
