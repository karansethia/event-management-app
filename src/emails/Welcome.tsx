import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Row,
  Column,
  Tailwind,
  Text,
  Hr,
} from '@react-email/components';
import type * as React from 'react';

export default function Welcome () {
  return (
    <Html>
      <Head />
 <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            <Section className="p-8 text-center">
            <Img src="https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt8SARiRfcEe1A70D4ns5BFhJVpfHui3NgWCqU" className='w-52 mx-auto pe-5' />
              <Text className="font-normal text-sm uppercase tracking-wider">
                Welcomes you to
              </Text>
              <Heading className="my-4 font-medium text-4xl leading-tight">
                The Agro Business Revolution
              </Heading>
              <Text className="mb-8 text-lg leading-7">
                Thank you for joining our revolution and let's make a remarkable imprint on our environment and society and promote our hard working farmers 
              </Text>
              <Link
                href="https://www.papermark.com"
                className="inline-flex items-center font-content rounded-full bg-green-500 px-12 py-3 text-center font-bold text-sm text-white no-underline"
              >
                Member dashboard
              </Link>
            </Section>

            
            <Section className="my-6 rounded-2xl bg-[#16c444]/10 bg-[radial-gradient(circle_at_bottom_right,#16c444_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 font-medium text-3xl text-yellow-600">
                Revenue generated of
              </Heading>
              <Text className="my-4 font-semibold text-6xl text-gray-900 leading-none">
                235,000,000
              </Text>
              <Text className="mb-4 font-medium text-2xl tracking-wide text-gray-900">
                by farmers after connecting with our affiliated agro businesses
              </Text>
              <Text className="text-gray-900 text-sm leading-5">
                That&apos;s a lot of engagement! You could be next!!
              </Text>

              <Hr className="mt-6" style={{ borderColor: '#16c444' }} />
              <Row className="mt-5">
                <Column className="w-1/3 text-center">
                  <Text className="font-medium text-green-700 text-sm">
                    Events
                  </Text>
                  <Text className="my-1 font-bold text-4xl text-gray-900">
                    25
                  </Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Text className="font-medium text-green-700 text-sm">
                    Members
                  </Text>
                  <Text className="my-1 font-bold text-4xl text-gray-900">
                    30
                  </Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Text className="font-medium text-green-700 text-sm">
                    States
                  </Text>
                  <Text className="my-1 font-bold text-4xl text-gray-900">
                    12
                  </Text>
                </Column>
              </Row>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


