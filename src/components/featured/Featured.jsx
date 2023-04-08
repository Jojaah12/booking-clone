import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/150492142.jpg?k=efebfcb5e00a46bcbc565288adfa7b312f3499bf211fce21abb1ab217cdd1fc2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/max1200/147544954.jpg?k=26646a97b097b746ad0608dfe9c7c1fc6015271a14701a34aec649a9ba86cf85&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/max1200/144102684.jpg?k=1b43e1ca23c2ee0ac8b24e734164e3bed96ad43cad6377ac03d01be95b9da5e2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
