import { Button } from "@/components/ui/button";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";

export function OrderTableRow(){

    return (
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
    )
}