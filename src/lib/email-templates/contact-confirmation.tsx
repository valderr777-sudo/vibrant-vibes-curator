import * as React from 'react'
import { Heading, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { h1, p } from './_brand'

const Email = ({ name }: { name?: string }) => (
  <Layout preview="We received your message">
    <Heading style={h1}>Thank you for reaching out</Heading>
    <Text style={p}>{name ? `Dear ${name},` : 'Hello,'}</Text>
    <Text style={p}>We received your message and a member of our team will reply as soon as possible.</Text>
    <Text style={p}>With appreciation,<br />West Orange Republican Women Federated</Text>
  </Layout>
)

export const template = {
  component: Email,
  subject: 'We received your message',
  displayName: 'Contact form confirmation',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry
