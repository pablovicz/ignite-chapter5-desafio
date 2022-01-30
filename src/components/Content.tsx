import { MovieCard } from "./MovieCard";
import { List, ListRowRenderer } from "react-virtualized";
import { memo } from "react";

interface ContentProps {
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };

  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>;
}

function ContentComponent({ selectedGenre, movies }: ContentProps) {


  // const rowRenderer: ListRowRenderer = ({index, key, style} : ListRowRenderer) => {
  //   return (
  //     <div key={key} style={style}>
  //       <MovieCard key={movies[index].imdbID} title={movies[index].Title} poster={movies[index].Poster} runtime={movies[index].Runtime} rating={movies[index].Ratings[0].Value} />
  //     </div>
  //   )
  // }


  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
           {/* <List 
                height={900}  //Auto -> seta automaticamente a maxima altura
                rowHeight={500}
                width={900}
                overscanRowCount={4}
                rowCount={movies.length}
                rowRenderer={rowRenderer}
            
            /> */}

        </div>
      </main>
    </div>
  )
}


export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return prevProps.selectedGenre === nextProps.selectedGenre;
});