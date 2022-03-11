import history from './history';

const nav = (link) => {
  history.push(`search/${link}`);
};

export default nav;
