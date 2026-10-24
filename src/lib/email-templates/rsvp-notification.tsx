import * as React from 'react'
import { Heading, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { h1, label, value } from './_brand'

interface Props { name?: string; email?: string; phone?: string; guests?: number; note?: string; eventTitle?: string; eventDate?: string }

const Email = ({ name, email, phone, guests, note, eventTitle, eventDate }: Props) => (
  <Layout preview={`New RSVP from ${name ?? 'a guest'}`}>
    <Heading style={h1}>New RSVP</Heading>
    <Text style={label}>Event</Text><Text style={value}>{eventTitle}{eventDate ? `, ${eventDate}` : ''}</Text>
    <Text style={label}>Name</Text><Text style={value}>{name}</Text>
    <Text style={label}>Email</Text><Text style={value}>{email}</Text>
    <Text style={label}>Phone</Text><Text style={value}>{phone || 'Not given'}</Text>
    <Text style={label}>Number attending</Text><Text style={value}>{String(guests ?? 1)}</Text>
    <Text style={label}>Note</Text><Text style={value}>{note || 'None'}</Text>
  </Layout>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `RSVP: ${d.eventTitle ?? 'Event'} (${d.name ?? 'Guest'})`,
  displayName: 'RSVP (to club)',
  to: 'Reservations@WORWF.org',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', guests: 2, eventTitle: 'Sample Event' },
} satisfies TemplateEntry
