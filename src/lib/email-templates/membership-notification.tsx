import * as React from 'react'
import { Heading, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'
import { Layout } from './layout'
import { h1, value } from './_brand'

const Email = ({ title, lines }: { title?: string; lines?: string[] }) => (
  <Layout preview={title ?? 'New membership submission'}>
    <Heading style={h1}>{title ?? 'New membership submission'}</Heading>
    {(lines ?? []).map((l, i) => (
      <Text key={i} style={{ ...value, margin: '0 0 8px' }}>{l}</Text>
    ))}
  </Layout>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => d.title ?? 'New membership submission',
  displayName: 'Membership (to club)',
  to: 'Membership@WORWF.org',
  previewData: { title: 'WORWF Membership Application: Jane Doe', lines: ['Email: jane@example.com'] },
} satisfies TemplateEntry
