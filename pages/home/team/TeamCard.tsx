import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Divider,
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
      className="w-100 min-w-[300px] max-w-sm"
    >
      <Card.Section>
        <Image
          src={
            "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          height={250}
          alt="Norway"
          fit="fill"
          className="bg-red-500 object-center "
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Afolabi J</Text>
        <Text>CEO</Text>
      </Group>
      <Divider my="sm" />
      <Group>
        <FaFacebook />
        <AiFillTwitterCircle />
        <FaInstagramSquare />
      </Group>
    </Card>
  );
}
