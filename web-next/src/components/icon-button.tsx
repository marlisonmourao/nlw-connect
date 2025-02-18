import type { ComponentProps } from 'react'

type IconButtonProps = ComponentProps<'button'> & {}

export function IconButton({ ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className="p-1.5 bg-gray-500  rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
      {...rest}
    />
  )
}
