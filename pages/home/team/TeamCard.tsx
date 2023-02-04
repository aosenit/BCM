import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Divider,
  Anchor,
} from "@mantine/core";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function TeamCard() {
  return (
    <Card
      shadow="sm"
      p="lg"
      withBorder
      radius={0}
      className="w-100 min-w-[300px] max-w-sm "
    >
      <Card.Section className="p-6">
        <Image
          src={
            "https://scontent-los2-1.xx.fbcdn.net/v/t1.18169-9/15822938_1127557950676124_1548726358673060361_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE8N93cYA0UKM35g5TuSFIR25lb1ex_tpXbmVvV7H-2ld8PP4zZyLWvLa1-RuOHwK0yUE6jVhYa_1QtkAVEuFCp&_nc_ohc=Xytl4PB7szwAX_4_EA0&_nc_ht=scontent-los2-1.xx&oh=00_AfBaBBjecp6brcv7zJJ6q3MaeJ1sRgM617jCdGRSf6AUHQ&oe=64061199"
          }
          height={250}
          alt="Norway"
          fit="contain"
          className="bg-white object-center "
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Ayo Ashafa</Text>
        <Text className="text-bold">CEO</Text>
      </Group>
      <Divider my="sm" />
      <Group>
        <Anchor href="https://www.facebook.com/ayodeji.ashafa">
          <FaFacebook />
        </Anchor>
        <Anchor href="http://instagram.com/mercibrandiconcept">
          <AiFillTwitterCircle />
        </Anchor>
        <Anchor href="https://twitter.com/Mercibrandi">
          <FaInstagramSquare />
        </Anchor>
      </Group>
    </Card>
  );
}
