"use client"
import { newTodo } from '@/lib/drizzle'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddTodo = () => {
    const [task, setTask] = useState<newTodo | null>(null)
    const { refresh } = useRouter()
    const HandleSubmit = async () => {

        try {

            if (task) {
                const res = await fetch("/api/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: task.task
                    })
                })
                refresh()
                setTask({ task: "" })
                //console.log(res.ok);

            }
        } catch (error) {
            // console.log(error);
        }
    }


    return (
        <div>
            <form className='w-full flex gap-x-3'>
                <input
                    onChange={(e) => setTask({ task: e.target.value })}
                    className='rounded-full w-full py-3.5 px-5 border border-red-400 focus:outline-primary' type="text" />
                <button
                    type="button"
                    onClick={HandleSubmit}
                    className=" p-4 rounded-full bg-gradient-to-tr from-primary to-secondary shrink-0">
                    <Image src={"/Vector.svg"} alt="arrow" width={20} height={20} />
                </button>
            </form>
        </div>
    )
}

export default AddTodo