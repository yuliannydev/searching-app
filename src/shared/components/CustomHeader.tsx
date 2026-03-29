import { Heading, Highlight, Text, Flex } from "@chakra-ui/react";

interface Props {
	title: string;
	description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
	return (
		<Flex gap="6" align="center" justify="center" direction="column" margin="10">
				<Heading size="3xl" letterSpacing="tight">
					<Highlight query="Dragon Ball" styles={{ color: "teal.600" }}>
						{title}
					</Highlight>
				</Heading>
			{description &&
			<Text fontSize="md" color="fg.muted">{description}</Text>}
		</Flex>
	);
};
