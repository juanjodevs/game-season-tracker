import { Card, Flex } from '@radix-ui/themes'

const Disclaimer = () => (
  <Card>
    <Flex direction="column" gap="2">
      <h2 className="text-xl font-bold">About ARPG Season Tracker</h2>
      <p>
        ARPG Season Tracker is a community-driven website that helps players keep track of upcoming seasons
        and content updates for popular Action RPGs.
      </p>
      <p>
        We gather information from official game announcements, developer blogs, social media, and community
        sources to provide the most accurate and up-to-date information.
      </p>
      <p>
        This site is not affiliated with any of the games listed. All game logos, names, and content belong to
        their respective owners.
      </p>
    </Flex>
  </Card>
)

export default Disclaimer
