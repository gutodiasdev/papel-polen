'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function YellowTagsSwiper() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                340: {
                    slidesPerView: 1.2,
                    spaceBetween: 16
                },
                1250: {
                    slidesPerView: 1.85,
                    spaceBetween: 30
                },
                1400: {
                    slidesPerView: 2.2,
                    spaceBetween: 30
                }
            }}
            modules={[Pagination, Navigation]}
            className="min-h-[400px]"
        >
            <SwiperSlide>
                <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px] md:min-w-[296px]">
                    <img src="/apartment.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para as editoras</h3>
                    <p className="mt-8 text-lg 2xl:text-xl">O Pólen Natural é produzido de forma otimizada e oferece melhor desempenho na fabricação de livros.</p>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px] md:min-w-[300px]">
                    <img src="/description.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para leitores</h3>
                    <p className="mt-8 text-lg 2xl:text-xl">Leitura mais confortável para os olhos.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/yellow_tag.svg')] bg-no-repeat bg-contain text-[#FFF7E0] p-8 min-h-[400px] md:min-w-[300px]">
                    <img src="/edit_note.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <h3 className="text-[#231f20] text-2xl py-4">Naturalmente melhor para escritores</h3>
                    <p className="mt-8 text-lg 2xl:text-xl">Toda a sofisticação de Pólen, com corpo e acabamento de superfície para valorizar uma boa história.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export function DarkTagsSwiper() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                340: {
                    slidesPerView: 1.2,
                    spaceBetween: 16
                },
                1250: {
                    slidesPerView: 1.85,
                    spaceBetween: 30
                },
                1400: {
                    slidesPerView: 2.2,
                    spaceBetween: 30
                }
            }}
            modules={[Pagination, Navigation]}
            className="min-h-[400px]"
        >
            <SwiperSlide>
                <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain 2xl:bg-cover text-[#FFF7E0] p-8 min-h-[400px] 
                2xl:min-h-[480px] min-w-[300px] 2xl:min-w-[400px]">
                    <img src="/pine_tree.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <div className='w-full'>
                        <p className="mt-8 text-lg 2xl:text-2xl">
                            Visando fornecer soluções sustentáveis, a nossa empresa se dedica ao plantio e cultivo de árvores, as
                            quais são transformadas em bioprodutos inovadores e renováveis que atualmente impactam positivamente a vida
                            de mais de 2 bilhões de pessoas.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain 2xl:bg-cover text-[#FFF7E0] p-8 min-h-[400px] 
                2xl:min-h-[440px] md:min-w-[300px] 2xl:min-w-[400px]">
                    <img src="/nature_tree.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <div className='w-full'>
                        <p className="mt-8 text-lg 2xl:text-2xl">
                            Por meio do desenvolvimento de uma ampla gama de materiais, utilizando árvores cultivadas por nós, nos
                            comprometemos a tornar os produtos disponíveis nas lojas e prateleiras ao redor do mundo mais sustentáveis.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/dark_tag.svg')] bg-no-repeat bg-contain 2xl:bg-cover text-[#FFF7E0] p-8 min-h-[400px] 
                2xl:min-h-[440px] md:min-w-[300px] 2xl:min-w-[400px]">
                    <img src="/two_pine_trees.svg" alt="Pine" className="w-[24px] h-[24px]" />
                    <div className='w-full'>
                        <p className="mt-8 text-lg 2xl:text-2xl">
                            A empresa tem a sustentabilidade como um pilar essencial em sua trajetória e busca conscientizar e
                            inspirar cada vez mais pessoas a adotarem práticas sustentáveis.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export function CaseTagsSwiper() {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                340: {
                    slidesPerView: 1.2,
                    spaceBetween: 16
                },
                1250: {
                    slidesPerView: 3.2,
                    spaceBetween: 24
                },
                1400: {
                    slidesPerView: 4.2,
                    spaceBetween: 32
                }
            }}
            modules={[Pagination, Navigation]}
            className="min-h-fit w-full"
        >
            <SwiperSlide>
                <div className="bg-[url('/tag.svg')] bg-no-repeat bg-cover md:bg-contain py-8 px-4 min-h-[156px] md:min-h-[180px]">
                    <img src="/thermostat.svg" alt="Ícone" className='w-4 lg:h-4' />
                    <p className='md:text-xl 2xl:text-xl mt-2'>Combater a crise climática</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/tag.svg')] bg-no-repeat bg-cover md:bg-contain py-8 px-4 min-h-[156px] md:min-h-[180px]">
                    <img src="/water_drop.svg" alt="Ícone" className='w-4 lg:h-4' />
                    <p className='md:text-xl 2xl:text-xl mt-2'>Cuidar da água</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/tag.svg')] bg-no-repeat bg-cover md:bg-contain py-8 px-4 min-h-[156px] md:min-h-[180px]">
                    <img src="/delete.svg" alt="Ícone" className='w-4 lg:h-4' />
                    <p className='md:text-xl 2xl:text-xl mt-2'>Reduzir os resíduos</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/tag.svg')] bg-no-repeat bg-cover md:bg-contain py-8 px-4 min-h-[156px] md:min-h-[180px]">
                    <img src="/nest_eco_leaf.svg" alt="Ícone" className='w-4 lg:h-4' />
                    <p className='md:text-xl 2xl:text-xl mt-2'>Oferecer produtos renováveis</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-[url('/tag.svg')] bg-no-repeat bg-cover md:bg-contain py-8 px-4 min-h-[156px] md:min-h-[180px]">
                    <img src="/energy_program_time_used.svg" alt="Ícone" className='w-4 lg:h-4' />
                    <p className='md:text-xl 2xl:text-xl mt-2'>Conservar a biodiversidade</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}






