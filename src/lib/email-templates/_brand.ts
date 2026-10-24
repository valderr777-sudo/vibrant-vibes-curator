export const brand = {
  navy: '#1f2a4d',
  red: '#b22234',
  gold: '#f28c28',
  text: '#333333',
  muted: '#666666',
  site: 'https://worwf.lovable.app',
}

export const main = { backgroundColor: '#ffffff', fontFamily: 'Lato, Arial, sans-serif', margin: 0, padding: 0 }
export const container = { maxWidth: '600px', margin: '0 auto', border: '1px solid #e5e5e5' }
export const header = { backgroundColor: brand.navy, padding: '28px 32px', borderBottom: `4px solid ${brand.red}` }
export const headerText = { color: '#ffffff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '20px', fontWeight: 700, margin: 0 }
export const headerSub = { color: '#d9dce6', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' as const, margin: '6px 0 0' }
export const content = { padding: '32px' }
export const h1 = { color: brand.navy, fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '26px', fontWeight: 700, margin: '0 0 16px' }
export const p = { color: brand.text, fontSize: '15px', lineHeight: '24px', margin: '0 0 16px' }
export const label = { color: brand.muted, fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '12px 0 2px' }
export const value = { color: brand.text, fontSize: '15px', lineHeight: '22px', margin: 0, whiteSpace: 'pre-wrap' as const }
export const button = { backgroundColor: brand.red, color: '#ffffff', padding: '14px 26px', borderRadius: '4px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }
export const footer = { backgroundColor: '#f6f6f8', padding: '20px 32px', color: brand.muted, fontSize: '12px', lineHeight: '18px' }
