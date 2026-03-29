import { Button, Container, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
	buttonTitle: string;
	placeholder?: string;
	onSearchValue: (search: string) => void;
}


export const SearchBar = ({ buttonTitle, placeholder = 'Search', onSearchValue }: Props) => {
	const [inputSearch, setInputSearch] = useState('');
	
	// No sale del escope de esta funcion 
	// Es para utilizar en el onClick
	const handleSearchComponent = () => {

		// esto esta pendiente
		onSearchValue(inputSearch)

		// Resetea al estado inical
		setInputSearch('')
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		return event.key === 'Enter' ? handleSearchComponent() : null;
	}

	return (
		<Container maxW="xl">
		<Flex gap="4" align="center" justify="center">
			<Input
				type='text'
				placeholder={placeholder} 
				value={inputSearch}
				onChange={(event) => setInputSearch(event.target.value)}
				onKeyDown={ (event) => handleKeyDown(event)}
				size="lg"
				/>
			<Button variant="subtle" onClick={handleSearchComponent}>{buttonTitle}</Button>
		</Flex>
		</Container>
	);
};
