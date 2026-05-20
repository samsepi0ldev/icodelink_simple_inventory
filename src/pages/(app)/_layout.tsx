import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { Header } from '@/components/header'

export const Route = createFileRoute('/(app)')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full h-dvh">
      <Header />

      <main className="container mx-auto pt-10">
        <Outlet />
      </main>
    </div>
  )
}
