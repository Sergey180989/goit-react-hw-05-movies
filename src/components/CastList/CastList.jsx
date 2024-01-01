import { List, Item, StyledImage } from 'components/CastList/Cast.styled';

const CastList = ({ credits }) => {
  return (
    <div>
      <List>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            const profileAvatar = profile_path
              ? `https://image.tmdb.org/t/p/w500/${profile_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png';
            return (
              <Item key={id}>
                <StyledImage src={profileAvatar} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </Item>
            );
          })}
      </List>
    </div>
  );
};

export default CastList;