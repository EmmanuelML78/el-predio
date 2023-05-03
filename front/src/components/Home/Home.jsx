import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Oportunidades } from "../Oportunidades/Oportunidades";
import { Nosotros } from "../Nosotros/Nosotros";
import "./Home.module.css";
import { setUser } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Loading from "../Loading/Loading";
import s from "./Home.module.css";
import { FaWhatsapp } from "react-icons/fa";
import Reviews from "../Reviews/Reviews";
import CreadorReviews from "../CreadorReviews/CreadorReviews";
const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewVisible, setReviewVisible] = useState(false);
  console.log(reviewVisible);

  useEffect(() => {
    const fetchData = async () => {
      user;
      if (!user) {
        await dispatch(setUser());
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch, user]);
  console.log("cookies:", document.cookie);

  return (
    <div className="home-container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <a
            href="https://wa.me/521234567890"
            target="_blank"
            className={s.wpp}
          >
            <FaWhatsapp size={50} />
          </a>
          <Cards />
          <Oportunidades />
          <Nosotros />
          {reviewVisible ? (
            <CreadorReviews
              reviewVisible={reviewVisible}
              setReviewVisible={setReviewVisible}
            />
          ) : (
            <>
              <Reviews />
              {!user ? (
                <p
                  style={{
                    color: "white",
                    fontWeight: "500",
                    marginBottom: "2rem",
                  }}
                >
                  Inicie sesión para enviar una review
                </p>
              ) : (
                <button
                  style={{ marginBottom: "2rem" }}
                  onClick={() => setReviewVisible(true)}
                >
                  Ingresa tu Review Aqui
                </button>
              )}
            </>
          )}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
