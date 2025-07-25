import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRooms } from '@/http/use-rooms'
import { formatTimeToNow } from '@/utils/format-relative-date'
import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido às salas criadas recentemente.
        </CardDescription>
        <CardContent className="flex cursor-pointer flex-col gap-3 p-0 py-2">
          {isLoading && (
            <span className="flex items-center justify-center py-4">
              Carregando salas...
            </span>
          )}

          {data?.map((room) => (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <div className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {formatTimeToNow(room.createdAt)}
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {room.questionCount} pergunta(s)
                  </Badge>
                </div>
              </div>

              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  )
}
