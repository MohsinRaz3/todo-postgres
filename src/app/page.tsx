import AddTodo from './components/AddTodo'
import TodoList from './components/todoList'

export default function Home() {
  return (
    <main>
      <div className=' bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center'>
        <div className='px-3 py-3 rounded-xl bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60 backdrop-blur-xl  max-w-md w-full'>
          {/* @ts-ignore */}
          <TodoList />
          {/* @ts-ignore */}
          <AddTodo />
          <div className='w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6'> </div>
        </div>

      </div>
    </main>
  )
}
