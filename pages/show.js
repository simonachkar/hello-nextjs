import Header from '../components/Header';
import axios from 'axios';

const Show = props => (
  <div>
    <Header />
    <h1>{props.show.name}</h1>
    <p dangerouslySetInnerHTML={{ __html: props.show.summary }} />
    <img src={props.show.image.medium} />
  </div>
);

Show.getInitialProps = async context => {
  const id = context.query.id;
  const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  const show = res.data;

  return { show };
};

export default Show;
