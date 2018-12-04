import Header from '../components/Header';
import axios from 'axios';
import Link from 'next/link';

const Home = props => (
  <div>
    <Header />
    <h1>Home</h1>
    <p>Hello, this is my Next.js app!</p>
    <ul>
      {props.shows.map(({ show }) => (
        <li>
          <Link href={`/show?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

Home.getInitialProps = async () => {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=superman");
  return {
    shows: res.data
  };
};

export default Home;
