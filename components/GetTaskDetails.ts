import supabase from "@/lib/supabaseClient";
import { Task } from "@/types/Task";

const GetTaskDetails = async () => {
  const { data: TaskData, error: TaskError } = await supabase
    .from("tasks")
    .select(
      `id, 
      name, 
    description, 
    is_recurring, 
    recurring_type, 
    due_date, 
    priority, 
    created_at,
    image_path`
    );

  if (TaskError) throw new Error(TaskError.message);

  return (TaskData as Task[]) || [];
};

export default GetTaskDetails;
