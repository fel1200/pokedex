import StarButton from './StarButton';
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import {useDispatch} from 'react-redux';
import {setFavorite} from '../actions'

const PokemonCard = ({pokemon}) =>{
    const dispatch = useDispatch();
    const renderAbilities = (abilities) => {
        return abilities.map(ability => ability.ability.name).join(', ');
    }
    
    const handleOnFavorite = () =>{
        dispatch(setFavorite({pokemonId : pokemon.id}));
    }
    
    return(
        <Card
            title={pokemon.name}
            cover={<img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
            extra={<StarButton isFavorite={pokemon.favorite}
            onClick = {handleOnFavorite}
                 />}
        >
            <Meta description = {renderAbilities(pokemon.abilities)} />
        </Card>
    ); 
};


export default PokemonCard;