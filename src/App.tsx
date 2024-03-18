import React from "react";

import Title from "./components/Title";
import LazyImage from "./components/lazy-image";

import api, { Atividades, Equipe } from "./services/api";

// import { FaMapMarkerAlt } from "react-icons/fa";

const Carousel = React.lazy(() => import("./components/carousel"));

function App() {
  const [atividades, setAtividades] = React.useState<Atividades>([]);
  const [equipe, setEquipe] = React.useState<Equipe>([]);

  React.useEffect(() => {
    api.get("/atividades").then(response => {
      setAtividades(response.data as Atividades);
    });

    api.get("/equipe").then(response => {
      setEquipe(response.data as Equipe);
    });
  }, []);

  return (
    <main className="mx-auto flex min-h-screen  flex-col items-center justify-center">
      <section id="inicio" className="flex w-full h-[50vh] items-center  flex-col relative">
        <img src="/inicio.png" className="absolute w-full h-full z-10 object-cover brightness-50" alt="" />
        <div className="flex flex-col px-5 pt-5 max-w-7xl sm:px-6 lg:px-8 z-20 text-white justify-center h-full gap-5 ">
          <h1 className="text-4xl font-bold">Comunidade Terapêutica Manancial de Vidas</h1>
          <p className="sm:w-1/2">
            A Comunidade Terapêutica Manancial de Vidas é uma entidade sem fins lucrativos que atua no tratamento, acolhimento de pessoas com dependência química, colaborando,
            inclusive, com as entidades governamentais para o desenvolvimento de uma sociedade pacífica, ordeira e progressista.
          </p>
          <button className="bg-cyan-500 font-bold p-2 rounded-md hover:bg-cyan-600 transition-color sm:w-40">Saiba mais</button>
        </div>
      </section>
      <section className="bg-cyan-600 flex flex-col justify-center items-center w-full text-white py-5">
        <div className="flex flex-col max-w-7xl w-full gap-5 px-2 sm:px-6 lg:px-8">
          <Title>Método</Title>
          <ul className="flex flex-col gap-2">
            {["Reconhecimento", "Tratamento", "Reinserção"].map((el, i) => {
              const isEven = i % 2 === 0;
              return (
                <li key={el} className={`flex flex-col items-center ${isEven ? "sm:flex-row-reverse" : "sm:flex-row"} gap-5`}>
                  <h3 className="text-xl font-bold sm:hidden">{el}</h3>
                  <LazyImage src="https://placehold.co/600x400" alt="" className="rounded-lg sm:shadow-lg  sm:w-1/2" />
                  <div className="flex flex-col justify-between gap-2 sm:w-1/2 px-1">
                    <h3 className="text-xl font-bold hidden sm:block">{el}</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, purus nec lacinia aliquet, urna velit suscipit tortor, eget facilisis odio eros eget
                      lectus. Nulla tincidunt, purus nec lacinia aliquet, urna velit suscipit tortor, eget facilisis odio eros eget lectus.
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className="flex flex-col gap-5 mt-5 w-full items-center">
        <section className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 px-2 sm:px-6 lg:px-8" id="atividades">
          <Title>Atividades</Title>
          <ul className="flex flex-col min-h-max w-full place-items-center gap-5 sm:grid sm:grid-cols-3 py-2">
            {atividades.map(el => {
              return (
                <li className="bg-cyan-600 rounded-[20px] hover:brightness-95 w-full border h-full border-gray-200 hover:shadow-md transition-all p-5" key={el.title.toLowerCase()}>
                  <a className="h-full" target="_blank" href={el.url}>
                    <Carousel className="rounded-[20px] shadow-md  w-full" autoplay={true} images={el.images} />
                    <div className="p-2">
                      <h3 className="text-xl font-bold text-center p-3 text-white">{el.title}</h3>
                      <p className="text-center text-gray-100">{el.description}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="flex w-full flex-col items-center bg-gradient-to-t from-slate-200 to-white" id="equipe">
          <div className="w-full max-w-7xl flex-col sm:px-6 lg:px-8">
            <Title>Nossa equipe</Title>
          </div>
          <ul className="grid grid-cols-2 py-5 sm:grid-cols-4 ">
            {equipe.map((el, i) => {
              return (
                <li key={i} className="flex h-48 w-48 flex-col items-center justify-center ">
                  <LazyImage src={el.imgSrc} className="flex items-center w-[128px] h-[128px] rounded-full border-2 border-cyan-600" alt="" />
                  <h3 className="font-bold">{el.name}</h3>
                  <span className="text-sm text-gray-600">{el.role}</span>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
