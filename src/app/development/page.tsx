import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="bg-[url('/home_hero_background.png')] bg-no-repeat bg-[right_-24rem_top_-6rem]">
        <div className="flex flex-col gap-x-8 gap-y-6 items-center py-8 px-3">
          <img src='/logo_polen_natural.png' alt='Logo Polen Natural' />
          <nav className="flex gap-x-4 text-sm">
            <Link href='#'>
              Características
            </Link>
            <Link href='#'>
              Papel Pólen
            </Link>
            <Link href='#'>
              Sustentabilidade
            </Link>
            <Link href='#'>
              Case
            </Link>
          </nav>
        </div>
        <div className="px-3 py-8">
          <h1 className="text-5xl">
            Um papel que valoriza o prazer da leitura
          </h1>
          <p className="py-8">
            O papel Pólen® Natural foi criado especialmente para livros, com tratamento diferenciado que resulta em
            tonalidade off white, menos reflexo de luz e uma leitura mais agradável e prolongada. Ele oferece uma
            experiência sensorial confortável, macio ao toque, proporcionando um belo acabamento ao produto final.
          </p>
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl w-full text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
            Quero usar papel pólen
          </button>
        </div>
      </section>
      <section>
        <div className='grid place-items-center relative overflow-hidden w-full pt-[56.25%]'>
          <iframe className='absolute top-0 left-0 bottom-0 right-0 w-full h-full' src="https://www.youtube.com/embed/PMwDeoh0LM4" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </section>
      <section className="px-3 py-8">
        <div>
          <h2 className="text-5xl">
            Características do Papel Pólen®
          </h2>
          <p className="mt-8 text-lg">
            Papel Pólen® Natural é sem adição de OBA (Optical Brighteners Agent). Sua produção é feita com uma
            tecnologia que dispensa esses tipos de aditivos e reduza quantidade de química no produto final.
          </p>
        </div>
        <div className="py-8">
          <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/apartment.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para as editoras</h3>
            <p className="text-xl">O Pólen Natural é produzido de forma otimizada e oferece melhor desempenho na fabricação de livros.</p>
          </div>
          <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/description.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para leitores</h3>
            <p className="text-xl">Leitura mais confortável para os olhos.</p>
          </div>
          <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/edit_note.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para escritores</h3>
            <p className="text-xl">Toda a sofisticação de Pólen, com corpo e acabamento de superfície para valorizar uma boa história.</p>
          </div>
        </div>
      </section>
      <section className="px-3 py-8">
        <div></div>
        <div>
          <h2 className="text-5xl">
            Porque usar polén natural
          </h2>
          <div className="py-8 flex flex-col gap-y-4">
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1" />
              <p>Maior densidade de cor (usa menos tinta na impressão)</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1" />
              <p>Melhoramos nosso  processo e reduzimos em 19% o efeito estufa</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1" />
              <p>Utilizamos tecnologias que dispensam o OBA. Reduzindo a quantidade química no produto final</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1" />
              <p>Disponível em Bobinas e Resmas</p>
            </div>
            <div className="flex gap-x-2 items-start">
              <img src="/check.svg" alt="check" className="w-3 h-3 mt-1" />
              <p>Gramatura 70g e 80g</p>
            </div>
          </div>
        </div>
        <button type="submit" className='bg-[#F7941D] p-2 rounded-xl w-full text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
          Quero usar papel pólen
        </button>
      </section>
      <section className="bg-[url('/background.svg')] grid grid-cols-1 px-3 py-8">
        <div>
          <h2 className="text-5xl">
            Mais próximo da natureza
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-4 py-8">
          <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/pine_tree.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <p className="mt-8 text-lg">
              Visando fornecer soluções sustentáveis, a nossa empresa se dedica ao plantio e cultivo de árvores, as
              quais são transformadas em bioprodutos inovadores e renováveis que atualmente impactam positivamente a vida
              de mais de 2 bilhões de pessoas.
            </p>
          </div>
          <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/nature_tree.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <p className="mt-8 text-lg">
              Por meio do desenvolvimento de uma ampla gama de materiais, utilizando árvores cultivadas por nós, nos
              comprometemos a tornar os produtos disponíveis nas lojas e prateleiras ao redor do mundo mais sustentáveis.
            </p>
          </div>
          <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px]">
            <img src="/two_pine_trees.svg" alt="Pine" className="w-[24px] h-[24px]" />
            <p className="mt-8 text-lg">
              A empresa tem a sustentabilidade como um pilar essencial em sua trajetória e busca conscientizar e
              inspirar cada vez mais pessoas a adotarem práticas sustentáveis.
            </p>
          </div>
        </div>
      </section>
      <section className='py-8 px-3 grid gap-y-8'>
        <div className="grid gap-y-4">
          <h2 className="text-3xl">
            Suzano ajuda o Mundo a respirar melhor
          </h2>
          <p>
            Sua comunicação impressa com menos impacto ambiental: Conheça o Papel Pólen.
          </p>
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl min-w-[200px] text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
            Quero usar papel pólen
          </button>
        </div>
        <div className="flex w-full justify-center">
          <img src="/edicao_carbono_zero.svg" alt="Logo Polen Natural" className="w-3/5" />
        </div>
      </section>
      <section className="py-8 px-3 grid">
        <div>
          <div className='flex justify-center gap-x-4'>
            <img src="/logo_polen_and_points.svg" alt="Logo Polen Natural" className="w-[160px] h-[64px]" />
          </div>
          <form action="" className='flex flex-col gap-y-4 max-w-[320px]  md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto my-12'>
            <input type="text" name="name" id="name" placeholder='Nome' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]' />
            <input type="text" name="email" id="email" placeholder='E-mail' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]' />
            <input type="text" name="phone" id="phone" placeholder='Telefone' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]' />
            <input type="text" name="business" id="business" placeholder='Empresa' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]' />
            <button type="submit" className='bg-[#F7941D] p-2 rounded-xl max-w-[200px] text-[#FFF7E0]'>
              Enviar
            </button>
          </form>
          <div className='grid md:grid-cols-1 lg:grid-cols-3 max-w-[320px] md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto 
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
