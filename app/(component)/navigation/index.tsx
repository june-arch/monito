"use client";

import {
  AppShell,
  Burger,
  Button,
  Group,
  Image,
  Select,
  TextInput,
  rem,
} from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import IconLogo from "../icon/logo";
import IconSearch from "../icon/search";
import classes from "./navigation.module.css";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const links = [
  { link: "/home", label: "Home" },
  { link: "/category", label: "Category" },
  { link: "/about", label: "About" },
  { link: "/contact", label: "Contact" },
];

export default function Navigation({ children }: any) {
  const [opened, { toggle }] = useDisclosure();
  const [selected, setSelected] = useState("VN");
  const [scroll, scrollTo] = useWindowScroll();
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell
      header={{ height: 57 }}
      style={{
        background: "rbga(255,255,255,0)",
      }}
    >
      <AppShell.Header
        withBorder={false}
        bg={scroll.y > 40 ? "#fceed5" : "rgba(255,255,255,0)"}
        style={{ transition: "all 0.4s ease-in-out" }}
        h={100}
      >
        <Group
          justify={"center"}
          h={100}
          align={"center"}
          visibleFrom="lg"
          w={"100%"}
          maw={1180}
          mx={"auto"}
        >
          <IconLogo width={92} height={32} />
          <Group ml={50} gap={40} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <TextInput
            placeholder="Search"
            leftSection={
              <Image
                src="/icon/search.png"
                width={16}
                height={16}
                alt="icon-search"
              />
            }
            radius={"lg"}
            styles={{ input: { border: "none" }, wrapper: { border: "none" } }}
          />
          <Button color="rgba(0, 52, 89, 1)" radius={"lg"}>
            Join the community
          </Button>
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => setSelected(code)}
            countries={["US", "VN", "ID", "PH"]}
            customLabels={{
              US: "USD",
              VN: "VND",
              ID: "IDR",
              PH: "USD",
            }}
            className={classes.selectRegion}
          />
        </Group>
        <Group
          justify={"space-between"}
          align={"center"}
          className={classes.header}
          bg={"rgba(255,255,255,0)"}
          hiddenFrom="lg"
          px={30}
          h={100}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            w={rem(32)}
            h={rem(32)}
            p={4}
          />
          <IconLogo width={92} height={32} />
          <IconSearch width={23} height={23} />
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
