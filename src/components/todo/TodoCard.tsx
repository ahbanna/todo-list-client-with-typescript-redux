import { useAppDispatch } from "@/redux/hook";
import DeleteIcon from "../Icons/DeleteIcon/DeleteIcon";
import EditIcon from "../Icons/EditIcon/EditIcon";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    // console.log("Check clicked");
    dispatch(toggleComplete(id));
  };
  return (
    <div className="rounded-md p-3 flex justify-between items-center border">
      <input
        onChange={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold">{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p>{description}</p>
      <div className="space-x-4">
        <Button className="bg-[#5C53FE]">
          <EditIcon></EditIcon> Edit
        </Button>
        <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
          <DeleteIcon></DeleteIcon> Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
