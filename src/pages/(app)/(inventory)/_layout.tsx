import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/(inventory)')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
