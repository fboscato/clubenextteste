import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { Mail } from 'lucide-react'
import { SelectItem } from '@/components/Form/Select/SelectItem'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
      <SettingsTabs />
      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b  border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className=" text-lg font-medium text-zinc-900">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700  shadow-sm hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firsName"
              className="text-sm font-medium text-zinc-700"
            >
              Nome
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="firsName"
                  placeholder="Diego"
                ></Input.Control>
              </Input.Root>
              <Input.Root>
                <Input.Control placeholder="Fernandes"></Input.Control>
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="cpf" className="text-sm font-medium text-zinc-700">
              CPF
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix></Input.Prefix>
                <Input.Control
                  id="cpf"
                  type="number"
                  placeholder="000.000.000-00"
                  defaultValue="000.000.000-00"
                ></Input.Control>
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Prefix>
                  <Mail className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control
                  id="email"
                  type="email"
                  placeholder="Diego"
                  defaultValue="diego@rocketseat.com.br"
                  className="truncate"
                ></Input.Control>
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control
                  id="role"
                  type="role"
                  defaultValue="CTO"
                ></Input.Control>
              </Input.Root>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="contry"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placehoder="Selecione um país...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="us" text="Unides states" />
            </Select>
            <div className="grid grid-cols-2 gap-6"></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placehoder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC−08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC−03:00)" />
            </Select>
            <div className="grid grid-cols-2 gap-6"></div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div></div>
          </div>
          <div className="grid  grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700  shadow-sm hover:bg-zinc-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
