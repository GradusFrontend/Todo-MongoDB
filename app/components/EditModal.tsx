'use client'

import React from 'react'
import { useForm } from 'react-hook-form';

interface EditModal {
    title: string
    desc: string
    id: string
}

export default function EditModal({title, desc, id}: EditModal) {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
		// axios.post('/api/todos', data)
		// 	.then(() => setIsChanged(!isChanged))
	}
    return (
        <dialog open={true} className='fixed top-1/2 left-1/2 translate-x-[-70%] translate-y-[-50%] bg-[#e1e1e1] rounded-2xl p-8 shadow-lg shadow-[#00000065]'>
            <div>
                <h3 className='text-[#3b82f6    ] text-2xl mb-4 font-semibold'>Edit Todo</h3>
                <div>
                    <form name='EditModal' className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-2'>
                        <input {...register('name', { required: true })} className={`${errors.title ? '!outline-red-500 !border-red-500' : ''} p-2 rounded-md border border-[#c4c4c4] `} placeholder="Загаловок" type="text" />
						<input {...register('desc', { required: true })} className={`${errors.description ? '!outline-red-500 !border-red-500' : ''} p-2 rounded-md border border-[#c4c4c4] `} placeholder="Описание" type="text" />
                        </div>
                        <button type='submit' className='px-3 py-2 rounded-md border-0 bg-blue-500 text-white'>Edit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}
