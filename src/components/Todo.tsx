
import {
  ArrowRightOnRectangleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid'
import useStore from '../store'
import { useMutateAuth } from '../hooks/useMutateAuth'

export const Todo = () => {
  const { logoutMutation } = useMutateAuth()
  const logout = async () => {
    await logoutMutation.mutateAsync()
  }
  return (
    <div>
      <ArrowRightOnRectangleIcon
        onClick={logout}
        className="h-6 w-6 my-6 text-blue-500 cursor-pointer"
      />
    </div>
  )
}