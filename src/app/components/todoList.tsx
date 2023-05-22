import { Todo } from "@/lib/drizzle"

const Getdata = async () => {
    try {
        const res = await fetch("http://localhost:3001/api/todo", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!res.ok) {
            throw new Error("Failed to fetch todo")
        }
        const result = res.json()
        return result

    } catch (error) {
        //  console.log(error);
    }

}

const TodoList = async () => {
    const res: { getData: Todo[] } = await Getdata();
    console.log(res);

    return (
        <>

            {
                res.getData.map((item: Todo) => {
                    return (
                        <div key={item.id} className='bg-gray-100 py-4 px-4 flex h-20 items-center gap-x-3 shadow rounded-lg my-5'>
                            <div className='h-3 w-3 bg-secondary rounded-full'></div>

                            <p className="text-lg font-semibold">{item.task}</p>
                        </div>

                    )
                })
            }
        </>
    )
}

export default TodoList