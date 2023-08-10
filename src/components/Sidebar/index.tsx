'use client'

import { Cog, Home, LifeBuoy, Search, User, UserCircle } from 'lucide-react'
import Logo from './Logo'
import { NavItem } from './NavItem'
import { UsesSpaceWidget } from './UsesSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import Accordion from './Acordeon/Control'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        {/* <Accordion /> */}

        <NavItem title="Cadastro " icon={User} href="/dados" />
        <NavItem title="Meus Dados" icon={UserCircle} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Suport" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
        <UsesSpaceWidget />
        <div className="h-px bg-zinc-200" />
        <Profile />
      </div>
    </aside>
  )
}
