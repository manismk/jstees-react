import "./error404.css";

export const Error404 = () => {
  return (
    <>
      <div>
        <h3 className="heading--3 text--center m-v-1">Page Not Found</h3>
        <div className="image--404--container">
          <img
            className="img--res"
            src={`${process.env.PUBLIC_URL}/assets/error404.svg`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
