import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros</span>
          <input
            placeholder="Nome do cliente"
            className="h-8 w-[320px] rounded-md border border-gray-300 bg-background px-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-900 dark:text-white"
          />
        </form>

        <div className="rounded-md border">
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <Table key={i}>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[64px]"></TableHead>
                    <TableHead className="w-[148px]">Identificador</TableHead>
                    <TableHead className="w-[180px]">Realizado há</TableHead>
                    <TableHead className="w-[140px]">Status</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead className="w-[140px]">Total do pedido</TableHead>
                    <TableHead className="w-[164px]"></TableHead>
                    <TableHead className="w-[132px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <span className="sr-only">Detlhes do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-sm font-medium">
                      j1k3jl91k3l2k
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      14 minutos
                    </TableCell>
                    <TableCell className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span className="font-medium text-foreground">
                        Pendente
                      </span>
                    </TableCell>
                    <TableCell className="font-medium">Ronaldo Silva</TableCell>
                    <TableCell className="font-medium"> R$ 149,90</TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr h-3" /> Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr h-3" /> Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )
          })}
        </div>
      </div>
    </>
  )
}
