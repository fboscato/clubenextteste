'use client'
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootPropos = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFileSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootPropos) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])
  function onFileSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((states) => [...states, ...files])
    } else {
      setFiles(files)
    }
  }
  return (
    <FileInputContext.Provider value={{ id, files, onFileSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
