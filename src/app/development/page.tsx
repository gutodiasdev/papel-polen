import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="bg-[url('/home_hero_background.png')] bg-no-repeat bg-right-top min-h-screen ">
        <div className="flex  gap-x-8 items-center">
          <img src='/logo_polen_natural.png' alt='Logo Polen Natural' />
          <nav className="flex gap-x-4">
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
        <div>
          <h1>
            Um papel que valoriza o prazer da leitura
          </h1>
          <p>
            O papel Pólen® Natural foi criado especialmente para livros, com tratamento diferenciado que resulta em
            tonalidade off white, menos reflexo de luz e uma leitura mais agradável e prolongada. Ele oferece uma
            experiência sensorial confortável, macio ao toque, proporcionando um belo acabamento ao produto final.
          </p>
          <a href="#">Quero usar papel polen</a>
        </div>
      </section>
      <section>
        <h2>Video section</h2>
      </section>
      <section>
        <div>
          <h2>
            Características do Papel Pólen®
          </h2>
          <p>
            Papel Pólen® Natural é sem adição de OBA (Optical Brighteners Agent). Sua produção é feita com uma
            tecnologia que dispensa esses tipos de aditivos e reduza quantidade de química no produto final.
          </p>
        </div>
        <div>
          <div>
            <h3>Naturalmente melhor para as editoras</h3>
            <p>O Pólen Natural é produzido de forma otimizada e oferece melhor desempenho na fabricação de livros.</p>
          </div>
          <div>
            <h3>Naturalmente melhor para leitores</h3>
            <p>Leitura mais confortável para os olhos.</p>
          </div>
          <div>
            <h3>Naturalmente melhor para escritores</h3>
            <p>Toda a sofisticação de Pólen, com corpo e acabamento de superfície para valorizar uma boa história.</p>
          </div>
        </div>
      </section>
      <section>
        <div></div>
        <div>
          <h2>
            Porque usar polén natural
          </h2>
          <div>
            <div>
              <img src="" alt="" />
              <p>Maior densidade de cor (usa menos tinta na impressão)</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Melhoramos nosso  processo e reduzimos em 19% o efeito estufa</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Utilizamos tecnologias que dispensam o OBA. Reduzindo a quantidade química no produto final</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Disponível em Bobinas e Resmas</p>
            </div>
            <div>
              <img src="" alt="" />
              <p>Gramatura 70g e 80g</p>
            </div>
          </div>
          <button>
            Quero user papel polen
          </button>
        </div>
      </section>
      <section>
        <div>
          <h2>
            Mais próximo da natureza
          </h2>
        </div>
        <div>
          <div>
            <img src="" alt="" />
            <p>
              Visando fornecer soluções sustentáveis, a nossa empresa se dedica ao plantio e cultivo de árvores, as
              quais são transformadas em bioprodutos inovadores e renováveis que atualmente impactam positivamente a vida
              de mais de 2 bilhões de pessoas.
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              Por meio do desenvolvimento de uma ampla gama de materiais, utilizando árvores cultivadas por nós, nos
              comprometemos a tornar os produtos disponíveis nas lojas e prateleiras ao redor do mundo mais sustentáveis.
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              A empresa tem a sustentabilidade como um pilar essencial em sua trajetória e busca conscientizar e
              inspirar cada vez mais pessoas a adotarem práticas sustentáveis.
            </p>
          </div>
        </div>
      </section>
      <section>

        <div>
          <img src="" alt="" />
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
                  <img src="/facebook.png" alt="Ícone" className='w-4 h-4 lg:w-8 lg:h-8' />
                </div>
                <div>
                  <img src="/instagram.png" alt="Ícone" className='w-4 h-4 lg:w-8 lg:h-8' />
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
