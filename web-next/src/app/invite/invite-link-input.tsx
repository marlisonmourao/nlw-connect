import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { Copy, Link } from 'lucide-react'

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue="http://locahost:3000/invite" />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
