export function googleMapsLink(b: {
  lat?: number | null
  lng?: number | null
  endereco?: string | null
  nome: string
}) {
  if (b.lat != null && b.lng != null) {
    return `https://www.google.com/maps/search/?api=1&query=${b.lat},${b.lng}`
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.endereco || b.nome)}`
}