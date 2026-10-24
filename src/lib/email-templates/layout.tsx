import * as React from 'react'
import { Body, Column, Container, Head, Html, Img, Preview, Row, Section, Text } from '@react-email/components'
import { brand, container, footer, header, headerSub, headerText, main, content } from './_brand'
import logo from './logo.png.asset.json'

const LOGO_URL = `${brand.site}${logo.url}`

export const Layout = ({ preview, children }: { preview: string; children: React.ReactNode }) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{preview}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Column style={{ width: '84px', verticalAlign: 'middle' }}>
              <Img src={LOGO_URL} width="72" height="72" alt="WORWF logo" style={{ display: 'block' }} />
            </Column>
            <Column style={{ verticalAlign: 'middle', paddingLeft: '12px' }}>
              <Text style={headerText}>West Orange Republican Women Federated</Text>
              <Text style={headerSub}>West Orange County, Florida</Text>
            </Column>
          </Row>
        </Section>
        <Section style={content}>{children}</Section>
        <Section style={footer}>
          <Img src={LOGO_URL} width="40" height="40" alt="WORWF" style={{ display: 'block', marginBottom: '8px' }} />
          <Text style={{ margin: 0 }}>West Orange Republican Women Federated, West Orange County, Florida</Text>
          <Text style={{ margin: '4px 0 0' }}>Questions? Write to info@worwf.org</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)
