"use client";
import { FormSubmit } from "@/components/CRUD/HandleSubmitCRUD";
import useTaskListContext from "@/hooks/useTaskListContext";
import { useUserInfo } from "@/hooks/useUserInfo";
import { useRouter } from "next/navigation";

interface AssignFormProps {
  data: string;
}

const AssignForm: React.FC<AssignFormProps> = ({ data }) => {
  const router = useRouter();
  const { user } = useUserInfo();
  const item = JSON.parse(data);
  const { updateTaskList, setUpdateTaskList } = useTaskListContext();

  const HandleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    FormSubmit(e, "assign", user?.id);
    if (setUpdateTaskList !== undefined) setUpdateTaskList(true);
    router.push("/");
  };
  return (
    <div>
      <form method="post" onSubmit={HandleSubmit}>
        <div>
          <input name="id" type="hidden" value={item.id}></input>
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-400 rounded-lg my-4 mx-4 py-4 px-4"
          >
            Are you sure?
          </button>
        </div>
      </form>
    </div>
  );
};
export default AssignForm;