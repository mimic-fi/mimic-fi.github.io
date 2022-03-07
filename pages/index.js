import { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Link,
  Text,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SimpleGrid,
  Icon,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Router from "next/router";

export default function Home() {
  const [network, setNetwork] = useState("polygon");
  const [address, setAddress] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const URL_POLYGON = "http://polygon.mimic.fi/";
  const URL_ETHEREUM = "http://mainnet.mimic.fi/";

  const changeNetwork = (value) => {
    console.log("Changing network ", value);
    setNetwork(value);
  };

  const getURL = () => {
    return network === "polygon" ? URL_POLYGON : URL_ETHEREUM;
  };

  const redirectPortfolio = async (event = null) => {
    event?.preventDefault();
    setIsLoading(true);
    const addr = event?.target.address.value ?? null;
    console.log("redirectPortfolio ", addr);
    const url = "";

    if (addr) {
      url = `${getURL()}/manage/${addr}`;
    } else {
      url = `${getURL()}/manage`;
    }

    Router.push(url);
  };

  const CallToAction = () => {
    return (
      <form onSubmit={redirectPortfolio}>
        <Flex justify="center" mt="12" flexWrap="wrap" align="flex-end">
          <Input
            w="400px"
            mx="6"
            mt="0"
            variant="flushed"
            id="address"
            name="address"
            placeholder={`Add Portfolio Address${
              network === "ethereum" ? " / ENS" : ""
            } or Your Wallet`}
            size="lg"
            _placeholder={{ color: "white" }}
          />
          <Button
            isLoading={isLoading}
            type="submit"
            variant="solid"
            size="lg"
            rounded="0"
            mt="6"
          >
            Manage with mimic
          </Button>
        </Flex>
      </form>
    );
  };

  return (
    <>
      <Box w="full" className={styles.hero}>
        <Flex justify="space-between" align="center" p={[0, 6, 8]} w="full">
          <Image src="/mimic.svg" alt="Mimic Logo" width={150} height={70} />
          <Flex>
            <Box w="170px">
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      rounded="0"
                      w="full"
                      bg="0"
                      border="1px solid white"
                      color="white"
                    >
                      {isOpen ? (
                        "Select network"
                      ) : network === "polygon" ? (
                        <Polygon />
                      ) : (
                        <Ethereum />
                      )}
                    </MenuButton>
                    <MenuList rounded="0" w="full">
                      <MenuItem onClick={() => changeNetwork("polygon")}>
                        <Polygon />
                      </MenuItem>
                      <MenuItem>
                        <Ethereum />
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
            <Link
              px="4"
              fontSize="1.5rem"
              color="white"
              onClick={() => redirectPortfolio()}
            >
              App
            </Link>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          justify="space-around"
          h="full"
          pb="250px"
          pt={{ base: "200px", lg: "70px" }}
        >
          <Flex align="center" w="full" flexWrap="wrap" justify="center" >
            <Box className={styles.mainTitle}>
              Managing 3rd-party
              <span color="#1F122B" className={styles.mainTitle__black}>
                treasures
              </span>
            </Box>
          </Flex>
          <Flex align="center" w="full" flexWrap="wrap" justify="center" >
          <Box className={styles.mainTitle}>
              made simple and 
              <span color="#1F122B" className={styles.mainTitle__black}>secure</span>
            </Box>
          </Flex>
          <CallToAction />
        </Flex>
      </Box>
      <Flex
        w="full"
        h={{ sm: "450px", md: "550px" }}
        position="relative"
        direction="column"
      >
        <Box w="full" h="50%" bg="#C172FF"></Box>
        <Box w="full" h="50%"></Box>
        <Flex
          width="full"
          className={styles.image}
          position="absolute"
          justify="center"
          w="full"
          px={{ sm: 0, md: "20%" }}
        >
          <Image
            src="/screen.png"
            alt="Mimic Logo"
            objectFit="contain"
            width={2465}
            height={1304}
          />
        </Flex>
      </Flex>
      <Flex pb="24" direction="column">
        <Text
          px="16"
          pt={{ base: "220px", sm: "0px", md: "20", lg: 20 }}
          pb="24"
          fontSize="2rem"
          align="center"
        >
          Mimic is your one-stop DeFi platform to manage treasures of:
          <Flex justify="space-around" w="full" flexWrap={"wrap"}>
            <Text px="4" align="center" fontWeight={"black"}>DAOs</Text>
            <Text px="4" align="center" fontWeight={"black"}>Institutional clients</Text>
            <Text px="4" align="center" fontWeight={"black"}>Friends & family</Text>
          </Flex>
        </Text>
      </Flex>
<Flex pb="24">
        <SimpleGrid columns={{ sm: 2, md: 3 }} borderTop="1px solid #bbbbbb">
          <BoxFeature
            number="01"
            title="PORTFOLIO MANAGEMENT:"
            description="Manage
many DeFi portfolios with ease and dedicated tools. "
          />
          <BoxFeature
            number="02"
            title="CUSTOM AGREEMENTS:"
            description="You set custom deals and fees for each client. "
          />
          <BoxFeature
            number="03"
            title="DEFI STRATEGIES:"
            description="Follow unique strategies
designed to maximize the yield of
the deposited asset. "
          />
          <BoxFeature
            number="04"
            title="SIMPLE ENOUGH FOR
            ANYONE:"
            description="You can work with clients
            without access to web3"
          />
          <BoxFeature
            number="05"
            title="RISK MANAGEMENT:"
            description="The 'Risk' definition it is not the
            same for all clients"
          />
          <BoxFeature
            number="06"
            title="NON-CUSTODIAL PLATFORM:"
            description="Your clients have full
            ownership of their funds at all
            times. Onlv owners of the
            assets can touch them"
          />
        </SimpleGrid>
      </Flex>
      <Flex w="full" h="650px" position="relative" direction="column">
        <Box w="full" h="50%"></Box>
        <Box w="full" h="50%" bg="#1F122B"></Box>
        <Flex
          className={styles.image}
          position="absolute"
          w="full"
          px={{ base: "10%", md: "20%" }}
          justify="center"
          direction={{ base: "column", sm: "row", md: "row" }}
        >
          <Image
            src="/screen1.png"
            alt="screen1"
            objectFit="contain"
            width={336}
            height={600}
            className={styles.screen1}
          />
          <Box w="150px" d={{ base: "none", sm: "block" }} />
          <Flex
            className={styles.image}
            height={{ base: "512px", sm: "383px", md: "512px" }}
          >
            <Image
              src="/screen2.png"
              alt="screen2"
              objectFit="contain"
              width={418}
              height={340}
              className={styles.screen2}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        bg="#1F122B"
        px={{ base: "2", md: "12" }}
        minH="20vh"
        w="full"
        direction="column"
        align="center"
        pt={{ base: "450px", sm: "0px" }}
      >
        <Heading
          color="white"
          fontWeight="400"
          fontSize={{ base: "2rem", md: "3rem" }}
          textAlign="center"
        >
          WITH MIMIC, THE MANAGER IS ONLY RESPONSIBLE FOR THE YIELD STRATEGY.
          THE TREASURY OWNER IS ALWAYS IN CONTROL.
        </Heading>
        <Text py="12" fontSize="1.5rem" color="white" textAlign="center">
          Withdraw options are always available. We developed an agreement
          between the manager and the treasury owner to enable trust-less relation on
          the blockchain. We are starting a new era, a next-gen management layer
          for yield strategies in the DeFi world.
        </Text>
        <Button
          variant="solid"
          size="lg"
          rounded="0"
          mb="12"
          onClick={() => redirectPortfolio()}
        >
          Create new portfolio
        </Button>
      </Flex>
      <Flex py="12" px={{ base: "6", md: "24" }} justify="flex-end">
        <Text color="gray.500" fontWeight="500" textAlign="right">
          2022 MIMIC. ALL RIGHTS RESERVED.
        </Text>
      </Flex>
    </>
  );
}

const BoxFeature = ({ number, title, description }) => {
  const border = "1px solid #bbbbbb";
  return (
    <Flex
      direction="column"
      minH="340px"
      justify="center"
      px="16"
      borderBottom={border}
      borderRight={border}
    >
      <Flex
        align="center"
        bg="#1F122B"
        maxW="55px"
        color="white"
        fontSize="0.9rem"
        px="0"
      >
         <Image
        src="/arrow.png"
        alt="arrow"
        objectFit="contain"
        width={25}
        height={15}
      />
        <Text ml="1">{number}</Text>
      </Flex>
      <Text
        color="#C172FF"
        textTransform="capitalize"
        fontWeight="500"
        fontSize="1.5rem"
        py="3"
      >
        {title}
      </Text>
      <Text color="#626262" fontSize="1.5rem">
        {description}
      </Text>
    </Flex>
  );
};

const Polygon = () => {
  return (
    <Flex align="center">
      <Image
        src="/polygon.svg"
        alt="Polygon"
        objectFit="contain"
        width={30}
        height={30}
      />
      <Text pl="4">Polygon</Text>
    </Flex>
  );
};

const Ethereum = () => {
  return (
    <Flex align="center">
      <Image
        src="/ethereum.svg"
        alt="Polygon"
        objectFit="contain"
        width={30}
        height={30}
      />
      <Text pl="4">Ethereum </Text>
      <Badge ml="4" colorScheme="purple"> SOON</Badge>
    </Flex>
  );
};
