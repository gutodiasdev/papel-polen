
export default function Home() {
  return (
    <main className="min-h-screen min-w-full">
      <section className="min-h-screen bg-[#231f20] rounded-tl-[32rem] md:rounded-tl-none lg:rounded-bl-[32rem] md:grid md:grid-cols-2 items-center  pt-8 pb-16">
        <div className="flex w-full justify-center">
          <img src="/illustration_01.svg" alt="Logo Polen Natural" className="w-4/5" />
        </div>
        <div className="text-white pl-4 pr-8 flex flex-col gap-y-8 pt-4 md:pt-0">
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
    </main>
  )
}
