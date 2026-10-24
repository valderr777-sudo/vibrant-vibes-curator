import * as React from 'react'
import { Button, Heading, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { brand, button, h1, p } from './_brand'

interface Props { name?: string; renewal?: boolean; meetingDate?: string; meetingTime?: string; meetingVenue?: string }

const Email = ({ name, renewal, meetingDate, meetingTime, meetingVenue }: Props) => (
  <Layout preview={renewal ? 'Thank you for renewing your membership' : 'Thank you for joining WORWF'}>
    <Heading style={h1}>{renewal ? 'Thank you for renewing' : 'Thank you for joining'}</Heading>
    <Text style={p}>{name ? `Dear ${name},` : 'Dear Member,'}</Text>
    <Text style={p}>
      {renewal
        ? 'We received your membership renewal and are grateful to have you with us for another year.'
        : 'We received your membership application and are so glad you are joining West Orange Republican Women Federated.'}
    </Text>
    <Text style={p}>To complete your membership, please finish your dues payment through Square if you have not already.</Text>
    {meetingDate && (
      <Section style={{ borderLeft: `4px solid ${brand.gold}`, backgroundColor: '#fff7ef', padding: '16px 20px', margin: '8px 0 24px' }}>
        <Text style={{ ...p, fontWeight: 700, color: brand.navy, margin: '0 0 6px' }}>Our next luncheon</Text>
        <Text style={{ ...p, margin: 0 }}>{meetingDate}{meetingTime ? `, ${meetingTime}` : ''}</Text>
        {meetingVenue && <Text style={{ ...p, margin: 0 }}>{meetingVenue}</Text>}
      </Section>
    )}
    <Section style={{ textAlign: 'center', margin: '8px 0 24px' }}>
      <Button href={`${brand.site}/events`} style={button}>See upcoming events</Button>
    </Section>
    <Text style={p}>With warm regards,<br />Chrissy Hayden, Membership Chair</Text>
  </Layout>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => (d.renewal ? 'Thank you for renewing your WORWF membership' : 'Thank you for joining WORWF'),
  displayName: 'Membership welcome',
  previewData: { name: 'Jane', meetingDate: 'Thursday, November 12, 2026', meetingTime: '11:30 AM', meetingVenue: 'Club venue' },
} satisfies TemplateEntry
