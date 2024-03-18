import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import LazyImage from "./lazy-image";
// import { InstagramLogo, WhatsappLogo, Phone, EnvelopeSimple } from "phosphor-react";

export function Footer() {
  // TODO: Implementar request para o banco de dados
  const info = {
    email: "sac@ctmanancialdevidas.com.br",
    phoneNumber: "(84) 99883-52676",
    instagram: "manancialdevidasct",
    address: "Rua José Rodrigues Pereira 10 Extremoz/RN, 59575-000",
  };

  return (
    <footer className="w-full bg-cyan-600 pt-1">
      <div className="bg-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-2 py-2 sm:flex-row sm:gap-0 sm:justify-between  sm:px-6 lg:px-8">
          <div className="flex gap-5">
            <div className="hidden sm:items-center sm:flex">
              <iframe
                className="shadow-lg w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.1209491197736!2d-35.229842241521524!3d-5.722476491992797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3a97051674143%3A0xdba4233653d3e617!2sComunidade%20Terap%C3%AAutica%20Manancial%20De%20Vidas!5e0!3m2!1sen!2sbr!4v1710428660587!5m2!1sen!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col sm:w-1/2 justify-center items-center sm:items-start" id="contato">
              <div>
                <span className="font-bold">Contato</span>
                <ul>
                  <li className="flex items-center">
                    <a href={`mailto:${info.email}`} className="flex items-center gap-2 hover:text-cyan-600">
                      {/* <EnvelopeSimple weight="bold" /> */}
                      <FaEnvelope />
                      {info.email}
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href={`https://wa.me/55${info.phoneNumber.split("").join("").replace("(", "").replace(")", "").replace(" ", "").replace("-", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 hover:text-cyan-600"
                    >
                      {/* <WhatsappLogo weight="bold" /> */}
                      <FaWhatsapp />
                      {info.phoneNumber}
                    </a>
                  </li>
                  <li>
                    <a href={`https://www.instagram.com/${info.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cyan-600">
                      {/* <InstagramLogo weight="bold" />  */}
                      <FaInstagram />@{info.instagram}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex h-full items-center gap-5 justify-center">
              <LazyImage src="/manancial-logo.svg" className="w-[150px]" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cyan-600 p-1">
        <p className="text-center text-white">Rua José Rodrigues Pereira 10 Extremoz/RN, 59575-000</p>
      </div>
    </footer>
  );
}
