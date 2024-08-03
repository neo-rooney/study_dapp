const TokenPage = () => {
  return (
    <div>
      <h1>토큰 판매 페이지</h1>
      <div>
        <span>보내는 이더리움 개수 : </span>
        <input type="text" />
      </div>
      <div>
        <span>받는 토큰의 양 : </span>
        <input type="text" />
      </div>
      <button>받을 토큰 양 조회</button>
      <button>내역 조회</button>
      <button>토큰 구매</button>
      <button>초기화</button>
    </div>
  );
};

export default TokenPage;
