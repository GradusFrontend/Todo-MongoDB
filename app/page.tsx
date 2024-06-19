'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Todo from './components/Todo';
import EditModal from './components/EditModal';


export default function Home() {
	type Todo = {
		name: string,
		desc: string,
		_id: string
	}

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const [todos, setTodos] = useState([])
	const [isChanged, setIsChanged] = useState(false)

	useEffect(() => {
		axios.get('/api/todos')
			.then(res => {
				setTodos(res.data.data)
			})
	}, [isChanged])

	const onSubmit = (data: any) => {
		axios.post('/api/todos', data)
			.then(() => setIsChanged(!isChanged))
	}

	return (
		<main className='w-[95%] max-w-[1440px] my-0 mx-auto mt-10'>
			<h1 className='text-center text-4xl font-semibold text-teal-600'>ToDo With MongoDB</h1>

			<section className='flex justify-center mt-5'>
				<form onSubmit={handleSubmit(onSubmit)} name='AddTaskForm' className='flex justify-center gap-2 flex-col'>
					<div className='flex gap-2'>
						<input {...register('name', { required: true })} className={`${errors.title ? '!outline-red-500 !border-red-500' : ''} p-2 rounded-md border border-[#c4c4c4] `} placeholder="Загаловок" type="text" />
						<input {...register('desc', { required: true })} className={`${errors.description ? '!outline-red-500 !border-red-500' : ''} p-2 rounded-md border border-[#c4c4c4] `} placeholder="Описание" type="text" />
					</div>

					<button type='submit' className='px-3 py-2 rounded-md border-0 bg-blue-500 text-white'>Add Task</button>
				</form>
			</section>

			<section className='w-full grid grid-cols-3 gap-3 mt-10'>
				{
					todos.map((item: any, idx) => (
						<Todo
							name={item?.name}
							desc={item?.desc}
							_id={item?._id}
							handleClick={() => {
								setIsChanged(!isChanged)
							}}
							key={idx}
						/>
					))
				}
			</section>

			<EditModal />
		</main>
	);
}