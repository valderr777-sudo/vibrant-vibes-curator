import * as React from 'react'
import { Heading, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { h1, p } from './_brand'

interface Props { name?: string; eventTitle?: string; eventDate?: string; guests?: number }

const Email = ({ name, eventTitle, eventDate, guests }: Props) => (
  <Layout preview={`Your RSVP for ${eventTitle ?? 'our event'} is received`}>
    <Heading style={h1}>Your RSVP is received</Heading>
    <Text style={p}>{name ? `Dear ${name},` : 'Hello,'}</Text>
    <Text style={p}>
      Thank you for your RSVP to {eventTitle ?? 'our event'}
      {eventDate ? ` on ${eventDate}` : ''}
      {guests && guests > 1 ? ` for ${guests} people` : ''}. We look forward to seeing you.
    </Text>
    <Text style={p}>With appreciation,<br />West Orange Republican Women Federated</Text>
  </Layout>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `RSVP received: ${d.eventTitle ?? 'WORWF event'}`,
  displayName: 'RSVP confirmation',
  previewData: { name: 'Jane', eventTitle: 'Sample Event', eventDate: 'Thursday, November 12, 2026', guests: 2 },
} satisfies TemplateEntry
