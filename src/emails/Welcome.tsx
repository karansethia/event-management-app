import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import type * as React from 'react';

export default function Welcome () {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: '#2250f4',
                offwhite: '#fafbfb',
              },
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Preview>Sprout Society Welcome</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src="https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt8SARiRfcEe1A70D4ns5BFhJVpfHui3NgWCqU"
            width="184"
            height="75"
            alt="Netlify"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8">
              Welcome to Society
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Thank you for joining the Agriculture revolution
                </Text>

                <Text className="text-base">Here's how to get started:</Text>
              </Row>
            </Section>
            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Check Upcoming events
              </Button>
            </Section>

          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="px-20 text-right">
                  <Link>Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link>Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              Sprout Society
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


