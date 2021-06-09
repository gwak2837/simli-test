export function formatNumber(n: number) {
  return Intl.NumberFormat('ko-KR').format(n)
}

export function formatPriceWithFree(price: number) {
  const formatted = formatNumber(price)
  return formatted === '0' ? '무료' : `${formatted} 원`
}

export function formatPrice(currency: number) {
  return `${formatNumber(currency)} 원`
}

export function formatPricesWithFree(prices: number[]): string {
  if (prices.length === 0) {
    return '가격 정보 없음'
  }
  if (prices.length === 1) {
    return `${formatPriceWithFree(prices[0])}`
  }

  const minPrice = prices.reduce((previous, current) => (previous < current ? previous : current))
  return `${formatPriceWithFree(minPrice)}~`
}
