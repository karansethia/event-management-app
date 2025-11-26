import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface SubscriptionSucessEmailProps {
  username?: string;
  plan: string
}


export const SubscriptionSucessEmail = ({
  username, plan
}: SubscriptionSucessEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white text-[#24292e] font-github">
        <Preview>
          A fine-grained personal access token has been added to your account
        </Preview>
        <Container className="max-w-[480px] mx-auto my-0 pt-5 pb-12 px-0">
          <Img
            src="https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzt8SARiRfcEe1A70D4ns5BFhJVpfHui3NgWCqU"
            className='w-52 h-auto'
            alt="Sprout Society"
          />

          <Text className="text-[24px] leading-[1.25]">
            <strong>{username}</strong>, <br />
              You have successfully subscribed to Sprout Society's {plan} plan
          </Text>

          <Section className="p-6 border border-solid border-[#dedede] rounded-[5px] text-center">
            <Text className="mb-[10px] mt-0 text-left">
              Hey <strong>{username}</strong>!
            </Text>
            <Text className="mb-[10px] mt-0 text-left">
                Visit the link below to access all events, download tickets and check out our updates and missions
            </Text>

            <Button className="text-sm bg-[#28a745] text-white leading-normal rounded-lg py-3 px-6">
              Visit Dashboard
            </Button>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

SubscriptionSucessEmail.PreviewProps = {
  username: 'alanturing',
} as SubscriptionSucessEmailProps;

export default SubscriptionSucessEmail;
