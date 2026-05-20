import { createFileRoute } from '@tanstack/react-router'
import { ActivityHistoryList } from '@/features/activity-history/components/activity-history-list'

export const Route = createFileRoute('/(app)/activity-history/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen  p-6 sm:p-8 font-sans">
      <header className="mb-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Histórico de Atividades
            </h1>
            <p className="text-sm text-neutral-400">
              Monitore todas as movimentações e alterações do sistema.
            </p>
          </div>
        </div>
      </header>

      <main className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-md shadow-xs">
        <div className="overflow-x-auto">
          <ActivityHistoryList />
        </div>
      </main>
    </div>
  )
}
