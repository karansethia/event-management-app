import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface LinearLoginCodeEmailProps {
  token: string;
}

export const MemberLoginEmail = ({
  token,
}: LinearLoginCodeEmailProps) => (
  <Html>
    <Head />
  <Tailwind
      config={{
        presets: [pixelBasedPreset],
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Body className="bg-white font-linear">
        <Preview>Your login link for Sprout Society</Preview>
        <Container className="mx-auto my-0 max-w-[560px] px-0 pt-5 pb-12">
          <Img
            src='https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt8SARiRfcEe1A70D4ns5BFhJVpfHui3NgWCqU'
            alt="Sprout Society"
            className="w-[62px] h-auto"
          />
          <Heading className="text-[24px] tracking-[-0.5px] leading-[1.3] font-normal text-[#484848] pt-[17px] px-0 pb-0">
            Your login code for Sprout Society
          </Heading>
          <Section className="py-[27px] px-0">
            <Button
              className="bg-[#5e6ad2] rounded font-semibold text-white text-[15px] no-underline text-center block py-[11px] px-[23px]"
              href={ `https://localhost:3000/member-login?token=${token}` }
            >
              Login
            </Button>
          </Section>
          <Text className="mb-[15px] mx-0 mt-0 leading-[1.4] text-[15px] text-[#3c4149]">
            This link and code will only be valid for the next 5 minutes. If the
            link does not work, you can use the login verification code
            directly:
          </Text>
          <Hr className="border-[#dfe1e4] mt-[42px] mb-[26px]" />
          <Link
            href="https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt8SARiRfcEe1A70D4ns5BFhJVpfHui3NgWCqU"
            className="text-[#b4becc] text-[14px]"
          >
            Linear
          </Link>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

MemberLoginEmail.PreviewProps = {
  token: '1234',
} as LinearLoginCodeEmailProps;

export default MemberLoginEmail;
