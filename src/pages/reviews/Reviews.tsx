import { Col, Container, Row } from "react-bootstrap"
import { ReviewForm } from "../../components/reviews/ReviewForm"
import { Movie, movieRespToMovieItem } from "../../components/movies/Movie"
import { Review } from "../../components/reviews/Review"
import { useEffect, useRef, useState } from "react"
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom"

export const Reviews = () => {

    const revText = useRef();
    let params = useParams();
    const filmwebId: string | undefined = params.filmwebId;

    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        if (filmwebId) {
            getMovieData(filmwebId);
        }
    }, [filmwebId]);

    const getMovieData = async (filmwebId: string) => {
        try {
            const response = await api.get(`movies/${filmwebId}`);
            if (response && response.data) {
                const singleMovieResp: Movie = movieRespToMovieItem(response?.data);
                setMovie(singleMovieResp);
                setReviews(singleMovieResp.reviews);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const addReview = async () => {
        //TODO
        Promise.resolve();
    }

    return (
        <>
            <Container>
                <Row>
                    <Col><h3>Reviews</h3></Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <img src={movie?.poster} alt="" />
                    </Col>
                    <Col>
                        {
                            <>
                                <Row>
                                    <Col>

                                        <ReviewForm revText={revText} labelText="Write a Review?" defaultValue="" handleSubmit={addReview} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        }
                        {
                            reviews?.map((r) => {
                                return (
                                    <>
                                        <Row>
                                            <Col>{r.content}</Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <hr />
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
            </Container>
        </>
    )
}