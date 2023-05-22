import TodoList from './components/todoList'

export default function Home() {
  return (
    <main>
      <div className='bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center'>
        <div className='px-3 py-4 rounded-xl bg-white max-w-md w-full'>
          {/* @ts-ignore */}
          <TodoList />
          <div className='w-1/2 h-1.5 bg-black/80 rounded mx-auto'> </div>
        </div>

      </div>
    </main>
  )
}
