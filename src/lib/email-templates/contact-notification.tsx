import * as React from 'react'
import { Heading, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { h1, label, value } from './_brand'

interface Props { name?: string; email?: string; phone?: string; referral?: string; message?: string }

const Email = ({ name, email, phone, referral, message }: Props) => (
  <Layout preview={`New website message from ${name ?? 'a visitor'}`}>
    <Heading style={h1}>New contact form message</Heading>
    <Text style={label}>Name</Text><Text style={value}>{name || 'Not given'}</Text>
    <Text style={label}>Email</Text><Text style={value}>{email || 'Not given'}</Text>
    <Text style={label}>Phone</Text><Text style={value}>{phone || 'Not given'}</Text>
    <Text style={label}>Heard about us</Text><Text style={value}>{referral || 'Not given'}</Text>
    <Text style={label}>Message</Text><Text style={value}>{message || ''}</Text>
  </Layout>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Website message from ${d.name ?? 'a visitor'}`,
  displayName: 'Contact form (to club)',
  to: 'info@worwf.org',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', phone: '555-0100', referral: 'A friend', message: 'Hello!' },
} satisfies TemplateEntry
