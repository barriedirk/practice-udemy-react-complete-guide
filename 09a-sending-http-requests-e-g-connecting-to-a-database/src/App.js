import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // function fetchMoviesHandler() {
    //     fetch("https://swapi.dev/api/films/")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             const transformedMovies = data.results.map((movieData) => {
    //                 return {
    //                     id: movieData.episode_id,
    //                     title: movieData.title,
    //                     openingText: movieData.opening_crawl,
    //                     releaseDate: movieData.release_date,
    //                 };
    //             });
    //
    //             setMovies(transformedMovies);
    //         });
    // }

    // with async and await
    // check: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    // Note:
    //     if you try to call the first time this code to get data, could be potentionally create a infinite loop because of render, update, component, etc
    //     to avoid the problem of infinite loop use useEffect and useCallback
    // async function fetchMoviesHandler() {
    //     setIsLoading(true);
    //     setError(null);
    //
    //     // const response = await fetch("https://swapi.dev/api/films/");
    //     // const data = await response.json();
    //     // const transformedMovies = data.results.map((movieData) => {
    //     //     return {
    //     //         id: movieData.episode_id,
    //     //         title: movieData.title,
    //     //         openingText: movieData.opening_crawl,
    //     //         releaseDate: movieData.release_date,
    //     //     };
    //     // });
    //     // setMovies(transformedMovies);
    //     // setIsLoading(false);

    //     // how to manage bad request
    //     // the url is wrong as purpose
    //     try {
    //         const response = await fetch("https://swapi.dev/api/film/");

    //         console.log("[ response ] ::: ", response);
    //         console.log("[ response.ok ] ::: ", response.ok);
    //         console.log("[ response.status ] ::: ", response.status);

    //         if (!response.ok) {
    //             throw new Error("Something went wrong!");
    //         }

    //         const data = await response.json();

    //         const transformedMovies = data.results.map((movieData) => {
    //             return {
    //                 id: movieData.episode_id,
    //                 title: movieData.title,
    //                 openingText: movieData.opening_crawl,
    //                 releaseDate: movieData.release_date,
    //             };
    //         });

    //         setMovies(transformedMovies);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    //     setIsLoading(false);
    // }

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch("https://swapi.dev/api/films/");

            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();

            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });

            setMovies(transformedMovies);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    // const dummyMovies = [
    //     {
    //         id: 1,
    //         title: "Some Dummy Movie",
    //         openingText: "This is the opening text of the movie",
    //         releaseDate: "2021-05-18",
    //     },
    //     {
    //         id: 2,
    //         title: "Some Dummy Movie 2",
    //         openingText: "This is the second opening text of the movie",
    //         releaseDate: "2021-05-19",
    //     },
    // ];

    // return (
    //     <React.Fragment>
    //         <section>
    //             <button>Fetch Movies</button>
    //         </section>
    //         <section>
    //             <MoviesList movies={dummyMovies} />
    //         </section>
    //     </React.Fragment>
    // );

    // return (
    //     <React.Fragment>
    //         <section>
    //             <button onClick={fetchMoviesHandler}>Fetch Movies</button>
    //         </section>
    //         <section>
    //             {!isLoading && movies.length > 0 && (
    //                 <MoviesList movies={movies} />
    //             )}
    //             {!isLoading && !error && movies.length === 0 && <p>Found no movies.</p>}
    //             {isLoading && <p>Loading...</p>}
    //             {!isLoading && error && <p>{error}</p>}
    //         </section>
    //     </React.Fragment>
    // );

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }
    if (movies.length === 0) {
        content = <p>Found no movies.</p>;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
