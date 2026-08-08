import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Button
} from '@react-email/components';

interface EngagementCodeEmailProps {
  tenantName: string;
  engagementCode: string;
}

export const EngagementCodeEmail = ({
  tenantName = 'Enterprise',
  engagementCode = 'CR-XXXX-XXXX',
}: EngagementCodeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your Crelligent ESRE OS Engagement Code is ready.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://client.crelligent.com/logo.png"
              width="40"
              height="40"
              alt="Crelligent"
              style={logo}
            />
            <Text style={brandName}>Crelligent</Text>
          </Section>

          {/* Animated Hero GIF Placeholder */}
          <Section style={heroSection}>
            <Img
              src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              width="520"
              height="240"
              alt="ESRE OS Initialization"
              style={heroImage}
            />
          </Section>
          
          <Heading style={h1}>Enterprise Access Provisioned</Heading>
          
          <Text style={text}>
            The Executive Command Center for <strong>{tenantName}</strong> has been initialized. 
            Your ESRE OS diagnostic and implementation portal is now ready for secure access.
          </Text>

          <Section style={codeSection}>
            <Text style={codeLabel}>ENGAGEMENT ACCESS CODE</Text>
            <Text style={codeText}>{engagementCode}</Text>
          </Section>

          <Text style={text}>
            Please use this cryptographic token to complete your onboarding and activate your dashboard. Do not share this code outside of your executive team.
          </Text>

          <Section style={buttonContainer}>
            <Button style={button} href="https://client.crelligent.com/signup">
              Activate Account
            </Button>
          </Section>
          
          <Text style={footer}>
            If you have questions, contact your Crelligent Lead Architect. <br/>
            Crelligent — The Enterprise Operating System for Africa.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EngagementCodeEmail;

const main = {
  backgroundColor: '#020202',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: '40px 0',
};

const container = {
  margin: '0 auto',
  padding: '40px',
  width: '600px',
  backgroundColor: '#0a0a0a',
  border: '1px solid #1a1a1a',
  borderRadius: '8px',
};

const header = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '40px',
};

const logo = {
  marginRight: '12px',
};

const brandName = {
  color: '#ffffff',
  fontSize: '20px',
  fontWeight: '500',
  letterSpacing: '0.05em',
  margin: '0',
};

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: '300',
  letterSpacing: '-0.02em',
  marginBottom: '24px',
};

const text = {
  color: '#888888',
  fontSize: '16px',
  lineHeight: '26px',
  fontWeight: '300',
  marginBottom: '24px',
};

const codeSection = {
  backgroundColor: '#050505',
  border: '1px solid #38BDF833',
  borderRadius: '6px',
  padding: '24px',
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const codeLabel = {
  color: '#38BDF8',
  fontSize: '12px',
  fontWeight: '600',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  margin: '0 0 12px 0',
};

const codeText = {
  color: '#ffffff',
  fontSize: '32px',
  fontWeight: '300',
  letterSpacing: '0.1em',
  margin: '0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '40px',
};

const button = {
  backgroundColor: '#ffffff',
  color: '#000000',
  fontSize: '14px',
  fontWeight: '500',
  letterSpacing: '0.05em',
  textDecoration: 'none',
  padding: '14px 28px',
  borderRadius: '4px',
  display: 'inline-block',
};

const footer = {
  color: '#444444',
  fontSize: '12px',
  lineHeight: '20px',
  textAlign: 'center' as const,
  borderTop: '1px solid #1a1a1a',
  paddingTop: '24px',
};

const heroSection = {
  marginBottom: '32px',
  borderRadius: '6px',
  overflow: 'hidden',
};

const heroImage = {
  width: '100%',
  height: 'auto',
  borderRadius: '6px',
  display: 'block',
};
