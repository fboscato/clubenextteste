import React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon, DollarSign, User, UserCog } from 'lucide-react'

export default function Accordion() {
  return (
    <AccordionPrimitive.Root type="multiple">
      <AccordionPrimitive.Item value="item-1">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group">
            <div className="ml-3 flex items-center text-zinc-600">
              <UserCog />

              <span className="ml-2">Cadastro</span>
              <ChevronDownIcon className="group-radix-state-open:rotate-180 ml-2 h-5 w-5 transform" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>
          <a
            href=""
            className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
          >
            <User className="ml-4 h-5  w-5 text-zinc-500 group-hover:text-violet-300" />
            <span className="font-normal text-zinc-700 group-hover:text-violet-500 ">
              Pessoa
            </span>
          </a>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="item-2">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group hover:text-violet-300">
            <div className="flex items-center hover:text-violet-300">
              <DollarSign className="w-5hover:text-violet-300 ml-2 h-5 text-zinc-500 " />
              <span>Caixa</span>
              <ChevronDownIcon className="group-radix-state-open:rotate-180 ml-2 h-5 w-5 transform" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>Content 2</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}
