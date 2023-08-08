import Link from "next/link";

const build = 'build'

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
    </main>
  )
}
