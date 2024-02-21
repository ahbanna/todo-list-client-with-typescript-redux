import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-center font-semibold text-3xl py-5">My Todos</h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};
export default Todo;
