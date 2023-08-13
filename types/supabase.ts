export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      completed_tasks: {
        Row: {
          completed_at: string | null
          completed_by_user_id: string | null
          description: string | null
          id: number
          name: string | null
          task_id: number | null
        }
        Insert: {
          completed_at?: string | null
          completed_by_user_id?: string | null
          description?: string | null
          id?: number
          name?: string | null
          task_id?: number | null
        }
        Update: {
          completed_at?: string | null
          completed_by_user_id?: string | null
          description?: string | null
          id?: number
          name?: string | null
          task_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "completed_tasks_completed_by_user_id_fkey"
            columns: ["completed_by_user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          id: number
          image_path: string | null
          is_recurring: boolean
          name: string | null
          priority: string | null
          recurring_type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          image_path?: string | null
          is_recurring?: boolean
          name?: string | null
          priority?: string | null
          recurring_type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          image_path?: string | null
          is_recurring?: boolean
          name?: string | null
          priority?: string | null
          recurring_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_current_task: {
        Row: {
          action_at: string | null
          id: number
          is_assigned: boolean | null
          is_current: boolean | null
          task_id: number | null
          user_id: string | null
        }
        Insert: {
          action_at?: string | null
          id?: number
          is_assigned?: boolean | null
          is_current?: boolean | null
          task_id?: number | null
          user_id?: string | null
        }
        Update: {
          action_at?: string | null
          id?: number
          is_assigned?: boolean | null
          is_current?: boolean | null
          task_id?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
