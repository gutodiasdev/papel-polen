import { AiFillFacebook } from 'react-icons/ai'
import { FaAngleDown, FaInstagramSquare } from 'react-icons/fa'


export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="min-h-screen bg-[#231f20] rounded-tl-[32rem] md:rounded-tl-none lg:rounded-bl-[32rem] 
      lg:rounded-tr-[32rem] grid items-center justify-center pt-8 pb-16 text-white text-center">
        <div className="flex w-full justify-center">
          <img src="/logo_papel_polen.svg" alt="Logo Polen Natural" className="w-[64px] h-[64px]" />
        </div>
        <h1 className="lg:text-6xl">
          Livro Carbono Zero para <span className="underline">inspirar você</span>
        </h1>
        <p className="">
          Conheça o Papel Pólen® Natural, novo papel off-white pensado especialmente para livros, proporcionando<br></br>
          uma leitura muito mais agradável, sem abrir mão dos cuidados com o meio ambiente.
        </p>
        <div className='w-full text-center grid place-items-center'>
          <a href="#step-start" className='cursor-pointer'>
            <FaAngleDown size='3rem' />
          </a>
        </div>
      </section>
      <section id='step-start' className='min-h-screen bg-[#231f20]'>
        <div className='min-h-screen bg-[#fff7e0] lg:rounded-br-[32rem] grid lg:grid-cols-2 items-center'>
          <div>
            <p className='md:pt-0 pl-16 pr-16 2xl:pl-56 2xl:text-2xl'>
              Livros atravessam gerações marcando épocas e transmitindo
              inspiração e conhecimento.<br></br>
              Para o Papel Pólen® Natural, a sustentabilidade é uma das
              protagonistas da história da nossa sociedade. Por isso a Suzano, em
              parceria com as editoras Companhia das Letras, Record e Sextante,
              realizou um projeto-piloto que visa contribuir para uma cadeia de
              produção editorial brasileira mais sustentável: a Edição Especial
              Carbono Zero dos livros “Em Defesa do Tempo”, “É Assim que
              Começa” e &quot;Uma Boa Vida&quot;.
            </p>
          </div>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PMwDeoh0LM4" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#231f20] rounded-tl-[32rem] md:rounded-tl-none lg:rounded-bl-[32rem] 
      md:grid md:grid-cols-2 items-center  pt-8 pb-16">
        <div className="flex w-full justify-center">
          <img src="/illustration_01.svg" alt="Logo Polen Natural" className="w-4/5" />
        </div>
        <div className="text-white pl-4 pr-8 flex flex-col gap-y-8 pt-4 md:pt-0 2xl:pr-56 2xl:text-2xl">
          <p>
            Para neutralizar as emissões de carbono, a Suzano contou com apoio de uma
            consultoria especializada para mapear e calcular a pegada de carbono de todo o ciclo
            de vida dos livros, desde a plantação do eucalipto até o descarte/reciclagem de cada
            obra. O cálculo foi realizado de forma individualizada para cada livro e para
            neutralizar as emissões serão utilizados créditos de carbono da Suzano, oriundos de
            projetos certificados e verificados por auditoria externa.
          </p>
          <p>
            Essa é uma iniciativa alinhada com a estratégia de negócios da Suzano. Focada em
            soluções baseadas na natureza, a companhia busca conservar a biodiversidade e
            regular o ciclo hidrológico por meio de suas áreas de plantio e conservação, ao
            mesmo tempo que oferece soluções sustentáveis aos clientes e contribui para
            reduzir as emissões de carbono na cadeia de valor.
          </p>
          <p>
            Mas esse não é um trabalho de apenas uma empresa. Contamos com o apoio
            de diversos atores nessa jornada, incluindo fornecedores e clientes. Nosso
            propósito é renovar a vida a partir da árvore e nós contamos com você. Faça
            parte desse movimento.
          </p>
        </div>
      </section>
      <section className='min-h-screen bg-[#231f20]'>
        <div className='min-h-screen bg-[#fff7e0] lg:rounded-br-[32rem] grid lg:grid-cols-2 items-center'>
          <div className='flex flex-col gap-y-8 '>
            <p className='md:pt-0 pl-16 pr-16 2xl:pl-56 2xl:text-2xl'>
              A Suzano é comprometida com o desenvolvimento sustentável e, por isso, investe em uma
              produção inteligente, consciente e amigável ao meio ambiente. Todo o nosso processo é
              meticulosamente planejado para otimizar recursos, assegurar a qualidade do produto final e,
              acima de tudo, preservar a fonte da matéria-prima, minimizando significativamente o impacto
              ambiental.
            </p>
            <p className='md:pt-0 pl-16 pr-16 2xl:pl-56 2xl:text-2xl'>

              Nossa evolução acontece página por página. O Papel Pólen® evoluiu seu processo produtivo
              reduzindo ainda mais seu impacto ambiental. Agora ele é Papel Pólen® Natural, resultado de um
              compromisso com a sustentabilidade e o cuidado com o meio ambiente.
            </p>
            <p className='md:pt-0 pl-16 pr-16 2xl:pl-56 2xl:text-2xl'>
              Com base em um estudo de análise de ciclo de vida comparativa, o Papel Pólen® Natural
              apresenta notáveis benefícios ambientais em comparação com papéis convencionais: uma
              redução de 19% na emissão de carbono, uma economia de 12% no consumo de água e uma
              diminuição de 24% no consumo de recursos fósseis.
            </p>
          </div>
          <div className="flex w-full justify-center">
            <img src="/edicao_carbono_zero.svg" alt="Logo Polen Natural" className="w-3/5" />
          </div>
        </div>
      </section>
      <section className="bg-[#231f20] flex items-center">
        <div className="h-[100%] bg-[url('/section_divider.svg')] pt-16 bg-no-repeat bg-contain bg-[center_bottom_-10.85rem]">
          <h3 className='text-white text-2xl px-4 pb-8'>Compromisso para Renovar a Vida</h3>
          <div className='md:grid md:grid-cols-2'>
            <div className="text-white px-4 pr-8 flex flex-col gap-y-8 pt-4 md:pt-0 2xl:pr-56 2xl:text-2xl">
              <p>
                Através dos nossos Compromissos para Renovar a Vida, estamos ampliando nosso<br></br>
                impacto positivo na cadeia de valor e na sociedade. Buscamos promover mudanças<br></br>
                significativas na forma como produzimos, consumimos e nos relacionamos com o<br></br>
                mundo, visando uma economia regenerativa. Esses compromissos guiam nossos<br></br>
                esforços em prol da renovação da vida, das pessoas e do planeta.
              </p>

            </div>
            <div className="text-white px-4 pr-8 flex flex-col gap-y-8 pt-4 md:pt-0 2xl:pr-56 2xl:text-2xl">
              <p>
                Diante dos desafios complexos que enfrentamos, nossa estratégia de sustentabilidade<br></br>
                foi construída de forma colaborativa, com a participação de centenas de pessoas de<br></br>
                diferentes públicos de relacionamento. Com isso, assumimos 15 metas alinhadas<br></br>
                com os Objetivos de Desenvolvimento Sustentável (ODS). A seguir, apresentamos as<br></br>
                iniciativas que estamos implementando para transformar esses compromissos em
                ações concretas.
              </p>
            </div>
          </div>
          <div className='md:grid lg:grid-cols-5 lg:gap-x-8 lg:max-w-[1300px] mx-auto py-8'>
            <div style={{ backgroundImage: 'url(/tag.svg)' }} className='bg-no-repeat bg-cover py-8 px-4 lg:h-[124px]'>
              <p>Combater a crise climática</p>
            </div>
            <div style={{ backgroundImage: 'url(/tag.svg)' }} className='bg-no-repeat bg-cover py-8 px-4 lg:h-[124px]'>
              <p>Cuidar da água</p>
            </div>
            <div style={{ backgroundImage: 'url(/tag.svg)' }} className='bg-no-repeat bg-cover py-8 px-4 lg:h-[124px]'>
              <p>Reduzir os resíduos</p>
            </div>
            <div style={{ backgroundImage: 'url(/tag.svg)' }} className='bg-no-repeat bg-cover py-8 px-4 lg:h-[124px]'>
              <p>Oferecer produtos renováveis</p>
            </div>
            <div style={{ backgroundImage: 'url(/tag.svg)' }} className='bg-no-repeat bg-cover py-8 px-4 lg:h-[124px]'>
              <p>Conservar a biodiversidade</p>
            </div>
          </div>
          <div className='w-full flex justify-center mt-8'>
            <a href="#" className='p-4 bg-[#fff7e0] rounded-lg mb-[16rem]'>Saiba mais sobre os compromissos para Renovar a Vida</a>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[url('/section_divider.svg')] bg-no-repeat bg-[length:100%_100%] py-16">
        <div className='flex justify-center gap-x-4'>
          <img src="/logo_polen_and_points.svg" alt="Logo Polen Natural" className="w-[160px] h-[64px]" />
        </div>
        <form action="" className='flex flex-col gap-y-4 lg:max-w-[880px] mx-auto my-12'>
          <input type="text" name="name" id="name" placeholder='Nome' className='border border-gray-700 p-2 rounded-xl' />
          <input type="text" name="email" id="email" placeholder='E-mail' className='border border-gray-700 p-2 rounded-xl' />
          <input type="text" name="phone" id="phone" placeholder='Telefone' className='border border-gray-700 p-2 rounded-xl' />
          <input type="text" name="business" id="business" placeholder='Empresa' className='border border-gray-700 p-2 rounded-xl' />
          <button type="submit" className='bg-[#F7941D] p-2 rounded-xl max-w-[200px] text-white'>
            Enviar
          </button>
        </form>
        <div className='grid lg:grid-cols-3 lg:max-w-[880px] mx-auto'>
          <div>
            <div className='flex gap-x-2'>
              <div><AiFillFacebook size='1.5rem' /></div>
              <div><FaInstagramSquare size='1.5rem' /></div>
              <p>@papelpolenoficial</p>
            </div>
            <div></div>
          </div>
          <div className='text-center'>
            <p>0800 022 1727</p>
          </div>
          <div className='text-end'>
            <p>marketing@suzano.com.br</p>
          </div>
        </div>
      </section>
    </main>
  )
}
