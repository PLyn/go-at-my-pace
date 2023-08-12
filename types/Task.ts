export interface Task {
  id: string;
  name: string;
  description: string;
  is_recurring: string;
  recurring_type: string;
  priority: string;
  due_date: string;
  created_at: string;

  //active current task
  user_id?: string;
  //Image for task
  image_path?: string;
}