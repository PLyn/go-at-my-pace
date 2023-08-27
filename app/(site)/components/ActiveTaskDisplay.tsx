import TaskItemLayout from "@/app/manage/components/ManageTaskItemLayout";
import { useUserInfo } from "@/hooks/useUserInfo";
import { Task } from "@/types/Task";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";
import { AssignFormSubmit } from "./HandleSubmitAssign";
import useTaskListContext from "@/hooks/useTaskListContext";

interface ActiveTaskDisplayProps {
  task: Task;
}

const ActiveTaskDisplay: React.FC<ActiveTaskDisplayProps> = ({ task }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const { showToast, setShowToast, taskCompleted, setTaskCompleted } =
    useTaskListContext();
  const queryClient = useQueryClient();

  const HandleUnassign: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const isSuccess = await AssignFormSubmit(e, "unassign", user?.id);
    if (
      isSuccess &&
      setShowToast !== undefined &&
      setTaskCompleted !== undefined
    ) {
      setShowToast(true);
      setTaskCompleted(false);
    }
    queryClient.resetQueries("ActiveTask");

    router.refresh();
  };

  const HandleComplete: React.FormEventHandler<HTMLFormElement> = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    const isSuccess = await AssignFormSubmit(e, "complete", user?.id);
    if (
      isSuccess &&
      setShowToast !== undefined &&
      setTaskCompleted !== undefined
    ) {
      setShowToast(true);
      setTaskCompleted(true);
    }

    queryClient.resetQueries("ActiveTask");

    router.refresh();
  };

  return (
    <div key={task.id} className="w-full flex flex-col items-center">
      <div className="w-[30em]  bg-gray-200 rounded-lg my-4 mx-4 drop-shadow-lg">
        <TaskItemLayout task={task} />
        <div className="flex justify-around">
          <form method="post" onSubmit={HandleUnassign}>
            <input
              name="task"
              type="hidden"
              value={JSON.stringify(task)}
            ></input>
            <input
              name="description"
              type="hidden"
              value={task.description}
            ></input>
            <button
              type="submit"
              className="          
              hover:bg-green-500 
              hover:text-green-200 
              border-2
              border-green-500
              my-4
              mr-8
              rounded-lg
              w-[7em]
              h-[3em]
            font-semibold
            text-green-500"
            >
              Unassign
            </button>
          </form>
          <form method="post" onSubmit={HandleComplete}>
            <input
              name="task"
              type="hidden"
              value={JSON.stringify(task)}
            ></input>
            <button
              type="submit"
              className="          
              hover:bg-green-200
              hover:text-green-500 
              bg-green-500 
              text-green-100
              my-4
              mr-8
              rounded-lg
              w-[7em]
              h-[3em]
            font-semibold"
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActiveTaskDisplay;
