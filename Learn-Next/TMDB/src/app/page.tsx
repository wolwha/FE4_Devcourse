export default function page() {
  return (
    <>
      <section className="search-box">
        <div className="search-input">
          <div className="search-wrap">
            <button>x</button>
            <input
              type="text"
              placeholder="영화 제목을 입력하세요"
              autoComplete="off"
            />
            <span className="material-symbols-outlined icon"> search </span>
          </div>
        </div>
      </section>
      <section className="release">
        <div
          className="release-item"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg")`,
          }}
        >
          <div className="release__text">
            <strong className="release__category">NEW RELEASE</strong>
            <h2 className="release__title">Soviet : The Cold War</h2>
            <p className="release__desc">
              Her senses grow sharper, her thinking clearer, and for the first
              time in her life she feels herself fully in control. By the age of
              sixteen, she&apos;s competing for the U.S.
            </p>
            <button className="release__btn">자세히보기</button>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Movies</h3>
        <h4 className="movie-subtext">
          상영중인 영화 <a href="#">더보기</a>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">Now Popular</h3>
        <h4 className="movie-subtext">
          인기있는 영화 <a href="#">더보기</a>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">UP Comming</h3>
        <h4 className="movie-subtext">
          개봉예정 영화 <a href="#">더보기</a>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="movie">
        <h3 className="movie-category">TOP Rated</h3>
        <h4 className="movie-subtext">
          높은 평점을 받은 영화 <a href="#">더보기</a>
        </h4>
        <div className="movie-list">
          <div className="movie-list__item">
            <a href="#" className="skeleton-list-item ui0"></a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w300/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//gqkJSh8pqMdiWwPfRNJGQkuivDi.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
          <div className="movie-list__item">
            <a href="#">
              <figure>
                <img
                  src="https://image.tmdb.org/t/p/w500//clJYtRBUhDtvKhPk2HNfXouviKF.jpg"
                  alt=""
                />
              </figure>
              <div className="movie-list__txt">
                <div className="progress-circle p50">
                  <span>10%</span>
                  <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                  </div>
                </div>
                <strong className="movie-list__title">Civil War</strong>
                <span className="release_date">2023.11.21</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
