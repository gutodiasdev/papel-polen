import { FaAngleDown } from 'react-icons/fa'
import { CaseTagsSwiper } from '../components/TagsSwiper'


export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="min-h-screen bg-[#231f20] md:rounded-tl-none lg:rounded-bl-[32rem] 
      lg:rounded-tr-[32rem] grid items-center justify-center pt-8 pb-16 text-[#FFF7E0] text-center">
        <div className="flex w-full justify-center">
          <a href={'/'}>
            <img src="/logo_papel_polen.svg" alt="Logo Polen Natural" className="w-[64px] h-[64px] 2xl:w-[120px] 2xl:h-[120px] 
            cursor-pointer" />
          </a>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl  2xl:text-7xl">
          Livro Carbono Zero para inspirar você
        </h1>
        <p className="md:2xl lg:text-lg 2xl:text-xl -mt-24">
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
        <div className='min-h-screen bg-[#fff7e0] lg:rounded-br-[32rem] grid items-center md:grid lg:grid-cols-2 lg:px-24 xl:px-32
        px-3 md:px-0'>
          <div className='md:px-24 lg:pr-16 2xl:pl-32 2xl:text-2xl'>
            <p className='md:pt-0'>
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
            <button type="submit" className='bg-[#F7941D] p-2 rounded-xl min-w-[200px] text-[#FFF7E0] px-8 mt-8
            hover:bg-[#231f20] hover:text-[#F7941D] transition ease-out'>
              Conheça o Papel Pólen® Natural e faça a escolha sustentável!
            </button>
          </div>
          <div className='grid place-items-center relative overflow-hidden w-full pt-[56.25%]'>
            <iframe className='absolute top-0 left-0 bottom-0 right-0 w-full h-full' src="https://www.youtube.com/embed/PMwDeoh0LM4" title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#231f20] rounded-tl-[32rem] md:rounded-tl-none lg:rounded-bl-[32rem] 
      md:grid md:grid-cols-1 lg:grid-cols-2 md:px-24 items-center px-8 pt-8 pb-16">
        <div className="flex w-full justify-">
          <img src="/illustration_01.svg" alt="Logo Polen Natural" className="w-4/5" />
        </div>
        <div className="text-[#FFF7E0] lg:pl-4 flex flex-col gap-y-8 pt-4 md:pt-0 lg:pr-24 2xl:pr-56 xl:pr-32 2xl:text-2xl">
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
        <div className='min-h-screen bg-[#fff7e0] lg:rounded-br-[32rem] md:grid md:grid-cols-1 lg:grid-cols-2 p-8 md:px-24 items-center'>
          <div className='flex flex-col gap-y-8 lg:pl-24 xl:pl-32 2xl:pl-56 2xl:text-2xl'>
            <p className='md:pt-0 lg:pr-16 '>
              A Suzano é comprometida com o desenvolvimento sustentável e, por isso, investe em uma
              produção inteligente, consciente e amigável ao meio ambiente. Todo o nosso processo é
              meticulosamente planejado para otimizar recursos, assegurar a qualidade do produto final e,
              acima de tudo, preservar a fonte da matéria-prima, minimizando significativamente o impacto
              ambiental.
            </p>
            <p className='md:pt-0 lg:pr-16 2xl:text-2xl'>

              Nossa evolução acontece página por página. O Papel Pólen® evoluiu seu processo produtivo
              reduzindo ainda mais seu impacto ambiental. Agora ele é Papel Pólen® Natural, resultado de um
              compromisso com a sustentabilidade e o cuidado com o meio ambiente.
            </p>
            <p className='md:pt-0 lg:pr-16 2xl:text-2xl'>
              Com base em um estudo de análise de ciclo de vida comparativa, o Papel Pólen® Natural
              apresenta notáveis benefícios ambientais em comparação com papéis convencionais: uma
              redução de 19% na emissão de carbono, uma economia de 12% no consumo de água e uma
              diminuição de 24% no consumo de recursos fósseis.
            </p>
          </div>
          <div className="flex w-full justify-center mt-8">
            <img src="/edicao_carbono_zero.svg" alt="Logo Polen Natural" className="w-3/5" />
          </div>
        </div>
      </section>
      <section className="bg-[#231f20] flex items-center">
        <div className="h-[100%] bg-[url('/section_divider.svg')] pt-16 bg-no-repeat bg-contain bg-[center_bottom_-1rem]
        md:bg-[center_bottom_-6.25rem] lg:bg-[center_bottom_-8.25rem] 2xl:bg-[center_bottom_-15.5rem] lg:px-24 md:px-24 xl:px-32 2xl:px-56 px-8">
          <h3 className='text-[#FFF7E0] text-2xl 2xl:text-3xl 2xl:font-extrabold pb-8'>Compromisso para Renovar a Vida</h3>
          <div className='md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-y-8 2xl:gap-x-16'>
            <div className="text-[#FFF7E0] flex flex-col gap-y-8 pt-4 md:pt-0 xl:text-md 2xl:text-2xl">
              <p>
                Através dos nossos Compromissos para Renovar a Vida, estamos ampliando nosso
                impacto positivo na cadeia de valor e na sociedade. Buscamos promover mudanças
                significativas na forma como produzimos, consumimos e nos relacionamos com o
                mundo, visando uma economia regenerativa. Esses compromissos guiam nossos
                esforços em prol da renovação da vida, das pessoas e do planeta.
              </p>

            </div>
            <div className="text-[#FFF7E0] flex flex-col gap-y-8 pt-4 md:pt-0 2xl:pr-24 2xl:text-2xl">
              <p>
                Diante dos desafios complexos que enfrentamos, nossa estratégia de sustentabilidade
                foi construída de forma colaborativa, com a participação de centenas de pessoas de
                diferentes públicos de relacionamento. Com isso, assumimos 15 metas alinhadas
                com os Objetivos de Desenvolvimento Sustentável (ODS). A seguir, apresentamos as
                iniciativas que estamos implementando para transformar esses compromissos em
                ações concretas.
              </p>
            </div>
          </div>
          <div className="py-8 md:flex md:gap-x-4">
          <CaseTagsSwiper />
        </div>
          <div className='w-full flex justify-center mt-8'>
            <button className='p-4 bg-[#fff7e0] rounded-lg mb-[16rem] hover:bg-[#F7941D] hover:text-[#231f20] transition ease-out
            2xl:text-2xl'>
              Saiba mais sobre os compromissos para Renovar a Vida
            </button>
          </div>
        </div>
      </section>
      <section className="min-h-[50%] bg-[url('/section_divider.svg')] bg-no-repeat bg-[length:100%_100%] py-16">
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
      </section>
    </main>
  )
}
