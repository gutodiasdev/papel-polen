'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

type Input = {
    name: string
    email: string
    phone: string
    businessName: string
}

type FormDialogProps = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function Form() {
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Input>()

    async function registerUser(data: Input) {
        await fetch('https://papelpolen.com.br/travelrock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    const mutation = useMutation({
        mutationFn: async (data: Input) => await registerUser(data),
        onSuccess: () => { 
            setIsOpen(true)
            reset()
        }
    })

    const submitData: SubmitHandler<Input> = async (values) => {
        await mutation.mutateAsync(values)
    }
    
    return (
        <>
            <FormDialog isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
            <form id="register-form" action="" className='flex flex-col gap-y-4 max-w-[320px]  md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto my-12'
                onSubmit={handleSubmit(submitData)}>
                <input type="text" {...register('name')} placeholder='Nome' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
                2xl:text-2xl' />
                <input type="text" {...register('email')} placeholder='E-mail' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
                2xl:text-2xl' />
                <input type="text" {...register('phone')} placeholder='Telefone' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
                2xl:text-2xl' />
                <input type="text" {...register('businessName')} placeholder='Empresa' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
                2xl:text-2xl' />
                <button type="submit" className='bg-[#F7941D] p-2 rounded-xl max-w-[200px] text-[#FFF7E0] lg:max-w-[320px] 2xl:text-2xl'
                    disabled={isSubmitting ? true : false}>
                    Enviar
                </button>
            </form>
        </>
    )
}

const FormDialog = ({ isOpen, setIsOpen }: FormDialogProps) => {
    const handleClose = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Enviado com sucesso!
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Em breve entraremos em contato com você.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleClose}
                                    >
                                        Fechar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}