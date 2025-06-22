export default function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">Wave</h1>
        <ul className="header__navi">
          <li>
            <a href="#">홈</a>
          </li>
          <li>
            <a href="#">마테고리</a>
          </li>
          <li>
            <a href="#">Movie</a>
          </li>
          <li>
            <a href="#">Tv</a>
          </li>
        </ul>
        <div className="header-search">
          <input
            type="text"
            className="header-search__input"
            placeholder="제목으로 찾아보세요."
          />
          <span className="material-symbols-outlined icon"> search </span>
        </div>
      </header>
      {/* <nav className="navigator">
        <ul className="navigator-list">
          <li className="navigator-list__item">
            <img
              src="asset/icons/home.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">홈</strong>
          </li>
          <li className="navigator-list__item">
            <img
              src="asset/icons/live.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">상영중</strong>
          </li>
          <li className="navigator-list__item">
            <img
              src="asset/icons/video.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">개봉예정</strong>
          </li>
          <li className="navigator-list__item">
            <img
              src="asset\icons\search.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">검색</strong>
          </li>
          <li className="navigator-list__item">
            <img
              src="asset/icons/popluar.png"
              alt=""
              className="navigator-list__icon"
            />
            <strong className="navigator-list__txt">인기콘텐츠</strong>
          </li>
        </ul>
      </nav> */}
    </>
  );
}
