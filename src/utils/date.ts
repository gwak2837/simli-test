import koLocale from 'date-fns/locale/ko'
import formatWithOptions from 'date-fns/fp/formatWithOptions'
import { parse } from 'date-fns'

export const formatDate = formatWithOptions({ locale: koLocale })
export const parseDate = (dateFormat: string) => (str: string) => parse(str, dateFormat, new Date())

export const formatFullDate = formatDate('y. M. d. (E) a h:mm')
export const parseFullDate = parseDate('y. M. d. (E) a h:mm')

export const formatSimpleDate = formatDate('y. M. d. H:mm')
export const parseSimpleDate = parseDate('y. M. d. H:mm')

export const formatExpiryDate = (date: string) => {
  return date.substr(2, 4) + '/' + date.substr(0, 2)
}
