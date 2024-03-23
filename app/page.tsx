"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  rem,
} from "@mantine/core";
import classes from "./home.module.css";
import ChevronIcon from "./(component)/icon/chevron";
import IconLogo from "./(component)/icon/logo";
import { useViewportSize } from "@mantine/hooks";
const data = [
  {
    picture: "/illustration/1.png",
    title: "MO231 - Pomeranian",
    color: "White",
    gender: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    picture: "/illustration/2.png",
    title: "MO502 - Poodle Tiny",
    color: "Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
  },
  {
    picture: "/illustration/3.png",
    title: "MO102 - Podle Tiny",
    color: "Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
  },
  {
    picture: "/illustration/4.png",
    title: "MO512 - Alskan",
    color: "Malamute Grey",
    gender: "Male",
    age: "03 months",
    price: "8.900.000 VND",
  },
  {
    picture: "/illustration/5.png",
    title: "MO231 - Pembroke",
    color: "Corgi Cream",
    gender: "Male",
    age: "03 months",
    price: "7.900.000 VND",
  },
  {
    picture: "/illustration/6.png",
    title: "MO502 - Pembroke",
    color: "Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    picture: "/illustration/7.png",
    title: "MO102 - Pomeranian",
    color: "Grey",
    gender: "Female",
    age: "02 months",
    price: "6.500.000 VND",
  },
  {
    picture: "/illustration/8.png",
    title: "MO512 - Poodle Tiny",
    color: "Dairy Cow",
    gender: "Male",
    age: "03 months",
    price: "5.000.000 VND",
  },
];

const desc = [
  {
    picture: "/illustration/d-1.png",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    tag: "Pet knowledge",
    desc: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    picture: "/illustration/d-2.png",
    title: "Dog Diet You Need To Know",
    tag: "Pet knowledge",
    desc: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    picture: "/illustration/d-3.png",
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    tag: "Pet knowledge",
    desc: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];

const product = [
  {
    picture: "/illustration/p-1.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    type: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    picture: "/illustration/p-2.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    type: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    picture: "/illustration/p-3.png",
    title: "Cat scratching ball toy kitten sisal rope ball",
    type: "Toy",
    size: null,
    price: "1.100.000 VND",
    free: "Free Cat Food",
  },
  {
    picture: "/illustration/p-4.png",
    title: "Cute Pet Cat Warm Nest",
    type: "Toy",
    size: null,
    price: "410.000 VND",
    free: "Free Cat Food",
  },
  {
    picture: "/illustration/p-5.png",
    title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    type: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    picture: "/illustration/p-6.png",
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    type: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    free: "Free Toy & Free Shaker",
  },
  {
    picture: "/illustration/p-7.png",
    title: "Costumes Chicken Drumsti ck Headband",
    type: "Costume",
    size: null,
    price: "400.000 VND",
    free: "Free Cat Food",
  },
  {
    picture: "/illustration/p-8.png",
    title: "Plush Pet Toy",
    type: "Toy",
    size: null,
    price: "250.000 VND",
    free: "Free Food & Shaker",
  },
];

const sellers = [
  {
    img: "/icon/sheba.png",
    w: 88,
    h: 64,
  },
  {
    img: "/icon/whiskas.png",
    w: 114,
    h: 114,
  },
  {
    img: "/icon/bakers.png",
    w: 104,
    h: 46,
  },
  {
    img: "/icon/felix.png",
    w: 92,
    h: 64,
  },
  {
    img: "/icon/goodBoy.png",
    w: 92,
    h: 92,
  },
  {
    img: "/icon/butchers.png",
    w: 130,
    h: 56,
  },
  {
    img: "/icon/pedigree.png",
    w: 116,
    h: 72,
  },
];

export default function HomePage() {
  const { width } = useViewportSize();
  const rows = data.map((item, index) => (
    <Card key={index} radius={"md"} bg={"white"} p={8} shadow="md">
      <Image
        src={item.picture}
        height={"auto"}
        width={"100%"}
        alt={item.picture}
        radius={15}
      />

      <Text fz={rem(14)} fw={700} mt={10}>
        {item.title}
      </Text>
      <Text fz={rem(14)} fw={700}>
        {item.color}
      </Text>
      <Text fz={rem(12)} fw={500} c="dimmed">
        Gene: {item.gender}
      </Text>
      <Text fz={rem(12)} fw={500} c="dimmed">
        Age: {item.age}
      </Text>

      <Text fz={rem(16)} fw={700} mt={10}>
        {item.price}
      </Text>
    </Card>
  ));

  const rowsDesc = desc.map((item, index) => (
    <Card key={index} radius={"md"} bg={"white"} p={8} shadow="md">
      <Image
        src={item.picture}
        height={"auto"}
        width={"100%"}
        alt={item.picture}
        radius={15}
      />

      <Badge mx={10} mt={10} color="rgba(0, 167, 231, 1)" radius={"xl"}>
        {item.tag}
      </Badge>

      <Text px={10} fz={rem(16)} fw={700} mt={10}>
        {item.title}
      </Text>
      <Text px={10} mb={10} fz={rem(14)} fw={500} lineClamp={3}>
        {item.desc}
      </Text>
    </Card>
  ));

  const rowsProduct = product.map((item, index) => (
    <Card key={index} radius={"md"} bg={"white"} p={8} shadow="md" maw={275}>
      <Image
        src={item.picture}
        height={"auto"}
        width={"100%"}
        alt={item.picture}
        radius={15}
      />

      <Text fz={rem(16)} fw={700} mt={10}>
        {item.title}
      </Text>
      <Text fz={rem(12)} fw={500} c="dimmed">
        Product: {item.type}
        {item?.size ? ` . Size: ${item.size}` : ""}
      </Text>

      <Text fz={rem(14)} fw={700}>
        {item.price}
      </Text>

      <Badge
        mt={10}
        radius={"md"}
        h={34}
        color="rgba(252, 238, 213, 1)"
        leftSection={
          <Image
            src={"/icon/free.png"}
            width={17.46}
            height={20}
            alt="free-icon"
          />
        }
        fullWidth
        c={"black"}
      >
        {item.free}
      </Badge>
    </Card>
  ));

  const rowsSeller = sellers.map((item, index) => (
    <Box
      w={151.43}
      h={112}
      maw={151.43}
      mah={112}
      display={"flex"}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image
        src={item.img}
        alt={item.img}
        width={item.w}
        height={item.h}
        fit={"contain"}
      />
    </Box>
  ));
  return (
    <section style={{ background: "white" }}>
      <Card
        style={{
          background:
            "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%); !important",
          borderRadius: "0px 0px 25px 25px",
        }}
        my={30}
        hiddenFrom="lg"
        pos={"relative"}
        px={30}
      >
        <Title
          fz={{ sm: rem(46), lg: rem(60) }}
          fw={800}
          c={"rgba(0, 42, 72, 1)"}
          mt={25}
        >
          One More Friend
        </Title>
        <Title
          fz={{ sm: rem(28), lg: rem(46) }}
          fw={700}
          c={"rgba(0, 42, 72, 1)"}
        >
          Thousands more fun!
        </Title>
        <Text
          fz={{ sm: rem(12), lg: rem(16) }}
          fw={500}
          c={"rgba(0, 42, 72, 1)"}
          mt={15}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </Text>

        <Group my={35}>
          <Button
            rightSection={
              <Image
                src={"/icon/IconPlay.png"}
                width={24}
                height={24}
                alt="icon-play"
              />
            }
            color="rgba(0, 52, 89, 1)"
            c="rgba(0, 52, 89, 1)"
            radius={57}
            variant="outline"
            w={181}
            h={58}
            fz={rem(18)}
            fw={500}
            maw={181}
            mah={58}
          >
            View Intro
          </Button>
          <Button
            w={181}
            h={58}
            fz={rem(18)}
            fw={500}
            maw={181}
            mah={58}
            radius={57}
            color="rgba(0, 52, 89, 1)"
          >
            Explore Now
          </Button>
        </Group>
        <Group justify="center" pos={"relative"} hiddenFrom="lg">
          <div className={classes.boxRectangle2}>
            <div className={classes.rectangle2}></div>
          </div>
          <div className={classes.boxRectangle1}>
            <div className={classes.rectangle1}></div>
          </div>

          <Image
            src={"/illustration/good-humored-woman.png"}
            width={414}
            height={386}
            mb={-16}
            alt="good-humored-woman.png"
            style={{ zIndex: 1 }}
          />
        </Group>
      </Card>
      <Box
        style={{
          background:
            "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%); !important",
          borderRadius: "0px 0px 25px 25px",
          padding: 0,
        }}
        visibleFrom="lg"
      >
        <Card
          my={30}
          bg={"rgba(255,255,255,0)"}
          style={{ zIndex: 10 }}
          pos={"relative"}
          h={610}
          maw={1180}
          mx={"auto"}
        >
          <Box w={"100%"} maw={1180} mx={"auto"} style={{ zIndex: 99 }}>
            <Box maw={500} pos={"relative"}>
              <Title
                fz={{ sm: rem(46), lg: rem(60) }}
                fw={800}
                c={"rgba(0, 42, 72, 1)"}
                mt={25}
              >
                One More Friend
              </Title>
              <Title
                fz={{ sm: rem(28), lg: rem(46) }}
                fw={700}
                c={"rgba(0, 42, 72, 1)"}
              >
                Thousands more fun!
              </Title>
              <Text
                fz={{ sm: rem(12), lg: rem(16) }}
                fw={500}
                c={"rgba(0, 42, 72, 1)"}
                mt={15}
              >
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </Text>

              <Group my={35}>
                <Button
                  rightSection={
                    <Image
                      src={"/icon/IconPlay.png"}
                      width={24}
                      height={24}
                      alt="icon-play"
                    />
                  }
                  color="rgba(0, 52, 89, 1)"
                  c="rgba(0, 52, 89, 1)"
                  radius={57}
                  variant="outline"
                  w={181}
                  h={58}
                  fz={rem(18)}
                  fw={500}
                  maw={181}
                  mah={58}
                >
                  View Intro
                </Button>
                <Button
                  w={181}
                  h={58}
                  fz={rem(18)}
                  fw={500}
                  maw={181}
                  mah={58}
                  radius={57}
                  color="rgba(0, 52, 89, 1)"
                >
                  Explore Now
                </Button>
              </Group>
            </Box>
          </Box>

          <Box className={classes.boxRectangle2}>
            <div className={classes.rectangle2}></div>
          </Box>
          <Box className={classes.boxRectangle1}>
            <div className={classes.rectangle1}></div>
          </Box>

          <Box pos={"absolute"} top={0} right={35}>
            <Image
              src={"/illustration/good-humored-woman.png"}
              width={994}
              height={693}
              mb={-16}
              alt="good-humored-woman.png"
              style={{ zIndex: 1 }}
            />
          </Box>
        </Card>
      </Box>
      <section style={{ paddingLeft: 30, paddingRight: 30 }}>
        <Box w={"100%"} maw={1180} mx={"auto"} my={30}>
          <Group justify={"space-between"} mb={20}>
            <Stack gap={0}>
              <Text fz={rem(14)} fw={500}>
                Whats New?
              </Text>
              <Text fz={rem(20)} c="rgba(0, 52, 89, 1)" fw={700}>
                Take A Look At Some Of Our Pets
              </Text>
            </Stack>
            <Button
              rightSection={
                <ThemeIcon variant="transparent" size={12}>
                  <ChevronIcon
                    width={12}
                    height={12}
                    style={{ padding: 0, marginBottom: -6 }}
                  />
                </ThemeIcon>
              }
              color="rgba(0, 52, 89, 1)"
              c="rgba(0, 52, 89, 1)"
              radius={57}
              variant="outline"
              size="md"
              mt={15}
              visibleFrom="lg"
            >
              View More
            </Button>
          </Group>
          <SimpleGrid
            cols={{ base: 2, lg: 4 }}
            verticalSpacing={10}
            spacing={10}
          >
            {rows}
          </SimpleGrid>
          <Button
            rightSection={
              <ThemeIcon variant="transparent" size={12}>
                <ChevronIcon
                  width={12}
                  height={12}
                  style={{ padding: 0, marginBottom: -6 }}
                />
              </ThemeIcon>
            }
            color="rgba(0, 52, 89, 1)"
            c="rgba(0, 52, 89, 1)"
            radius={57}
            variant="outline"
            size="lg"
            fullWidth
            mt={15}
            hiddenFrom="lg"
          >
            View More
          </Button>
        </Box>

        <Card
          my={20}
          mt={35}
          radius={"xl"}
          p={15}
          bg={"rgba(0, 52, 89, 1)"}
          w={"100%"}
          maw={1180}
          mx={"auto"}
          pos={"relative"}
        >
          <Grid style={{ zIndex: 1 }}>
            <Grid.Col span={{ sm: 12, lg: 6 }} order={{ sm: 1, lg: 2 }}>
              <Box w={"79%"} ml={"auto"} mr={50}>
                <Text
                  fz={36}
                  fw={800}
                  c={"rgba(0, 42, 72, 1)"}
                  ta={{ base: "center", lg: "right" }}
                  style={{ zIndex: 2 }}
                  mt={width > 1200 ? 40 : 0}
                >
                  One More Friend
                </Text>
                <Text
                  fz={24}
                  fw={700}
                  c={"rgba(0, 42, 72, 1)"}
                  ta={{ base: "center", lg: "right" }}
                  mt={-2}
                  style={{ zIndex: 2 }}
                >
                  Thousands More Fun!
                </Text>
                <Text
                  fz={12}
                  fw={700}
                  c={"rgba(0, 42, 72, 1)"}
                  ta={{ base: "center", lg: "right" }}
                  mt={10}
                  style={{ zIndex: 2 }}
                >
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </Text>
                <Group
                  my={35}
                  justify={width > 1200 ? "flex-end" : "center"}
                  style={{ zIndex: 2 }}
                >
                  <Button
                    rightSection={
                      <Image
                        src={"/icon/IconPlay.png"}
                        width={24}
                        height={24}
                        alt="icon-play"
                      />
                    }
                    color="rgba(0, 52, 89, 1)"
                    c="rgba(0, 52, 89, 1)"
                    radius={57}
                    variant="outline"
                    size="md"
                  >
                    View Intro
                  </Button>
                  <Button size="md" radius={57} color="rgba(0, 52, 89, 1)">
                    Explore Now
                  </Button>
                </Group>
              </Box>
            </Grid.Col>
            <Grid.Col
              span={{ sm: 12, lg: 6 }}
              order={{ sm: 2, lg: 1 }}
              pos={"relative"}
            >
              <Image
                src={"/illustration/horizontal-shot-adult-girl.png"}
                width={414}
                height={386}
                maw={414}
                mah={386}
                mb={-14}
                mx={"auto"}
                alt="good-humored-woman.png"
                style={{ zIndex: 1 }}
              />
            </Grid.Col>
          </Grid>
          <div className={classes.rectangle4}></div>
          <div className={classes.rectangle5}></div>
        </Card>

        <Box w={"100%"} maw={1180} mx={"auto"} my={30} visibleFrom="lg">
          <Group justify={"space-between"} mb={20}>
            <Stack gap={0}>
              <Text fz={rem(14)} fw={500}>
                Hard to choose right products for your pets?
              </Text>
              <Text fz={rem(20)} c="rgba(0, 52, 89, 1)" fw={700}>
                Our Products
              </Text>
            </Stack>
            <Button
              rightSection={
                <ThemeIcon variant="transparent" size={12}>
                  <ChevronIcon
                    width={12}
                    height={12}
                    style={{ padding: 0, marginBottom: -6 }}
                  />
                </ThemeIcon>
              }
              color="rgba(0, 52, 89, 1)"
              c="rgba(0, 52, 89, 1)"
              radius={57}
              variant="outline"
              size="md"
              mt={15}
              visibleFrom="lg"
            >
              View More
            </Button>
          </Group>
          <SimpleGrid
            cols={{ base: 2, lg: 4 }}
            verticalSpacing={10}
            spacing={10}
          >
            {rowsProduct}
          </SimpleGrid>
          <Button
            rightSection={
              <ThemeIcon variant="transparent" size={12}>
                <ChevronIcon
                  width={12}
                  height={12}
                  style={{ padding: 0, marginBottom: -6 }}
                />
              </ThemeIcon>
            }
            color="rgba(0, 52, 89, 1)"
            c="rgba(0, 52, 89, 1)"
            radius={57}
            variant="outline"
            size="lg"
            fullWidth
            mt={15}
            hiddenFrom="lg"
          >
            View More
          </Button>
        </Box>

        <Box w={"100%"} maw={1180} mx={"auto"} my={30} visibleFrom="lg">
          <Group justify={"space-between"} mb={20}>
            <Group gap={6} align={"end"}>
              <Text fz={rem(14)} fw={500} mb={3}>
                Proud to be part of
              </Text>
              <Text fz={rem(20)} c="rgba(0, 52, 89, 1)" fw={700}>
                Pet Sellers
              </Text>
            </Group>
            <Button
              rightSection={
                <ThemeIcon variant="transparent" size={12}>
                  <ChevronIcon
                    width={12}
                    height={12}
                    style={{ padding: 0, marginBottom: -6 }}
                  />
                </ThemeIcon>
              }
              color="rgba(0, 52, 89, 1)"
              c="rgba(0, 52, 89, 1)"
              radius={57}
              variant="outline"
              size="md"
              mt={15}
              visibleFrom="lg"
            >
              View all our sellers
            </Button>
          </Group>
          <SimpleGrid
            cols={{ base: 2, lg: 7 }}
            verticalSpacing={10}
            spacing={10}
          >
            {rowsSeller}
          </SimpleGrid>
          <Button
            rightSection={
              <ThemeIcon variant="transparent" size={12}>
                <ChevronIcon
                  width={12}
                  height={12}
                  style={{ padding: 0, marginBottom: -6 }}
                />
              </ThemeIcon>
            }
            color="rgba(0, 52, 89, 1)"
            c="rgba(0, 52, 89, 1)"
            radius={57}
            variant="outline"
            size="lg"
            fullWidth
            mt={15}
            hiddenFrom="lg"
          >
            View More
          </Button>
        </Box>

        <Card
          my={20}
          mt={35}
          radius={"xl"}
          p={15}
          bg={"rgba(255, 183, 117, 1)"}
          w={"100%"}
          maw={1180}
          mx={"auto"}
          pos={"relative"}
          visibleFrom="lg"
        >
          <Grid style={{ zIndex: 1 }}>
            <Grid.Col span={{ sm: 12, lg: 6 }}>
              <Box w={"79%"} ml={"auto"} mr={50}>
                <Group>
                  <Text
                    fz={52}
                    fw={800}
                    c={"rgba(0, 52, 89, 1)"}
                    style={{ zIndex: 2 }}
                    mt={40}
                  >
                    Adoption
                  </Text>
                  <Image
                    src={"/icon/paw.png"}
                    width={42}
                    height={38}
                    alt="paw-icon"
                    mb={-42}
                  />
                </Group>
                <Text
                  fz={36}
                  fw={700}
                  c={"rgba(0, 52, 89, 1)"}
                  mt={-2}
                  style={{ zIndex: 2 }}
                >
                  We need help. so do they.
                </Text>
                <Text
                  fz={12}
                  fw={700}
                  c={"rgba(36, 43, 51, 1)"}
                  mt={10}
                  w={250}
                  style={{ zIndex: 2 }}
                >
                  Adopt a pet and give it a home, it will be love you back
                  unconditionally.
                </Text>
                <Group my={35} style={{ zIndex: 2 }}>
                  <Button size="md" radius={57} color="rgba(0, 52, 89, 1)">
                    Explore Now
                  </Button>
                  <Button
                    rightSection={
                      <Image
                        src={"/icon/IconPlay.png"}
                        width={24}
                        height={24}
                        alt="icon-play"
                      />
                    }
                    color="rgba(0, 52, 89, 1)"
                    c="rgba(0, 52, 89, 1)"
                    radius={57}
                    variant="outline"
                    size="md"
                  >
                    View Intro
                  </Button>
                </Group>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ sm: 12, lg: 6 }} pos={"relative"}>
              <Image
                src={"/illustration/handshake.png"}
                width={414}
                height={386}
                maw={414}
                mah={386}
                my={-14}
                mx={"auto"}
                alt="good-humored-woman.png"
                style={{ zIndex: 1 }}
              />
            </Grid.Col>
          </Grid>
          <div className={classes.rectangle7}></div>
          <div className={classes.rectangle6}></div>
        </Card>

        <Box w={"100%"} maw={1180} mx={"auto"}>
          <Group justify={"space-between"}>
            <Stack gap={0}>
              <Text mt={30} fz={rem(14)} fw={500}>
                You already know ?
              </Text>
              <Text mb={15} fz={rem(20)} fw={700} c={"rgba(0, 52, 89, 1)"}>
                Useful Pet Knowledge
              </Text>
            </Stack>
            <Button
              rightSection={
                <ThemeIcon variant="transparent" size={12}>
                  <ChevronIcon
                    width={12}
                    height={12}
                    style={{ padding: 0, marginBottom: -6 }}
                  />
                </ThemeIcon>
              }
              color="rgba(0, 52, 89, 1)"
              c="rgba(0, 52, 89, 1)"
              radius={57}
              variant="outline"
              size="md"
              mt={15}
              visibleFrom="lg"
            >
              View More
            </Button>
          </Group>
          <SimpleGrid
            cols={{ base: 1, md: 1, lg: 3 }}
            verticalSpacing={10}
            spacing={10}
          >
            {rowsDesc}
          </SimpleGrid>
          <Button
            rightSection={
              <ThemeIcon variant="transparent" size={12}>
                <ChevronIcon
                  width={12}
                  height={12}
                  style={{ padding: 0, marginBottom: -6 }}
                />
              </ThemeIcon>
            }
            color="rgba(0, 52, 89, 1)"
            c="rgba(0, 52, 89, 1)"
            radius={57}
            variant="outline"
            size="lg"
            fullWidth
            mt={15}
            hiddenFrom="lg"
          >
            View More
          </Button>
        </Box>
      </section>
      <footer>
        <Card
          mt={30}
          style={{
            background:
              "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%); !important",
            borderRadius: "20px 20px 0px 0px",
            padding: 0,
          }}
          p={30}
        >
          <Group justify={"center"}>
            <Card radius={"lg"} bg={"rgba(0, 52, 89, 1)"} w={"100%"} maw={1180}>
              <Grid>
                <Grid.Col span={{ sm: 12, md: 12, lg: 3.5 }}>
                  <Text fz={rem(20)} fw={700} c={"white"}>
                    Register now so you don't miss our programs
                  </Text>
                </Grid.Col>
                <Grid.Col span={{ sm: 12, md: 12, lg: 8.5 }}>
                  <Card radius={"lg"} bg={"white"}>
                    <Grid>
                      <Grid.Col span={{ sm: 12, md: 12, lg: 9 }}>
                        <TextInput
                          size="md"
                          placeholder="Enter your Email"
                          radius={10}
                        />
                      </Grid.Col>
                      <Grid.Col span={{ sm: 12, md: 12, lg: 3 }}>
                        <Button
                          size="md"
                          color="rgba(0, 52, 89, 1)"
                          radius={10}
                          fullWidth
                        >
                          Subcribe Now
                        </Button>
                      </Grid.Col>
                    </Grid>
                  </Card>
                </Grid.Col>
              </Grid>
            </Card>
          </Group>

          <SimpleGrid
            cols={{ sm: 1, md: 1, lg: 2 }}
            px={10}
            w={"100%"}
            maw={1180}
            mx={"auto"}
          >
            <Group
              justify={width > 1200 ? "flex-start" : "space-around"}
              gap={width > 1200 ? 50 : 0}
              mt={30}
            >
              <Text fz={rem(16)} c={"rgba(0, 23, 31, 1)"} fw={500}>
                Home
              </Text>
              <Text fz={rem(16)} c={"rgba(0, 23, 31, 1)"} fw={500}>
                Category
              </Text>
              <Text fz={rem(16)} c={"rgba(0, 23, 31, 1)"} fw={500}>
                About
              </Text>
              <Text fz={rem(16)} c={"rgba(0, 23, 31, 1)"} fw={500}>
                Contact
              </Text>
            </Group>
            <Group
              justify={width > 1200 ? "flex-end" : "center"}
              gap={width > 1200 ? 50 : 40}
              mt={10}
            >
              <Image
                src={"/icon/fb.png"}
                width={20}
                height={20}
                alt="fb-icon"
              />
              <Image
                src={"/icon/twitter.png"}
                width={20}
                height={20}
                alt="fb-icon"
              />
              <Image
                src={"/icon/ig.png"}
                width={20}
                height={20}
                alt="fb-icon"
              />
              <Image
                src={"/icon/yt.png"}
                width={20}
                height={20}
                alt="fb-icon"
              />
            </Group>
          </SimpleGrid>

          {width > 1200 ? (
            <>
              <Divider w={"100%"} maw={1180} mx={"auto"} mt={40} size={1} />
              <Group
                justify={"space-between"}
                w={"100%"}
                maw={1180}
                mx={"auto"}
                mt={40}
                align={"center"}
              >
                <Text ta={"center"} fz={rem(10)} c="dimmed">
                  © 2022 Monito. All rights reserved.
                </Text>
                <Image
                  src={"/illustration/logo.png"}
                  width={115}
                  height={40}
                  alt="logo-icon"
                />
                <Group justify={"center"}>
                  <Text fz={rem(12)} c="dimmed">
                    Terms of Service
                  </Text>
                  <Text fz={rem(12)} c="dimmed">
                    Privacy Policy
                  </Text>
                </Group>
              </Group>
            </>
          ) : (
            <>
              <Group justify={"center"} mt={40}>
                <Image
                  src={"/illustration/logo.png"}
                  width={115}
                  height={40}
                  alt="logo-icon"
                />
              </Group>

              <Group justify={"center"} mt={30}>
                <Text fz={rem(12)} c="dimmed">
                  Terms of Service
                </Text>
                <Text fz={rem(12)} c="dimmed">
                  Privacy Policy
                </Text>
              </Group>
              <Text ta={"center"} fz={rem(10)} c="dimmed" mt={4}>
                © 2022 Monito. All rights reserved.
              </Text>
            </>
          )}
        </Card>
      </footer>
    </section>
  );
}
