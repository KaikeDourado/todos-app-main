import { deleteTodo } from "#/actions/todos";
import { Trash2 } from "lucide-react";

export function DeleteTodo({ id }: { id: string }) {
  const deleteTodoWithId = deleteTodo.bind(null, id)
  return (
    <form className="ml-auto" action={deleteTodoWithId}>
      <button className="flex items-center justify-center hover:text-violet-500">
        <Trash2 strokeWidth={1.5} size={20} />
      </button>
    </form>
  )
}