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

export default function Terms() {
  return (
    <>
      <Box w="full" className={styles.page}>
        <Flex direction={"column"} align="center" p={[0, 6, 8]} w="full">
          <Image src="/mimic.svg" alt="Mimic Logo" width={300} height={70} />
          <Heading>MIMIC TERMS & CONDITION</Heading>
          <Text py="6">
            Welcome to https://mimic.fi, a website-hosted user interface (the
            “Interface” or “App”) provided by Mimic Team. (“we”, “our”, or
            “us”). The Interface provides access to a decentralized tool to
            manage defi treasuries in a trustless way (the “Protocol”). This
            Terms of Service Agreement (the “Agreement”) explains the terms and
            conditions by which you may access and use the Interface. You must
            read this Agreement carefully. By accessing, joining any strategy or
            using the Interface, you signify that you have read, understand, and
            agree to be bound by this Agreement in its entirety. If you do not
            agree, you are not authorized to access or use the Interface. Exit
            now.
            <Heading size="md">1. Modification of this Agreement</Heading>
            We reserve the right, in our sole discretion, to modify this
            Agreement from time to time. If we make any modifications, we will
            notify you by updating the date at the top of the Agreement and by
            maintaining a current version of the Agreement at
            https://mimic.fi/terms. All modifications will be effective when
            they are posted, and your continued use of the Interface will serve
            as confirmation of your acceptance of those modifications. If you do
            not agree with any modifications to this Agreement, you must
            immediately stop accessing and using the Interface and the protocol.
            <Heading size="md">2. Eligibility</Heading>
            To access or use the Interface, you must be able to form a legally
            binding contract with us. Accordingly, you represent that you are at
            least eighteen years old and have the full right, power, and
            authority to enter into and comply with the terms and conditions of
            this Agreement on behalf of yourself and any company or legal entity
            for which you may access or use the Interface. You further represent
            that you are not a citizen, resident, or member of any jurisdiction
            or group that is subject to economic sanctions by the United States,
            or where your use of the Interface would be illegal or otherwise
            violate any applicable law. You further represent that your access
            and use of the Interface will fully comply with all applicable laws
            and regulations, and that you will not access or use the Interface
            to conduct, promote, or otherwise facilitate any illegal activity.
            <Heading size="md">3. Proprietary Rights</Heading>
            We own all intellectual property and other rights in the Interface
            and its contents, including (but not limited to) software, text,
            images, trademarks, service marks, copyrights, patents, and designs.
            Unless expressly authorized by us, you may not copy, modify, adapt,
            rent, license, sell, publish, distribute, or otherwise permit any
            third party to access or use the Interface or any of its contents.
            Provided that you are eligible, you are hereby granted a single,
            personal, limited license to access and use the Interface. This
            license is non-exclusive, non-transferable, and freely revocable by
            us at any time without notice or cause. Use of the Interface or its
            contents for any purpose not expressly permitted by this Agreement
            is strictly prohibited. We own all intellectual property and other
            rights in the Interface and its contents, including (but not limited
            to) software, text, images, trademarks, service marks, copyrights,
            patents, and designs. Unless expressly authorized by us, you may not
            copy, modify, adapt, rent, license, sell, publish, distribute, or
            otherwise permit any third party to access or use the Interface or
            any of its contents. Provided that you are eligible, you are hereby
            granted a single, personal, limited license to access and use the
            Interface. This license is non-exclusive, non-transferable, and
            freely revocable by us at any time without notice or cause. Use of
            the Interface or its contents for any purpose not expressly
            permitted by this Agreement is strictly prohibited. Unlike the
            Interface, the Protocol is comprised entirely of open-source
            software running on the public Ethereum blockchain and is not our
            proprietary property.
            <Heading size="md">4. Prohibited Activity</Heading>
            You agree not to engage in, or attempt to engage in, any of the
            following categories of prohibited activity in relation to your
            access and use of the Interface: A. Intellectual Property
            Infringement. Activity that infringes on or violates any copyright,
            trademark, service mark, patent, right of publicity, right of
            privacy, or other proprietary or intellectual property rights under
            the law. B. Cyberattack. Activity that seeks to interfere with or
            compromise the integrity, security, or proper functioning of any
            computer, server, network, personal device, or other information
            technology system, including (but not limited to) the deployment of
            viruses and denial of service attacks. C. Fraud and
            Misrepresentation. Activity that seeks to defraud us or any other
            person or entity, including (but not limited to) providing any
            false, inaccurate, or misleading information in order to unlawfully
            obtain the property of another. D. Market Manipulation. Activity
            that violates any applicable law, rule, or regulation concerning the
            integrity of trading markets, including (but not limited to) the
            manipulative tactics commonly known as spoofing and wash trading. F.
            Any Other Unlawful Conduct. Activity that violates any applicable
            law, rule, or regulation of the United States or another relevant
            jurisdiction, including (but not limited to) the restrictions and
            regulatory requirements imposed by U.S. law.
            <Heading size="md">5. No Professional Advice</Heading>
            All information provided by the Interface is for informational
            purposes only and should not be construed as professional advice.
            You should not take, or refrain from taking, any action based on any
            information contained in the Interface. Before you make any
            financial, legal, or other decisions involving the Interface, you
            should seek independent professional advice from an individual who
            is licensed and qualified in the area for which such advice would be
            appropriate.
            <Heading size="md">6. No Warranties</Heading>
            The Interface is provided on an “AS IS” and “AS AVAILABLE” basis. We
            do not guarantee that the Site will be secure or free from bugs or
            viruses. To the fullest extent permitted by law, we disclaim any
            representations and warranties of any kind, whether express,
            implied, or statutory, including (but not limited to) the warranties
            of merchantability and fitness for a particular purpose. You
            acknowledge and agree that your use of the Interface is at your own
            risk. We do not represent or warrant that access to the Interface
            will be continuous, uninterrupted, timely, or secure; that the
            information contained in the Interface will be accurate, reliable,
            complete, or current; or that the Interface will be free from
            errors, defects, viruses, or other harmful elements. No advice,
            information, or statement that we make should be treated as creating
            any warranty concerning the Interface. We do not endorse, guarantee,
            or assume responsibility for any advertisements, offers, or
            statements made by third parties concerning the Interface.
            <Heading size="md">7. No Fiduciary Duties</Heading>
            This Agreement is not intended to, and does not, create or impose
            any fiduciary duties on us. To the fullest extent permitted by law,
            you acknowledge and agree that we owe no fiduciary duties or
            liabilities to you or any other party, and that to the extent any
            such duties or liabilities may exist at law or in equity, those
            duties and liabilities are hereby irrevocably disclaimed, waived,
            and eliminated. You further agree that the only duties and
            obligations that we owe you are those set out expressly in this
            Agreement.
            <Heading size="md">8. Compliance Obligations</Heading>
            The Interface is operated from facilities within the United States.
            The Interface may not be available or appropriate for use in other
            jurisdictions. By accessing or using the Interface, you agree that
            you are solely and entirely responsible for compliance with all laws
            and regulations that may apply to you. You may not use the Interface
            if you are a citizen, resident, or member of any jurisdiction or
            group that is subject to economic sanctions by the United States, or
            if your use of the Interface would be illegal or otherwise violate
            any applicable law. The Interface and all of its contents are solely
            directed to individuals, companies, and other entities located
            within the United States.
            <Heading size="md">9. Assumption of Risk</Heading>
            By accessing and using the Interface, you represent that you
            understand the inherent risks associated with using cryptographic
            and blockchain-based systems, and that you have a working knowledge
            of the usage and intricacies of digital assets such as bitcoin
            (BTC), ether (ETH), and other digital tokens such as those following
            the Ethereum Token Standard (ERC-20). You further understand that
            the markets for these digital assets are highly volatile due to
            factors including (but not limited to) adoption, speculation,
            technology, security, and regulation. You acknowledge that the cost
            and speed of transacting with cryptographic and blockchain-based
            systems such as Ethereum or Polygon are variable and may increase
            dramatically at any time. You further acknowledge the risk that your
            digital assets may lose some or all of their value while they are
            supplied to the Protocol.
            <Heading size="md">
              10. Third-Party Resources and Promotions
            </Heading>
            The Interface may contain references or links to third-party
            resources, including (but not limited to) information, materials,
            products, or services, that we do not own or control. In addition,
            third parties may offer promotions related to your access and use of
            the Interface. We do not endorse or assume any responsibility for
            any such resources or promotions. If you access any such resources
            or participate in any such promotions, you do so at your own risk,
            and you understand that this Agreement does not apply to your
            dealings or relationships with any third parties. You expressly
            relieve us of any and all liability arising from your use of any
            such resources or participation in any such promotions.
            <Heading size="md">11. Release of Claims</Heading>
            You expressly agree that you assume all risks in connection with
            your access and use of the Interface and your interaction with the
            Protocol. You further expressly waive and release us from any and
            all liability, claims, causes of action, or damages arising from or
            in any way relating to your use of the Interface and your
            interaction with the Protocol.
            <Heading size="md">12. Indemnity</Heading>
            You agree to hold harmless, release, defend, and indemnify us and
            our officers, directors, employees, contractors, agents, affiliates,
            and subsidiaries from and against all claims, damages, obligations,
            losses, liabilities, costs, and expenses arising from: (a) your
            access and use of the Interface; (b) your violation of any term or
            condition of this Agreement, the right of any third party, or any
            other applicable law, rule, or regulation; and (c) any other party’s
            access and use of the Interface with your assistance or using any
            device or account that you own or control.
            <Heading size="md">13. Limitation of Liability</Heading>
            Under no circumstances shall we or any of our officers, directors,
            employees, contractors, agents, affiliates, or subsidiaries be
            liable to you for any indirect, punitive, incidental, special,
            consequential, or exemplary damages, including (but not limited to)
            damages for loss of profits, goodwill, use, data, or other
            intangible property, arising out of or relating to any access or use
            of the Interface, nor will we be responsible for any damage, loss,
            or injury resulting from hacking, tampering, or other unauthorized
            access or use of the Interface or the information contained within
            it. We assume no liability or responsibility for any: (a) errors,
            mistakes, or inaccuracies of content; (b) personal injury or
            property damage, of any nature whatsoever, resulting from any access
            or use of the Interface; (c) unauthorized access or use of any
            secure server or database in our control, or the use of any
            information or data stored therein; (d) interruption or cessation of
            function related to the Interface; (e) bugs, viruses, trojan horses,
            or the like that may be transmitted to or through the Interface; (f)
            errors or omissions in, or loss or damage incurred as a result of
            the use of, any content made available through the Interface; and
            (g) the defamatory, offensive, or illegal conduct of any third
            party. Under no circumstances shall we or any of our officers,
            directors, employees, contractors, agents, affiliates, or
            subsidiaries be liable to you for any claims, proceedings,
            liabilities, obligations, damages, losses, or costs in an amount
            exceeding the amount you paid to us in exchange for access to and
            use of the Interface, or $100.00, whichever is greater.
            <Heading size="md">14. Contacting Us</Heading>
            Should you have any question about these Terms, or wish to contact
            us for any reason whatsoever, please do so by sending us an email
            at mimicfi@protonmail.com
          </Text>
        </Flex>
      </Box>
    </>
  );
}
