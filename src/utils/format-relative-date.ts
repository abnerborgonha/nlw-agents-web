import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)

export function formatTimeToNow(dateString: string) {
  return dayjs(dateString, {
    locale: 'pt-br',
  }).fromNow()
}
