import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=1d12dc17a04a259f9d9b6674ca12df1b`
        );
        const data = await response.json();
        if (data) {
          const {
            title,
            poster_path,
            vote_average,
            release_date,
            runtime,
            overview,
          } = data;

          const newCocktail = {
            title,
            poster_path,
            vote_average,
            release_date,
            runtime,
            overview,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No Movies to display</h2>;
  } else {
    const {
      title,
      poster_path,
      vote_average,
      release_date,
      runtime,
      overview,
    } = cocktail;
    const image = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back to home
        </Link>
        <h2 className="section-title">{title}</h2>
        <div className="drink">
          <img src={image} alt={title}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">title :</span> {title}
            </p>
            <p>
              <span className="drink-data">Ratings :</span> {vote_average} /10
            </p>
            <p>
              <span className="drink-data">Release date :</span> {release_date}
            </p>
            <p>
              <span className="drink-data">Runtime :</span> {runtime} min
            </p>

            <p>
              <span className="drink-data">Overview :</span>
              {overview}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
