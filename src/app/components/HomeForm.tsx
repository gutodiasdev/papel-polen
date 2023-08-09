'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

type Input = {
    name: string
    email: string
    phone: string
    business_name: string
}

export function HomeForm() {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<Input>()

    async function registerUser(data: Input) {
        console.log(data)
        await fetch('/register',  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    const mutation = useMutation({
        mutationFn: async (data: Input) => await registerUser(data)
    })

    const submitData: SubmitHandler<Input> = async (values) => {
        await mutation.mutateAsync(values)
    }

    return (
        <form action="" className='flex flex-col gap-y-4 max-w-[320px]  md:max-w-[480px] lg:max-w-[640px] xl:max-w-[880px] mx-auto my-12'
        onSubmit={handleSubmit(submitData)}>
            <input type="text" {...register('name')} placeholder='Nome' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
        2xl:text-2xl' />
            <input type="text" {...register('email')} placeholder='E-mail' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
        2xl:text-2xl' />
            <input type="text" {...register('phone')}  placeholder='Telefone' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
        2xl:text-2xl' />
            <input type="text" {...register('business_name')}  placeholder='Empresa' className='border border-gray-700 p-2 rounded-xl bg-[#fff7e0]
        2xl:text-2xl' />
            <button type="submit" className='bg-[#F7941D] p-2 rounded-xl max-w-[200px] text-[#FFF7E0] lg:max-w-[320px] 2xl:text-2xl'
            disabled={isSubmitting ? true : false}>
                Enviar
            </button>
        </form>
    )
}