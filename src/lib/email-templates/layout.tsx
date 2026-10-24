import * as React from 'react'
import { Body, Container, Head, Html, Preview, Section, Text } from '@react-email/components'
import { container, footer, header, headerSub, headerText, main, content } from './_brand'

export const Layout = ({ preview, children }: { preview: string; children: React.ReactNode }) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={headerText}>West Orange Republican Women Federated</Text>
          <Text style={headerSub}>West Orange County, Florida</Text>
        </Section>
        <Section style={content}>{children}</Section>
        <Section style={footer}>
          <Text style={{ margin: 0 }}>West Orange Republican Women Federated, West Orange County, Florida</Text>
          <Text style={{ margin: '4px 0 0' }}>Questions? Write to info@worwf.org</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)
