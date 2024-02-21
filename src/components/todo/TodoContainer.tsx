import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // From local state
  const { todos } = useAppSelector((state) => state.todo);

  // From server
  // const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  // console.log(todos);
  // if (isLoading) {
  //   return <p>Loading ....</p>
  // }

  return (
    <div>
      <div className="flex justify-between mb-4">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="w-full h-full bg-primary-gradient rounded-xl p-[5px] ">
        {/* <div className="bg-yellow-300 flex justify-center items-center p-3 rounded-md">
          <p className="font-bold text-2xl">There is no task pending</p>
        </div> */}
        <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
          {todos.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
          {/* {todos.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
