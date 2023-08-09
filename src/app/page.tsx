import Link from "next/link";
import { DarkTagsSwiper, YellowTagsSwiper } from "./components/TagsSwiper";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="bg-[url('/home_hero_background.svg')] bg-no-repeat bg-[right_-24rem_top_-6rem]
      md:bg-[right_-8rem_top] md:bg-contain xl:bg-[right_top] 2xl:min-h-screen">
        <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 items-center py-8 px-3 md:px-6 xl:px-12 2xl:px-24">
          <img src='/logo_polen_natural.png' alt='Logo Polen Natural' className="2xl:w-[88px] 2xl:h-[88px]" />
          <nav className="flex gap-x-4 2xl:gap-x-8 text-sm 2xl:text-xl">
            <Link href='#caracteristicas'>
              Características
            </Link>
            <Link href='#papel-polen'>
              Papel Pólen
            </Link>
            <Link href='#sustentabilidade'>
              Sustentabilidade
            </Link>
            <a href='/case'>
              Case
            </a>
          </nav>
        </div>
        <div className="px-3 py-8 2xl:p-16 md:w-1/2 md:px-6 xl:px-12 2xl:px-24">
          <h1 className="text-5xl lg:text-6xl 2xl:text-8xl">
            Um papel que valoriza o prazer da leitura
          </h1>
          <p className="py-8 2xl:text-xl">
            O papel Pólen® Natural foi criado especialmente para livros, com tratamento diferenciado que resulta em
            tonalidade off white, menos reflexo de luz e uma leitura mais agradável e prolongada. Ele oferece uma
            experiência sensorial confortável, macio ao toque, proporcionando um belo acabamento ao produto final.
          </p>
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl w-full lg:max-w-[320px] 2xl:text-2xl text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
            Quero usar papel pólen
          </button>
        </div>
      </section>
      <section className="md:py-16 lg:px-12 2xl:p-24">
        <div className='grid place-items-center relative overflow-hidden w-full pt-[56.25%]'>
          <iframe className='absolute top-0 left-0 bottom-0 right-0 w-full h-full' src="https://www.youtube.com/embed/PMwDeoh0LM4" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>
      <section id="caracteristicas" className="px-3 md:px-6 py-8 md:grid md:grid-cols-2 md:gap-x-4 md:overflow-hidden md:items-center
      lg:px-12 2xl:p-24">
        <div className="md:-mt-12 lg:pr-12">
          <h2 className="text-5xl lg:text-6xl 2xl:text-8xl">
            Características do Papel Pólen®
          </h2>
          <p className="mt-8 text-lg 2xl:text-xl">
            Papel Pólen® Natural é sem adição de OBA (Optical Brighteners Agent). Sua produção é feita com uma
            tecnologia que dispensa esses tipos de aditivos e reduza quantidade de química no produto final.
          </p>
        </div>
        <div className="py-8 md:flex md:gap-x-4">
          <YellowTagsSwiper />
        </div>
      </section>
      <section id="papel-polen" className="px-3 md:px-6 lg:px-12 2xl:p-24 py-8 bg-[url('/why_use_background.svg')] bg-no-repeat 
      bg-[right_-24rem_top_-6rem] md:bg-[left_top] bg-contain lg:bg-cover lg:min-h-screen md:grid md:grid-cols-2">
        <div></div>
        <div>
          <h2 className="text-5xl lg:text-6xl 2xl:text-8xl">
            Porque usar polén natural
          </h2>
          <div className="py-8 flex flex-col gap-y-4 2xl:text-xl">
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1 2xl:w-6 2xl:h-6" />
              <p className="text-lg 2xl:text-2xl">Maior densidade de cor (usa menos tinta na impressão)</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1 2xl:w-6 2xl:h-6" />
              <p className="text-lg 2xl:text-2xl">Melhoramos nosso  processo e reduzimos em 19% o efeito estufa</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1 2xl:w-6 2xl:h-6" />
              <p className="text-lg 2xl:text-2xl">Utilizamos tecnologias que dispensam o OBA. Reduzindo a quantidade química no produto final</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1 2xl:w-6 2xl:h-6" />
              <p className="text-lg 2xl:text-2xl">Disponível em Bobinas e Resmas</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1 2xl:w-6 2xl:h-6" />
              <p className="text-lg 2xl:text-2xl">Gramatura 70g e 80g</p>
            </div>
          </div>
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl w-full text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out lg:max-w-[320px] 2xl:text-2xl'>
            Quero usar papel pólen
          </button>
        </div>
      </section>
      <section id="sustentabilidade" className="bg-[url('/background.svg')] grid grid-cols-1 px-3 md:px-6 lg:px-12 py-8 md:py-16
      md:grid md:grid-cols-2 md:overflow-hidden md:items-center 2xl:p-24">
        <div className="lg:pr-12">
          <h2 className="text-5xl lg:text-6xl 2xl:text-8xl">
            Mais próximo da natureza
          </h2>
        </div>
        <div className="py-8 md:flex md:gap-x-4">
          <DarkTagsSwiper />
        </div>
      </section>
      <section className="py-8 md:py-16 px-3 md:px-6 grid gap-y-8 bg-[url('/closer_to_nature.svg')] bg-no-repeat bg-[right_-24rem_top_-6rem]
      md:bg-[right_top] md:bg-contain lg:bg-cover md:grid md:grid-cols-2 lg:min-h-screen lg:items-center 2xl:p-24">
        <div className="grid gap-y-4 lg:items-center lg:grid-gap-2 lg:h-fit">
          <h2 className="text-5xl lg:text-6xl 2xl:text-8xl">
            Suzano ajuda o Mundo a respirar melhor
          </h2>
          <p className="2xl:text-2xl">
            Sua comunicação impressa com menos impacto ambiental: Conheça o Papel Pólen.
          </p>
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl min-w-[200px] lg:max-w-[320px] 2xl:text-2xl text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
            Quero usar papel pólen
          </button>
        </div>
        <div className="flex w-full justify-center">
          <img src="/edicao_carbono_zero.svg" alt="Logo Polen Natural" className="w-3/5" />
        </div>
      </section>
      <section className="py-8 md:py-16 px-3 md:px-6 grid bg-[url('/background_tree.svg')] bg-no-repeat bg-[right_-24rem_top_-6rem]
      md:bg-[right_top] md:grid md:grid-cols-2 2xl:p-24">
        <div>
          <div className='flex justify-center md:justify-start gap-x-4'>
            <img src="/logo_polen_and_points.svg" alt="Logo Polen Natural" className="w-[160px] h-[64px] 2xl:w-[240px] 2xl:h-[128px]" />
          </div>
          <form action="" className='flex flex-col gap-y-4 max-w-[320px]  md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto my-12'>
            <input type="text" name="name" id="name" placeholder='Nome' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
            2xl:text-2xl' />
            <input type="text" name="email" id="email" placeholder='E-mail' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
            2xl:text-2xl' />
            <input type="text" name="phone" id="phone" placeholder='Telefone' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
            2xl:text-2xl' />
            <input type="text" name="business" id="business" placeholder='Empresa' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
            2xl:text-2xl' />
            <button type="submit" className='bg-[#F7941D] p-2 rounded-xl max-w-[200px] text-[#FFF7E0] lg:max-w-[320px] 2xl:text-2xl'>
              Enviar
            </button>
          </form>
          <div className='grid md:grid-cols-3 lg:grid-cols-3 max-w-[320px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto 
        gap-y-4 md:gap-y-8'>
            <div>
              <div className='flex gap-x-2 justify-center items-center'>
                <div>
                  <img src="/facebook.png" alt="Ícone" className='w-6 h-6 lg:w-8 lg:h-8' />
                </div>
                <div>
                  <img src="/instagram.png" alt="Ícone" className='w-6 h-6 lg:w-8 lg:h-8' />
                </div>
                <p>@papelpolenoficial</p>
              </div>
              <div></div>
            </div>
            <div className='text-center'>
              <p>0800 022 1727</p>
            </div>
            <div className='lg:text-end text-center'>
              <p>marketing@suzano.com.br</p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}
